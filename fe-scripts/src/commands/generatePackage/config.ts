import { FieldsConfig } from './interfaces';

export const config: FieldsConfig = {
  dir: {
    name: 'Укажите директорию',
    templateString: '{dir}',
    required: true,
  },
  name: {
    name: 'Название пакета',
    templateString: 'COMPONENT_NAME',
    required: true,
  },
  status: {
    name: 'Статус пакета: production или rnd',
    templateString: '{status}',
  },
  figma: {
    name: 'Ссылка на макет figma',
    templateString: '{figma}',
  },
  author: {
    name: 'Автор',
    templateString: '{author}',
  },
  slack: {
    name: 'Слак автора',
    templateString: '{slack}',
  },
};
