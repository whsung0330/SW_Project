import { Rectangle, Shape } from "./Shape";

export class ShapeFactory {
  // TODO: props 타입 정의하기
  // props가 startX, startY, endX, endY, color ... 속성을 가지고 있다고 전제
  static createShape(type: string, props: any): Shape {
    switch (type) {
      case "rectangle":
        const x = props.startX;
        const y = props.startY;
        const width = props.endX - props.startX;
        const height = props.endY - props.startY;
        return new Rectangle(x, y, width, height, props.color);
      //   case "circle":
      //     //TODO: 이거 ellipse 못그리는거 같은데
      //     const centerX = (props.startX + props.endX) / 2;
      //     const centerY = (props.startY + props.endY) / 2;
      //     const radius = props.endX - props.startX;
      //     return new Circle(centerX, centerY, radius, props.color);
      default:
        throw new Error("Unknown type shape");
    }
  }
}
