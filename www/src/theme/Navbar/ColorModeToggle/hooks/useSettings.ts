import useIsBrowser from '@docusaurus/useIsBrowser';
import { translate } from '@docusaurus/Translate';

export const useSettings = (value: 'dark' | 'light') => {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode:
        value === 'dark'
          ? translate({
              message: 'dark mode',
              id: 'theme.colorToggle.ariaLabel.mode.dark',
              description: 'The name for the dark color mode',
            })
          : translate({
              message: 'light mode',
              id: 'theme.colorToggle.ariaLabel.mode.light',
              description: 'The name for the light color mode',
            }),
    },
  );

  return {
    isBrowser,
    title,
  };
};
