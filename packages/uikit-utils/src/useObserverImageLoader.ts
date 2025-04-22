import { useState, useCallback, RefObject } from 'react';

import { useImageLoaderFetch } from './useImageLoader';
import { useIntersectionObserver } from './useIntersectionObserver';

interface ImageLoadResult {
  /** Загруженное изображение */
  dataImg: string;
  /** Ошибка загрузки изображения */
  error: boolean;
}

/** Тип загрузки. Lazy - загрузка при необходимости, auto - загрузка сразу */
type LoadingType = 'lazy' | 'auto';

interface UseObserverImageLoaderParams {
  /** Путь до изображения */
  src: string;
  /** Тип загрузки изображения */
  loading?: LoadingType;
  /** Элемент используемый для тригера запуска загрузки изображения */
  observerRef: RefObject<HTMLElement | undefined>;
  /** Настройки IntersectionObserver */
  options?: IntersectionObserverInit;
}

type UseObserverImageLoader = (params: UseObserverImageLoaderParams) => ImageLoadResult;

const LAZY_TYPE_IN_PLACE = {
  rootMargin: '0px',
  threshold: 0.2,
};

/**
 * Обеспечивает загрузку изображения по необходимости, в качестве аргумента принимает объект
 * @param observerRef - элемент используемый для тригера запуска загрузки изображения
 * @param src - путь до изображения
 * @param loading - тип загрузки изображения (lazy - загрузка при необходимости, auto - загрузка сразу)
 * @param options - настройки для IntersectionObserver
 * @see https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */
export const useObserverImageLoader: UseObserverImageLoader = ({
  loading = 'lazy',
  observerRef,
  src,
  options = LAZY_TYPE_IN_PLACE,
}) => {
  const [canLoadImg, setCanLoadImg] = useState(loading === 'auto');
  const startLoadImage = useCallback(() => {
    setCanLoadImg(true);
    return true;
  }, []);

  useIntersectionObserver({
    ref: observerRef,
    callback: startLoadImage,
    options,
  });

  return useImageLoaderFetch(canLoadImg ? src : '');
};
