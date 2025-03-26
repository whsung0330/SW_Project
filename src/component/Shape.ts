export interface Shape {
  id: number;
  draw(ctx: CanvasRenderingContext2D | null): void;
  //TODO: move, resize 추가
  //move(dx: number, dy: number),
  //resize(w: number, h:number)
}

export class Rectangle implements Shape {
  constructor(
    public id: number,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    if (!ctx) throw new Error("context is null");
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Circle implements Shape {
  //TODO: ellipse로 수정
  constructor(
    public id: number,
    public centerX: number,
    public centerY: number,
    public radius: number,
    public color: string
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

//TODO: image, line 추가

// vm
// class ShapeViewModel {
//   createRectangle(startX: number, startY: number, endX: number, endY: number): Rectangle {
//     const width = Math.abs(endX - startX);
//     const height = Math.abs(endY - startY);
//     return new Rectangle(startX, startY, width, height);
//   }

//   createCircle(centerX: number, centerY: number, endX: number, endY: number): Circle {
//     const radius = Math.sqrt((endX - centerX) ** 2 + (endY - centerY) ** 2);
//     return new Circle(centerX, centerY, radius);
//   }
// }
