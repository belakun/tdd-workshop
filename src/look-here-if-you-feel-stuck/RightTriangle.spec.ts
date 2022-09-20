import { _RightTriangle } from './RightTriangle';

describe('right triangle', () => {
  it('should calculate area', () => {
    const triangle = new _RightTriangle(3, 4);
    expect(triangle.area).toBe(6);
  });

  it('should calculate area as 0 when sides are equal to 0', () => {
    const triangle = new _RightTriangle(0, 0);
    expect(triangle.area).toBe(0);
  });

  it('fails when only one of two sides is 0', () => {
    expect(() => {
      new _RightTriangle(0, 4);
    }).toThrow(Error);

    expect(() => {
      new _RightTriangle(3, 0);
    }).toThrow(Error);
  });

  it('fails when at least one side is negative value', () => {
    expect(() => {
      new _RightTriangle(-1, 0);
    }).toThrow(Error);
    expect(() => {
      new _RightTriangle(4, -5);
    }).toThrow(Error);
    expect(() => {
      new _RightTriangle(-4, -5);
    }).toThrow(Error);
  });
});
