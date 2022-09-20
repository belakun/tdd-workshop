import { _ScaleneTriangle } from './ScaleneTriangle';

describe('scalene triangle', () => {
  it('should calculate triangle area', () => {
    const triangle = new _ScaleneTriangle(3, 4, 5);
    expect(triangle.area).toBe(6);
  });

  it('should calculate semi-perimeter', () => {
    const triangle = new _ScaleneTriangle(3, 4, 5);
    expect(triangle.semiPerimeter).toBe(6);
  });

  it('should throw when at least 2 sides are equal', () => {
    expect(() => {
      new _ScaleneTriangle(3, 3, 5);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(5, 3, 3);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(3, 5, 3);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(5, 5, 5);
    }).toThrow(Error);
  });

  it('should throw when any of sides is negative', () => {
    expect(() => {
      new _ScaleneTriangle(-3, 4, 5);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(5, -3, 4);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(4, 5, -3);
    }).toThrow(Error);
  });

  it('should throw when any side is 0', () => {
    expect(() => {
      new _ScaleneTriangle(0, 4, 5);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(3, 0, 5);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(3, 4, 0);
    }).toThrow(Error);
  });

  it('should throw when sum of two smaller sides is less than longest side', () => {
    expect(() => {
      new _ScaleneTriangle(1, 2, 4);
    }).toThrow(Error);
    expect(() => {
      new _ScaleneTriangle(20, 10, 9);
    }).toThrow(Error);
  });
});
