import { _SmartTriangle } from './SmartTriangle';

describe('smart triangle', () => {
  it('should create equilateral triangle given only 1 side', () => {
    const triangle = new _SmartTriangle(1);
    expect(triangle.area).toBe(0.4330127018922193);
  });

  it('should create right triangle given only 2 sides', () => {
    const triangle = new _SmartTriangle(3, 4);
    expect(triangle.area).toBe(6);
  });

  it('should create scalene triangle given all 3 sides', () => {
    const triangle = new _SmartTriangle(3, 4);
    expect(triangle.area).toBe(6);
  });
});
