import { GraphicModel } from "../model/graphicModel";
import { GraphicView } from "../view/graphicView";
import { Rectangle } from "../component/shape";

export class GraphicController {
  private view!: GraphicView;
  constructor(private model: GraphicModel) {}

  setView(view: GraphicView) {
    this.view = view;
  }

  getObjects() {
    return this.model.getObjects();
  }
  addRectangle(x: number, y: number, w: number, h: number) {
    const rect = new Rectangle(this.model.getObjectAmount(), x, y, w, h);
    this.model.addObject(rect);
    this.view.render();
  }

  moveObject(id: number, dx: number, dy: number) {
    const obj = this.model.getObjects().find((obj) => obj.id === id);
    if (!obj) {
      throw new Error("Object not found");
    }

    obj.move(dx, dy);
    this.view.render();
  }
}
