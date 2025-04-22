import { IconInfo, ImportConfig, SectionInfo } from '../interfaces';
import request from '../core/request';
import createIconInfo from '../core/createIconInfo';
import onlyUnique from '../utils/onlyUnique';

import { FigmaElement, FigmaElementType, FigmaRootObject } from './figma/responces.interface';

const isIcon = (icon: FigmaElement) => icon.type === FigmaElementType.booleanOperation;
const isVector = (icon: FigmaElement) => icon.type === FigmaElementType.vector;

const getSectionList = (nodes: FigmaElement[], path = ''): SectionInfo[] => {
  const result = [];

  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].children) {
      // @ts-ignore
      if (nodes[i].children.some(isIcon)) {
        const name = nodes[i].name + getIconType(nodes[i].children);
        result.push({
          section: {
            ...nodes[i],
            name: name,
          },
          path: `${path}>${name}`,
        });
      } else {
        // @ts-ignore
        result.push(...getSectionList(nodes[i].children, `${path}>${nodes[i].name}`));
      }
    }
  }
  return result;
};

const getIconType = (children: FigmaElement[] | undefined): string => {
  if (children) {
    for (let i = 0; i < children.length; i += 1) {
      if (isVector(children[i])) {
        if (children[i]?.visible === false) {
          continue;
        }
        return children[i].name === 'Solid' ? children[i].name : '';
      }
      return getIconType(children[i].children);
    }
  }
  return '';
};

const getFigmaIcons = async (config: ImportConfig): Promise<IconInfo[]> => {
  const res: FigmaRootObject = await request(`/v1/files/${config.file}/nodes/?ids=${config.nodes.join(',')}`, config.token);

  const nodes = config.nodes.reduce<FigmaElement[]>((acc, key) => {
    const node = res.nodes[key];
    const { document } = node;

    return document.children.concat();
  }, []);

  const icons: IconInfo[] = nodes
    .filter(v => v.type === FigmaElementType.component)
    .map(( node) => {
      return createIconInfo(node, config);
    });

  const iconsArray = Object.values(icons).map((icon) => icon.targetPath);
  if (iconsArray.length !== iconsArray.filter(onlyUnique).length) {
    console.warn('Содержатся дубли в файле figma');
  }

  return icons;
};

export default getFigmaIcons;
