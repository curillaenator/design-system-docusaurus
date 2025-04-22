// @ts-check
const { mapDropShadow } = require('../mapDropShadow');

describe('mappers::mapDropShadow', () => {
  it('should correctly map dropShadow token to box-shadow stringified value', () => {
    const dropShadow = {
      color: 'rgba(239, 68, 68, 0.1)',
      type: 'dropShadow',
      x: '0',
      y: '2',
      blur: '10',
      spread: '0',
    };
    const boxShadow = `${dropShadow.x}px ${dropShadow.y}px ${dropShadow.blur}px ${dropShadow.spread}px ${dropShadow.color}`;

    const result = mapDropShadow(dropShadow);

    expect(result).toBe(boxShadow);
  });

  it('should correctly map innerShadow token to inset box-shadow stringified value', () => {
    const dropShadow = {
      color: 'rgba(0, 0, 0, 0)',
      type: 'innerShadow',
      x: '0',
      y: '0',
      blur: '0',
      spread: '0',
    };
    const insetBoxShadow = `inset ${dropShadow.x}px ${dropShadow.y}px ${dropShadow.blur}px ${dropShadow.spread}px ${dropShadow.color}`;

    const result = mapDropShadow(dropShadow);

    expect(result).toBe(insetBoxShadow);
  });
});
