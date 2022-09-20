// This class should serve as a facade over multiple types of triangles
// It should accept from 1 to 3 arguments as a sides of triangle
// It should have the same interface as any other triangle
// When one side is provided it should create and use an instance of EquilateralTriangle
// When 2 sides are provided - RightTriangle
// When 3 sides are provided - ScaleneTriangle

class SmartTriangle implements Shape {
  area: number;

  constructor(a: number, b?: number, c?: number) {}
}
