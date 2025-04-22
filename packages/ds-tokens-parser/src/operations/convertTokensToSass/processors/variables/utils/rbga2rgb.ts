// преобразует цвет с прозрачностью в цвет без нее на указанном (по умолчанию - белом) фоне

export const rgba2rgb = (color: number[], background: number[] = [255, 255, 255]) => {
  const [red, green, blue, a] = color;
  const [r_bg, g_bg, b_bg] = background;

  return [
    Math.floor((1 - a) * r_bg + a * red + 0.5),
    Math.floor((1 - a) * g_bg + a * green + 0.5),
    Math.floor((1 - a) * b_bg + a * blue + 0.5),
  ];
};

// rgba2rgb([0, 0, 255, 0,5]) -> [128, 128, 255]
