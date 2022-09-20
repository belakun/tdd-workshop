import { _EquilateralTriangle } from './EquilateralTriangle';

describe('equilateral triangle', () => {
  it('should calculate area', () => {
    const triangle = new _EquilateralTriangle(1);
    expect(triangle.area).toBe(0.4330127018922193);
  });

  it('area should equal to 0 when side is 0', () => {
    const triangle = new _EquilateralTriangle(0);
    expect(triangle.area).toBe(0);
  });

  it('should throw when side is a negative number', () => {
    expect(() => {
      new _EquilateralTriangle(-34);
    }).toThrow(Error);
  });
});
