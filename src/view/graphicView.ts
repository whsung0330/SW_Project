import { GraphicController } from "../controller/graphicController";
import { Shape } from "../component/shape";

export class GraphicView {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private selectedObject: Shape | null = null;
  private isDragging: boolean = false;
  private lastMouseX: number = 0;
  private lastMouseY: number = 0;

  constructor(private controller: GraphicController) {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");

    //마우스 이벤트 리스너
    this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
    this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
  }

  private getCanvasPosition = () => {
    const rect = this.canvas.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  };
  private onMouseDown(event: MouseEvent) {
    const canvasPos = this.getCanvasPosition();
    const mouseX = event.clientX - canvasPos.x;
    const mouseY = event.clientY - canvasPos.y;
    console.log("mouse down", mouseX, mouseY);
    // const objects = this.controller.getObjects();

    this.isDragging = true;
    this.lastMouseX = mouseX;
    this.lastMouseY = mouseY;
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
  }

  private onMouseUp(event: MouseEvent) {
    const canvasPos = this.getCanvasPosition();
    const mouseX = event.clientX - canvasPos.x;
    const mouseY = event.clientY - canvasPos.y;

    const dx = mouseX - this.lastMouseX;
    const dy = mouseY - this.lastMouseY;

    this.isDragging = false;
    console.log("mouse up", this.lastMouseX, this.lastMouseY, mouseX, mouseY);

    this.controller.addRectangle(this.lastMouseX, this.lastMouseY, dx, dy);
  }

  render() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (!this.ctx) {
      throw new Error("2d context is not supported");
    }

    for (const obj of this.controller.getObjects()) {
      obj.draw(this.ctx);
    }
  }
}
