import { Rectangle } from "../component/shape.js";
export class GraphicController {
  constructor(model) {
    this.model = model;
  }
  setView(view) {
    this.view = view;
  }
  getObjects() {
    return this.model.getObjects();
  }
  addRectangle(x, y, w, h) {
    const rect = new Rectangle(this.model.getObjectAmount(), x, y, w, h);
    this.model.addObject(rect);
    this.view.render();
  }
  moveObject(id, dx, dy) {
    const obj = this.model.getObjects().find((obj) => obj.id === id);
    if (!obj) {
      throw new Error("Object not found");
    }
    obj.move(dx, dy);
    this.view.render();
  }
}
