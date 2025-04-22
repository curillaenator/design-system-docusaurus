import cliProgress from 'cli-progress';

import { IconInfo } from '../interfaces';

import { TypeOfCheck } from './duplicationChecks/interfaces';
import checksMap from './duplicationChecks';

const linkDuplication = async (iconsMap: IconInfo[], type: TypeOfCheck): Promise<IconInfo[]> => {
  console.log('поиск дублей');
  const duplications = [];
  const icons = iconsMap.sort((a, b) => a.typeName.length - b.typeName.length);

  const progress = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
  progress.start(icons.length, 0);

  for (let i = 0; i < icons.length - 1; i += 1) {
    progress.update(i + 1);
    if (icons[i].link) {
      continue;
    }

    for (let j = i + 1; j < icons.length; j += 1) {
      if (icons[j].link) {
        continue;
      }
      if (await checksMap[type](icons[i], icons[j])) {
        if (icons[i].link) {
          if (icons[i].link !== icons[j]) {
            icons[j].link = icons[i].link;
            duplications.push(icons[j]);
          }
        } else {
          icons[j].link = icons[i];
          duplications.push(icons[j]);
        }
      }
    }
  }

  progress.update(icons.length);
  progress.stop();

  return duplications;
};

export default linkDuplication;
