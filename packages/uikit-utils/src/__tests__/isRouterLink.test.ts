import { isRouterLink } from '../isRouterLink';

describe('isRouterLink', () => {
  const ROUTER_LINKS = [
    '/test',
    '/static/media/packages/ui/Link/img2.png',
    '/?path=/docs/компоненты-common-avatar--main',
  ];

  const TAG_A_LINKS = [
    'https://www.google.com',
    'http://www.google.com',
    '//google.com',
    '//www.google.com',
    'tel:000000000',
    'mailto:test',
    'ftp://ftpdata',
    '#anchor',
  ];

  it.each(TAG_A_LINKS)(
    'возвращает false для значения %p, которое не подходит для использования в <RouterLink />',
    (link) => {
      expect(isRouterLink(link)).toBeFalsy();
    },
  );

  it.each(ROUTER_LINKS)(
    'возвращает true для значения %p, которое подходит для использования в <RouterLink />',
    (link) => {
      expect(isRouterLink(link)).toBeTruthy();
    },
  );
});
