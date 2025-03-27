import { Shape } from "../Entity/Shape";

export class CanvasModel {
  private shapes: Shape[] = [];
  private listeners: (() => void)[] = [];

  addShape(shape: Shape) {
    this.shapes.push(shape);
    this.notifyListeners();
  }

  clearShapes() {
    this.shapes = [];
    this.notifyListeners();
  }

  getShapes(): Shape[] {
    return [...this.shapes]; // 원본 배열이 수정되지 않도록 복사본 반환
  }

  countShapes(): number {
    return this.shapes.length;
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: () => void) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }
}
