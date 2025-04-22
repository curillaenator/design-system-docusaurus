import fs from 'fs-extra';
import cliProgress from 'cli-progress';

import downloadFile from '../../utils/downloadFile';

import getImagesLink from './getImageslink';
import { sleep } from '../../utils/sleep';
import { IconInfo, ImportConfig } from '../../interfaces';

type QueueItem = {
  icon: IconInfo,
  resourceUrl: string,
}

const downloadIconsImage = async (icons: IconInfo[], { token, file, chunkSize, fallBackIcon }: ImportConfig) => {
  console.log('загрузка списка зеркал для изображений');
  const queue: QueueItem [] = [];

  const iconsMapProgress = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
  iconsMapProgress.start(icons.length, 0);

  for (let i = 0; i < icons.length / chunkSize; i += 1) {
    const iconIds: string[] = icons
      .slice(chunkSize * i, chunkSize * (i + 1))
      .map(icon => icon.id);

    const images = await getImagesLink(iconIds, file, token);
    Object.keys(images).forEach((id) => {
      const icon = icons.find(item => item.id === id);
      if (icon) {
        queue.push({
          icon: icon,
          resourceUrl: images[id] as string,
        })
      }
    })
    iconsMapProgress.update(chunkSize * (i + 1));
  }
  iconsMapProgress.stop();

  console.log('загрузка изображений');
  const iconsDownloadedProgress = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
  iconsDownloadedProgress.start(queue.length, 0);

  for (let i = 0; i < queue.length; i += 1) {
    const item = queue[i];
    const icon = item.icon;

    let failedCounter = 0;
    while (true) {
      if (!fs.existsSync(icon.originSvgPath)) {
        if (failedCounter > 0) {
          await sleep(100);
        }
        try {
          await downloadFile(icon.originSvgPath, item.resourceUrl);
        } catch (e) {
          console.log(e);
        }
      }
      failedCounter += 1;
      if (failedCounter > 10) {
        const isOldVersionExists = fs.existsSync(icon.targetPath);
        const fallBackPath = isOldVersionExists ? icon.targetPath : fallBackIcon;
        fs.copyFileSync(fallBackPath, icon.originSvgPath);

        console.error(new Error(`ошибка загрузки файла ${icon.fullName} ${item.resourceUrl}, используется фоллбек ${fallBackPath}`));
      }
      const file = fs.readFileSync(icon.originSvgPath).toString();
      if (file.includes('</svg>')) {
        break;
      }
      fs.unlinkSync(icon.originSvgPath);
    }
    iconsDownloadedProgress.update(i + 1);
  }
  iconsDownloadedProgress.stop();
};

export default downloadIconsImage;
