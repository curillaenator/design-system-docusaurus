import { IconInfo } from '../interfaces';
import checksMap from '../updateIconSteps/duplicationChecks';
import { TypeOfCheck } from '../updateIconSteps/duplicationChecks/interfaces';

const badCases = [
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/alert/error.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/content/report.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/action/accessibility.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/action/accessibility-new.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/image/filter-vintage.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/action/settings.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/maps/trip-origin.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/device/brightness-low.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/social/mood-bad.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/editor/insert-emoticon.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/social/sentiment-very-satisfied.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/editor/insert-emoticon.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/deprecated/ic-competition.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/image/brightness-1.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/image/panorama-wide-angle.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/image/crop-3-2.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/scp/nav-failed.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/scp/task-status-fail.svg',
  },
];

const goodCases = [
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/maps/local-phone.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/communication/call.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/editor/insert-comment.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/communication/comment.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/content/mail.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/communication/email.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/action/swap-vert.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/communication/import-export.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/maps/place.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/communication/location-on.svg',
  },
  {
    a: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/device/signal-cellular-no-sim.svg',
    b: '/Users/u18756870/uikit/packages/ui/Icon/src/assets/icons/communication/no-sim.svg',
  },
];

const crateIconByPath = (path: string): IconInfo => {
  const name: string = (path.split('/').pop() as string).replace('.svg', '');
  return {
    iconMapKey: name,
    iconName: name,
    sectionName: '',
    targetPath: path,
    fullName: name,
    originTSXPath: path,
    originSvgPath: path,
    originalName: path,
  };
};

const checkDuplicationCases = async () => {
  console.log('badCases');
  for (let i = 0; i < badCases.length; i += 1) {
    const item = badCases[i];

    const a = crateIconByPath(item.a);
    const b = crateIconByPath(item.b);

    const result = await checksMap[TypeOfCheck.byScreenshot](a, b);
    if (result) {
      console.log(item.a);
    }
  }

  console.log('goodCases');
  for (let i = 0; i < goodCases.length; i += 1) {
    const item = goodCases[i];

    const a = crateIconByPath(item.a);
    const b = crateIconByPath(item.b);

    const result = await checksMap[TypeOfCheck.byScreenshot](a, b);
    if (!result) {
      console.log(item.a);
    }
  }
};

export default checkDuplicationCases;
