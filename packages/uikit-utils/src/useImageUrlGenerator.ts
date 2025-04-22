import qs from 'qs';

export interface ImageResizeParams {
  /** Путь до изображения */
  src: string;
  /** Высота */
  width?: number;
  /** Ширина */
  height?: number;
  /** Тип ресайза */
  type?: 'auto' | 'fill' | 'fit';
}

interface ImageProxyParams extends ImageResizeParams {
  /** Значение блюр эффекта * */
  blur?: number;
  /** Обозначение что это изображение используется только для прелоадинга */
  preloader?: boolean;
}

type ProxyImageUrlGenerator = (params: ImageProxyParams) => string | false;

/**
 * Пытается создать урл для изображения, что бы загружать изображения только нужных размеров
 */
const getUrlToResizedImg: ProxyImageUrlGenerator = (params) => {
  const { src = '', width, height, type, blur } = params;
  const queryParams = qs.stringify({ w: width, h: height, type, blur });
  if (!queryParams) {
    return src;
  }

  const connector = src.includes('?') ? '&' : '?';

  return `${src}${connector}${queryParams}`;
};

/**
 * Заглушка на будущее так как это может начнет зависеть от контекста
 */
export const useImageUrlGenerator = (): ProxyImageUrlGenerator => getUrlToResizedImg;
