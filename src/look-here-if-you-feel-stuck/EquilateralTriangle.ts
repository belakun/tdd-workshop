export class _EquilateralTriangle implements Shape {
  constructor(private a: number) {
    if (a < 0) {
      throw new Error('Side could not be negative');
    }
  }

  get area(): number {
    return (Math.sqrt(3) * this.a ** 2) / 4;
  }
}
