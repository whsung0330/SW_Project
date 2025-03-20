import { Shape } from "../component/shape";

export class GraphicModel {
  private objects: Shape[] = [];

  addObject(obj: Shape) {
    this.objects.push(obj);
  }

  getObjects(): Shape[] {
    return this.objects;
  }

  getObjectAmount(): number {
    return this.objects.length;
  }
}
