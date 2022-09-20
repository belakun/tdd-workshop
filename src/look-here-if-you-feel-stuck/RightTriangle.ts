export class _RightTriangle implements Shape {
  constructor(private a: number, private b: number) {
    if ((a === 0 && b > 0) || (a > 0 && b === 0)) {
      throw new Error('Both sides should be greater or equal to 0');
    }

    if (a < 0 || b < 0) {
      throw new Error('Sides could not be negative');
    }
  }

  get area(): number {
    return (this.a * this.b) / 2;
  }
}
