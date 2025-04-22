import { useEffect, useState } from 'react';

type UseImageLoaderFetchProps = (
  src: string,
  init?: RequestInit,
) => {
  dataImg: string;
  error: boolean;
};

/**
 * Хук обеспечивающий загрузку изображения, через fetch();
 *
 * ВНИМАНИЕ могут быть проблемы с CORS - по этому нужно настраивать еще бэк, для этого есть init параметр для заголовков и так далее
 *
 * @param src - путь до изображения
 * @param init - заголовки для запроса
 */
export const useImageLoaderFetch: UseImageLoaderFetchProps = (src, init) => {
  const [dataUrl, setDataUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    fetch(src as string, init)
      .then((result) => {
        const status = result?.status || 200;
        if (status >= 200 && status < 400) {
          result.blob().then((blob) => {
            const reader = new FileReader();
            reader.onload = (): void => {
              setError(false);
              setDataUrl(reader.result as string);
            };
            reader.onerror = (): void => {
              setError(true);
            };

            reader.readAsDataURL(blob);
          });
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [src, init]);

  return {
    dataImg: dataUrl,
    error,
  };
};

type UseImageLoaderProps = (src: string) => {
  dataImg: string;
  error: boolean;
};

/**
 * Хук обеспечивающий загрузку изображения, через new Image();
 *
 * @param src - путь до изображения
 */
export const useImageLoader: UseImageLoaderProps = (src) => {
  const [dataUrl, setDataUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!src) {
      setError(false);
      setDataUrl('');
      return;
    }

    const image = new Image();
    image.src = src;
    image.onload = (): void => {
      setError(false);
      setDataUrl(src);
    };
    image.onerror = (): void => {
      setError(true);
    };
  }, [src]);

  return {
    dataImg: dataUrl,
    error,
  };
};
