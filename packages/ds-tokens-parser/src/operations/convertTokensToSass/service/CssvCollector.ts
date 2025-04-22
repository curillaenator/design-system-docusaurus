import set from 'lodash/set';

export class CssvCollector {
  variablesByGroups: Record<string, string> = {};

  allVariables: Record<string, string> = {};

  addVariable = (groupName: string, key: string, value: string): void => {
    set(this.variablesByGroups, `${groupName}.${key}`, value);
    set(this.allVariables, key, value);
  };

  getVariablesByGroup = (group: string): string => this.variablesByGroups[group];

  getVariablesByGroups = (): Record<string, string> => this.variablesByGroups;

  getAllVariables = (): Record<string, string> => this.allVariables;
}
