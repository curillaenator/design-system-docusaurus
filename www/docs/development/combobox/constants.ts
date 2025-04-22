import type { IconComponent } from '@kit-xyz/icon';
import type { ComboBoxOption } from '@kit-base/combobox';
import BellIcon from '@kit-xyz/icon/src/assets/duotone/BellIcon';
import GridIcon from '@kit-xyz/icon/src/assets/duotone/GridIcon';
import HomeIcon from '@kit-xyz/icon/src/assets/duotone/HomeIcon';

const DEFAULT_OPTIONS: ComboBoxOption<IconComponent>[] = [
  { id: '1', title: 'Все' },
  { id: '5', title: 'Особенного' },
];

const OPTIONS: ComboBoxOption<IconComponent>[] = [
  { id: '1', title: 'Все', icon: BellIcon },
  { id: '2', title: 'Олеги' },
  { id: '3', title: 'Кроме' },
  { id: '4', title: 'Одного', icon: GridIcon },
  { id: '5', title: 'Особенного', icon: HomeIcon, disabled: true },
  { id: '6', title: 'Олега', disabled: true },
  { id: '7', title: 'Но' },
  { id: '8', title: 'Он' },
  { id: '9', title: 'Не' },
  { id: '10', title: 'Парится' },
  {
    id: '11',
    title: 'Предложение в котором нет сверхдлинных слов и оно будет коректно отображено при isHyphenate = false',
    icon: GridIcon,
  },
  {
    id: '13',
    title:
      'Предложение в котором есть самое невероятнодлинноесловокотороенужноразбитьнаразныестроки и оно будет некоректно отображаться если isHyphenate = false',
  },
];

