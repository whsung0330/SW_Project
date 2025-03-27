import { Ellipse, Rectangle, Shape } from "./Shape";

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
        return new Ellipse(id, startX, startY, endX, endY, color);
      
      default:
        throw new Error(`Unknown type shape ${type}`);
    }
  }
}
