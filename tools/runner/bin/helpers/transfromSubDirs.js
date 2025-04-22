module.exports = (dirs, prefix) => {
  const dirsMap = dirs.split(' ');

  if (dirsMap.length > 1) {
    let mapDir = dirsMap.map((path) => `${prefix}/${path}`).join('_');
    return mapDir;
  }

  return `${prefix}/${dirs}`;
};