const OPTION_GROUPS = [
  {
    label: 'Group 1',
    options: [
      { id: '1', title: 'Все', icon: HomeIcon },
      { id: '2', title: 'Олеги' },
      { id: '3', title: 'Кроме', icon: HomeIcon, disabled: true },
      { id: '4', title: 'Одного' },
      { id: '5', title: 'Особенного' },
      { id: '6', title: 'Олега' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { id: '7', title: 'Но' },
      { id: '8', title: 'Он' },
      { id: '9', title: 'Не' },
      { id: '10', title: 'Парится' },
      {
        id: '11',
        title: 'Предложение в котором нет сверхдлинных слов и оно будет коректно отображено при isHyphenate = false',
      },
      {
        id: '12',
        title:
          'Предложение в котором есть самое невероятнодлинноесловокотороенужноразбитьнаразныестроки и оно будет неккоректно отображаться если isHyphenate = false',
      },
    ],
  },
];

const MANY_OPTIONS: ComboBoxOption[] = [
  {
    id: 0,
    title: 'Genevieve',
  },
  {
    id: 1,
    title: 'Odo',
  },
  {
    id: 2,
    title: 'Keefe',
  },
  {
    id: 3,
    title: 'Cathyleen',
  },
  {
    id: 4,
    title: 'Leann',
  },
  {
    id: 5,
    title: 'Bald',
  },
  {
    id: 6,
    title: 'Beatriz',
  },
  {
    id: 7,
    title: 'Etienne',
  },
  {
    id: 8,
    title: 'Glen',
  },
  {
    id: 9,
    title: 'Francisca',
  },
  {
    id: 10,
    title: 'Kristo',
  },
  {
    id: 11,
    title: 'Ingeberg',
  },
  {
    id: 12,
    title: 'Jaymie',
  },
  {
    id: 13,
    title: 'Edyth',
  },
  {
    id: 14,
    title: 'Hardy',
  },
  {
    id: 15,
    title: 'Hendrik',
  },
  {
    id: 16,
    title: 'Evey',
  },
  {
    id: 17,
    title: 'Gert',
  },
  {
    id: 18,
    title: 'Alec',
  },
  {
    id: 19,
    title: 'Glendon',
  },
  {
    id: 20,
    title: 'Silvano',
  },
  {
    id: 21,
    title: 'Ned',
  },
  {
    id: 22,
    title: 'Ameline',
  },
  {
    id: 23,
    title: 'Gusella',
  },
  {
    id: 24,
    title: 'Dorise',
  },
  {
    id: 25,
    title: 'Janeen',
  },
  {
    id: 26,
    title: 'Dolf',
  },
  {
    id: 27,
    title: 'Johnathan',
  },
  {
    id: 28,
    title: 'Kristian',
  },
  {
    id: 29,
    title: 'Kellie',
  },
  {
    id: 30,
    title: 'Worthington',
  },
  {
    id: 31,
    title: 'Frederic',
  },
  {
    id: 32,
    title: 'Frederico',
  },
  {
    id: 33,
    title: 'Alric',
  },
  {
    id: 34,
    title: 'Garnet',
  },
  {
    id: 35,
    title: 'Horace',
  },
  {
    id: 36,
    title: 'Idalia',
  },
  {
    id: 37,
    title: 'Benny',
  },
  {
    id: 38,
    title: 'Lynnea',
  },
  {
    id: 39,
    title: 'Hillery',
  },
  {
    id: 40,
    title: 'Ardeen',
  },
  {
    id: 41,
    title: 'Elissa',
  },
  {
    id: 42,
    title: 'Alexine',
  },
  {
    id: 43,
    title: 'Tiebold',
  },
  {
    id: 44,
    title: 'Raul',
  },
  {
    id: 45,
    title: 'Booth',
  },
  {
    id: 46,
    title: 'Barry',
  },
  {
    id: 47,
    title: 'Barbabra',
  },
  {
    id: 48,
    title: 'Perceval',
  },
  {
    id: 49,
    title: 'Willey',
  },
  {
    id: 50,
    title: 'Chaim',
  },
  {
    id: 51,
    title: 'Chelsea',
  },
  {
    id: 52,
    title: 'Morganica',
  },
  {
    id: 53,
    title: 'Thor',
  },
  {
    id: 54,
    title: 'Dorita',
  },
  {
    id: 55,
    title: 'Bil',
  },
  {
    id: 56,
    title: 'Bess',
  },
  {
    id: 57,
    title: 'Bliss',
  },
  {
    id: 58,
    title: 'Nicholas',
  },
  {
    id: 59,
    title: 'Tasha',
  },
  {
    id: 60,
    title: 'Boyd',
  },
  {
    id: 61,
    title: 'Griff',
  },
  {
    id: 62,
    title: 'Wilton',
  },
  {
    id: 63,
    title: 'Clemmie',
  },
  {
    id: 64,
    title: 'Susann',
  },
  {
    id: 65,
    title: 'Charyl',
  },
  {
    id: 66,
    title: 'Stanford',
  },
  {
    id: 67,
    title: 'Inge',
  },
  {
    id: 68,
    title: 'Leoine',
  },
  {
    id: 69,
    title: 'Terrence',
  },
  {
    id: 70,
    title: 'Marlin',
  },
  {
    id: 71,
    title: 'Becka',
  },
  {
    id: 72,
    title: 'Alis',
  },
  {
    id: 73,
    title: 'Kalvin',
  },
  {
    id: 74,
    title: 'Cchaddie',
  },
  {
    id: 75,
    title: 'Elnora',
  },
  {
    id: 76,
    title: 'Marina',
  },
  {
    id: 77,
    title: 'Rory',
  },
  {
    id: 78,
    title: 'Berkly',
  },
  {
    id: 79,
    title: 'Gabriell',
  },
  {
    id: 80,
    title: 'Dorie',
  },
  {
    id: 81,
    title: 'Pen',
  },
  {
    id: 82,
    title: 'Tades',
  },
  {
    id: 83,
    title: 'Cary',
  },
  {
    id: 84,
    title: 'Hertha',
  },
  {
    id: 85,
    title: 'Suzann',
  },
  {
    id: 86,
    title: 'Gerladina',
  },
  {
    id: 87,
    title: 'Lay',
  },
  {
    id: 88,
    title: 'Rolf',
  },
  {
    id: 89,
    title: 'Griffith',
  },
  {
    id: 90,
    title: 'Aland',
  },
  {
    id: 91,
    title: 'Eward',
  },
  {
    id: 92,
    title: 'Phip',
  },
  {
    id: 93,
    title: 'Ellen',
  },
  {
    id: 94,
    title: 'Harwell',
  },
  {
    id: 95,
    title: 'Hope',
  },
  {
    id: 96,
    title: 'Emmalee',
  },
  {
    id: 97,
    title: 'Averill',
  },
  {
    id: 98,
    title: 'Hildagarde',
  },
  {
    id: 99,
    title: 'Marco',
  },
];

export { OPTIONS, DEFAULT_OPTIONS, OPTION_GROUPS, MANY_OPTIONS };
