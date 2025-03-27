import { Circle, Rectangle, Shape } from "./Shape";

interface ShapeProps {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
}

export class ShapeFactory {
  static createShape(type: string, props: ShapeProps): Shape {
    const { id, startX, startY, endX, endY, color } = props;

    switch (type) {
      case "rectangle":
        return new Rectangle(id, startX, startY, endX, endY, color);

      case "circle":
        // 타원
        const radiusX = Math.abs(endX - startX) / 2;
        const radiusY = Math.abs(endY - startY) / 2;
        return new Circle(id, startX, startY, endX, endY, radiusX, radiusY, color);
      
      default:
        throw new Error(`Unknown type shape ${type}`);
    }
  }
}
