import { ComponentConfig } from '../../../types/tokens';
import { ignoredSections } from '../constants';

/**
 * Переменные не применимы к некоторым разделам, поэтому мы чистим от лишних разделов его конфиг
 */
export const getPureComponentConfig = <T extends string>(component: ComponentConfig<T>): ComponentConfig<T> =>
  Object.keys(component).reduce((newComponent, key) => {
    if (ignoredSections.every((value) => !key.includes(value))) {
      // @ts-ignore
      newComponent[key] = component[key];
    }

    return newComponent;
  }, {});
