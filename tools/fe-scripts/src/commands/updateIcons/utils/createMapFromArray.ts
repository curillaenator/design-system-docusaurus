interface Entity {
  id: string;
  [key: string]: any;
}

const createMapFromArray = <T extends Entity>(array: T[]): { [key: string]: T } => {
  return array.reduce<{ [key: string]: T }>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

export default createMapFromArray;
