require('ts-node').register({
  transpileOnly: true,
  compilerOptions: {
    module: 'CommonJS',
  },
});

const path = require('path');
const rollupTypescript = require('@rollup/plugin-typescript');
const image = require('@rollup/plugin-image');
const styles = require('rollup-plugin-styles');
const { getAllFilesFromDirRecursively } = require('../src/commands/utils/getAllFilesFromDirRecursively');
const pluginutils = require("@rollup/pluginutils");
const sass = require('sass');
const pureCssFileNames= [];

const hashes = [];
const cssImporters=[];

function getHash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

function getNameCss(cssFile, hashes, name) {
  let fileName = '';
  hashes.forEach((hash) => {
    if (cssFile.indexOf(hash) > -1) {
      fileName += hash;
    }
  });
  if (fileName.length > 5) return fileName.slice(0,5) + 'ext';
  return fileName;
};

function importCssPlugin(hashes, pureCssFileNames, isCssFileNamesHash) {
  return {
    name: 'importCssPlugin',
    generateBundle(options, bundle) {
      const files = Object.keys(bundle);
      files.forEach((file) => {
        // импорт стилей для модулей
        if (file.indexOf('.module.scss.js') > -1) {
          const { code } = bundle[file];
          const relativePath = path.relative(file, '');
          const levelPath = relativePath?.length > 2 ? relativePath.slice(0, relativePath.length - 2) : './';
          let importString = '';

          hashes.forEach((hash) => {
            if (code.indexOf(`_${hash}`) > -1) {
              importString += `import "${levelPath}${hash}.css"; \r\n`;
            }
          });

          if (importString) {
            this.emitFile({
              type: 'asset',
              fileName: file,
              source: isCssFileNamesHash ? importString + code : code,
            });
          }
        }

        // импорт обычных css, scss файлов
        if (cssImporters.filter( ifile => file.split('.')[0] === ifile.split('/src/')[1].split('.')[0]).length) {
          let importString = '';
          const { code } = bundle[file];
          const relativePath = path.relative(file, '');
          const levelPath = relativePath?.length > 2 ? relativePath.slice(0, relativePath.length - 2) : './';
          pureCssFileNames.forEach((file) => {
            importString += `import "${levelPath}${file}"; \r\n`;
          });

          if (importString) {
            this.emitFile({
              type: 'asset',
              fileName: file,
              source: importString + code,
            });
          }
        }
      });
    },
  };
}

function pureCss(options) {
  const {
    exclude = /\.module.scss$/i,
    include = /\.(s)css$/i,
  } = options ?? {};

  const filter = pluginutils.createFilter(include, exclude);
  return {
    name: "pureCss",
    async resolveId(source, importer) {
        if ((source.indexOf(".scss") > -1 || source.indexOf(".css") > -1) && source.indexOf("module.scss") === -1) {
          cssImporters.push(importer);
          
          return null;
        }
      },
    async load(id) {
      if (!filter(id))
        return null;
      try {
        const code = sass.renderSync({ file: id }).css.toString();
        const hash = getHash(code).toString(36).substr(0, 5);
        pureCssFileNames.push(`pure${hash}.css`);
        this.emitFile({ 
          type: 'asset',
          fileName: `pure${hash}.css`,
          source: code
        });
        return code;
      } catch (error) {
        this.error(error.message, {
          column: parseInt(error.column),
          line: parseInt(error.line)
        });
      }
    }
  };
}

module.exports = {
  getConfig: function(pkg, isCssFileNamesHash) {
    return {
        input: ['./src/index.ts'],
        output: [
          {
            preserveModules: true,
            dir: './build',
            format: 'es',
            exports: 'auto',
            assetFileNames: (assetInfo) => {
              const { name, source } = assetInfo;
              if (name.indexOf('.css') === -1 || !isCssFileNamesHash) {
                  return '[name][extname]';
              }
              return `${getNameCss(source, hashes, name)}.css`;
            },
          },
        ],
        external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
        plugins: [
        image(),
        rollupTypescript({ tsconfig: './tsconfig.build.json' }),
        styles({
            modules: {
            generateScopedName: (name, filename, css) => {
                const hash = getHash(css).toString(36).substr(0, 5);
                if (hashes.indexOf(hash) === -1) {
                hashes.push(hash);
                }
                return `${name}_${hash}`;
            },
            },
            mode: ['extract'],
            sass: {
            impl: 'sass',
            },
        }),
        pureCss({ exclude: /\.module.scss$/i, include: /\.(s)css$/i,}),
        importCssPlugin(hashes, pureCssFileNames, isCssFileNamesHash),
        ],
    }
  },
  getAddInputPlugin: ({ filesDirName, additionalInputs }) => { 
    return (
    function addIconsPlugin() {
      return {
        name: 'addIconsPlugin',
        async options(options) {
          try {
            const filePaths = await getAllFilesFromDirRecursively(filesDirName, (str) => str.indexOf('.tsx') > -1 || str.indexOf('.ts') > -1);
            return ({...options, input: [...options.input, ...additionalInputs, ...filePaths]})
          } catch(err) {
            console.log("err ", err);
          }
        },
      };
    })
  },
  getAddBaseStyles: (baseStyleFiles) => {
    return (
      function addBaseStyles() {
        return {
          name: 'addBaseStyles',
          generateBundle(options, bundle) {
            const files = Object.keys(bundle);
            files.forEach((file) => {
              if (file === 'index.js') {
                const { code } = bundle[file];
      
                if (baseStyleFiles.length) {
                  this.emitFile({
                    type: 'asset',
                    fileName: file,
                    source: baseStyleFiles.map(styleFile => styleFile).join('\n') + code,
                  });
                }
              }
            });
          },
        };
      }
    )
  },
};
