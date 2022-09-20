export class _ScaleneTriangle implements Shape {
  constructor(private a: number, private b: number, private c: number) {
    if (a === b || b === c || c === a) {
      throw new Error();
    }

    if (a < 0 || b < 0 || c < 0) {
      throw new Error();
    }

    if ([a, b, c].filter(side => side === 0).length) {
      throw new Error();
    }

    if ((a + b + c) / Math.max(a, b, c) < 2) {
      throw new Error();
    }
  }

  get area() {
    const s = this.semiPerimeter;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  get semiPerimeter() {
    return (this.a + this.b + this.c) / 2;
  }
}
