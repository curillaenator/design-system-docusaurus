import { isSafari } from '@kit-base/uikit-utils';

export const DEFAULT_TEST_ID = 'UIKit.Textarea';

export const INPUT_FIELD_TEST_ID = `${DEFAULT_TEST_ID}.InputField`;
export const ICON_LEFT_TEST_ID = `${DEFAULT_TEST_ID}.IconLeft`;
export const ICON_RIGHT_TEST_ID = `${DEFAULT_TEST_ID}.IconRight`;
export const LABEL_LEFT_TEST_ID = `${DEFAULT_TEST_ID}.LabelLeft`;
export const LABEL_RIGHT_TEST_ID = `${DEFAULT_TEST_ID}.LabelRight`;

export const ICON_META_LEFT_TEST_ID = `${DEFAULT_TEST_ID}.IconMetaLeft`;
export const CAPTION_LEFT_TEST_ID = `${DEFAULT_TEST_ID}.CaptionLeft`;
export const ICON_META_RIGHT_TEST_ID = `${DEFAULT_TEST_ID}.IconMetaRight`;
export const CAPTION_RIGHT_TEST_ID = `${DEFAULT_TEST_ID}.CaptionRight`;

export const IS_SAFARI = isSafari();
export const META_ICON_SIZE = 'xs';
