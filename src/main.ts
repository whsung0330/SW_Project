import { GraphicModel } from "./model/graphicModel";
import { GraphicController } from "./controller/graphicController";
import { GraphicView } from "./view/graphicView";

document.addEventListener("DOMContentLoaded", () => {
  const model = new GraphicModel();
  const controller = new GraphicController(model);
  const view = new GraphicView(controller);
  controller.setView(view);
});
