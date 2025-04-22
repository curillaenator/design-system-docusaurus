const toLowerFirstLetter = (str: string): string => str[0].toLowerCase() + str.slice(1);

const getCamelCaseName = (name: string) => {
  const temp = name
    .replace(/-(?:[a-zA-Z0-9])/g, (word) => word.replace('-', '').toUpperCase())
    .replace(/_(?:[a-zA-Z0-9])/g, (word) => word.replace('_', '').toUpperCase())
    .replace(/ (?:[a-zA-Z0-9])/g, (word) => word.replace(' ', '').toUpperCase());

  return toLowerFirstLetter(temp);
};

export default getCamelCaseName;
