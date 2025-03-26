import React from "react";
import Canvas from "./view/Canvas";
import { CanvasViewModel } from "./viewModel/CanvasViewModel";
import { CanvasModel } from "./model/CanvasModel";
import ShapeButton from "./view/ShapeButton";

const App: React.FC = () => {
  const model = new CanvasModel();
  const viewModel = new CanvasViewModel(model);

  return (
    <div>
      {/* <h1></h1> */}
      <Canvas viewModel={viewModel} />
      <ShapeButton viewModel={viewModel} />
    </div>
  );
};

export default App;
