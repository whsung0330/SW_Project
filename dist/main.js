import { GraphicModel } from "./model/graphicModel.js";
import { GraphicController } from "./controller/graphicController.js";
import { GraphicView } from "./view/graphicView.js";
document.addEventListener("DOMContentLoaded", () => {
  const model = new GraphicModel();
  const controller = new GraphicController(model);
  const view = new GraphicView(controller);
  controller.setView(view);
});
