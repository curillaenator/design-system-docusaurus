const onlyUnique = <T>(value: T, index: number, self: Array<T>): boolean => self.indexOf(value) === index;

export default onlyUnique;
