import { isTablet } from '../isTablet';

let navigatorUserAgent = '';

const setUserAgent = (value: string) => {
  navigatorUserAgent = value;
};

Object.defineProperty(global.navigator, 'userAgent', {
  get() {
    return navigatorUserAgent;
  },
});

const userAgentMock: [string, boolean][] = [
  [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    false,
  ],
  ['Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148', true],
  [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1',
    false,
  ],
  ['Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1', false],
  [
    'Mozilla/5.0 (Linux; Android 6.0.1; RedMi Note 5 Build/RB3N5C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36',
    false,
  ],
  [
    'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',
    false,
  ],
  [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    false,
  ],
  [
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    false,
  ],
];

describe('Тесты uikit utils isTablet', () => {
  it.each(userAgentMock)('isTablet', (userAgent, value) => {
    setUserAgent(userAgent);

    expect(isTablet()).toEqual(value);
  });

  it('Тест на MacIntel', () => {
    setUserAgent(userAgentMock[0][0]);
    Object.defineProperties(window.navigator, {
      maxTouchPoints: {
        value: 10,
      },
      platform: {
        value: 'MacIntel',
      },
    });

    expect(isTablet()).toBeTruthy();
  });
});
