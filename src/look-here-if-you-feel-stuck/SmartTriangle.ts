import { _EquilateralTriangle } from './EquilateralTriangle';
import { _RightTriangle } from './RightTriangle';
import { _ScaleneTriangle } from './ScaleneTriangle';

export class _SmartTriangle implements Shape {
  private triangle: Shape;

  constructor(a: number, b?: number, c?: number) {
    if (!b && !c) {
      this.triangle = new _EquilateralTriangle(a);
    } else if (b && !c) {
      this.triangle = new _RightTriangle(a, b);
    } else if (b && c) {
      this.triangle = new _ScaleneTriangle(a, b, c);
    } else {
      this.triangle = new _ScaleneTriangle(0, 0, 0);
    }
  }

  get area(): number {
    return this.triangle.area;
  }
}
