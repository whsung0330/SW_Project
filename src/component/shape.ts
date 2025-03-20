export interface Shape {
  id: number;
  posX: number;
  posY: number;
  width: number;
  height: number;
  //color: string;
  draw(context: CanvasRenderingContext2D): void;
  move(dx: number, dy: number): void;
  resize(dw: number, dh: number): void;
}

export class Rectangle implements Shape {
  constructor(
    public id: number,
    public posX: number,
    public posY: number,
    public width: number,
    public height: number
  ) {}

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "black";
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  move(dx: number, dy: number) {
    this.posX += dx;
    this.posY += dy;
  }

  resize(w: number, h: number) {
    this.width = w;
    this.height = h;
  }
}
