import { useRef, useState, useEffect, useCallback } from 'react';
import { throttled } from '@kit-base/uikit-utils';
import cn from 'classnames';

import type { ShapeProps } from '../interfaces';
import styles from '../shape.module.scss';

const RADIUS_Q_ADD = 3;
const RADIUS_Q_MULT = 1.25;
const BEZIER_Q = 0.19;

export const useShapeParams = (props: ShapeProps) => {
  const {
    borderRadius = 16,
    fixedHeight,
    className,
    stroke = 0,
    defferedRender = true,
    // tlcr,
    // trcr,
    // brcr,
    // blcr,
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [boundings, setBoundings] = useState<string>('0_0_0');

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.setProperty('--current-bdw', String(stroke));
  }, [stroke]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledSetBoundings = useCallback(throttled(setBoundings, 14), []); // 28 или 39 - быстро но дерганно, 28 - напряжнее, но плавно, хитрая настройка под 200мс анимацию

  // слидит за размерами родителя и генерит svg по получаемым размерам
  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.target.getBoundingClientRect();

      const bdw = ref.current?.style.getPropertyValue('--current-bdw');

      if (defferedRender) {
        // тестовые оптимизаци шейпов документаци palette под анимацию сайдбара докузавра:

        // при дилее тротла в 28мс за 200мс анимации сайдбара алгоритм стремиться отрендерить анимацию за 7 кадров
        // в каждом из которых происходит перерасчет геометрии шейпа. Суть: 28 * 7 = 196ms. то есть последний рендер
        // шейпа случается максимально близко к концу анимации сайдбара и расчитывается корректно под верные конечные размеры
        // родителя. как позаказала практика попадать ровно в 200 нельзя, последний рендер не случиться и все будет не красиво!
        // Попадание в 195-196мс - то что нужно, тк анимации уже почти закончилась и чаще всего ease типа,
        // конечные расчетные размера родителя будут очень близки к правде и дадут верную геометрию шейпа.
        // при 7к анимации плавность сохраняеться при достаточно высоком уровне производительности.

        throttledSetBoundings(`${width}_${fixedHeight || height}_${bdw || 0}`);
      } else {
        // брут форс рендер, для сильных машинок
        setBoundings(`${width}_${fixedHeight || height}_${bdw || 0}`);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [fixedHeight, defferedRender, throttledSetBoundings]);

  // данные из ресайз обса
  const [W, H, BD] = boundings.split('_').map((v) => +v);

  // Оригинальная статья: https://iamvdo.me/en/blog/smooth-corners-with-css-houdini,
  // Ниже использовона более простая генерация строки path для свг, вместо рисования в canvas, как в оригинальной статье
  // значения коэффов в расчетах:
  // 1.25 для рассчета радиуса,
  // 0.19 для управляющей точки кривой безье, чем ближе к 0, тем мультирадиус будет "притянутее" к углу

  const halfOfShortestContainerSide = Math.min(W / 2, H / 2);
  const bdrs = (borderRadius + RADIUS_Q_ADD) * RADIUS_Q_MULT;

  // вычитаемое координаты начала кривой безье от координат угла контейнера
  const R = bdrs > halfOfShortestContainerSide ? halfOfShortestContainerSide : bdrs;
  // вычитаемые координаты управляющих точек кривой безье от координат угла контейнера
  const S = BEZIER_Q * R;
  // inset оффсет для корректной отрисовки бордер строука по его path.
  // половина от borderWidth т.к. строук заполняет сплайн равномерно в обе стороны от path
  // по заданной ширине. коэф корерктирует генерируемый path, рисуя его с отступом в I px от макс
  // геометрии контейнера родителя
  const I = BD / 2;

  const path = `
  M ${W - R - I} ${I} C ${W - S - I} ${I} ${W - I} ${S + I} ${W - I} ${R + I}
  V ${H - R - I} C ${W - I} ${H - S - I} ${W - S - I} ${H - I} ${W - R - I} ${H - I}
  H ${R + I} C ${S + I} ${H - I} ${I} ${H - S - I} ${I} ${H - R - I}
  V ${R + I} C ${I} ${S + I} ${S + I} ${I} ${R + I} ${I} Z
`.trim();

  return {
    ...rest,
    W,
    H,
    path,
    BD,
    ref,
    className: cn(styles.wrapper, className),
  };
};
