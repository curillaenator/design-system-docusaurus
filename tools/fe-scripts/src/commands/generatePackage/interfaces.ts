export type PackageData = {
  dir: string;
  name: string;
  status: string;
  figma: string;
  author: string;
  slack: string;
};

export interface Field {
  name: string;
  templateString: string;
  required?: boolean;
  defaultValue?: string;
}

export type FieldsConfig = {
  [Property in keyof PackageData]-?: Field;
};
