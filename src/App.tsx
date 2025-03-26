import React from "react";
import Canvas from "./component/Canvas";
import { CanvasViewModel } from "./viewModel/CanvasViewModel";
import { CanvasModel } from "./model/CanvasModel";

const App: React.FC = () => {
  const model = new CanvasModel();
  const viewModel = new CanvasViewModel(model);

  return (
    <div>
      <h1>그림판</h1>
      <Canvas viewModel={viewModel} />
    </div>
  );
};

export default App;
