import React, { useEffect, useRef } from "react";
import { CanvasViewModel } from "../viewModel/CanvasViewModel";

const Canvas: React.FC<{ viewModel: CanvasViewModel }> = ({ viewModel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      viewModel.initCanvas(canvasRef.current);
    }
  }, [viewModel]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onMouseDown={viewModel.handleMouseDown}
      onMouseMove={viewModel.handleMouseMove}
      onMouseUp={viewModel.handleMouseUp}
      style={{ border: "1px solid black" }}
    />
  );
};

export default Canvas;
