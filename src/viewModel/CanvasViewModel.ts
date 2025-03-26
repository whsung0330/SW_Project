import { CanvasModel } from "../model/CanvasModel";
import { Shape } from "../model/Shape";
import React from "react";

export class CanvasViewModel {
  private model: CanvasModel;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private drawing = false;
  private currentShape: Shape | null = null;

  constructor(model: CanvasModel) {
    this.model = model;
    this.model.subscribe(() => this.redrawCanvas()); // Model이 변경될 때 View 업데이트
  }

  initCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.redrawCanvas(); // 초기 렌더링
  }

  handleMouseDown = (event: React.MouseEvent) => {
    if (!this.ctx || !this.canvas) return;
    this.drawing = true;

    const { offsetX, offsetY } = event.nativeEvent;

    this.currentShape = {
      type: "line",
      startX: offsetX,
      startY: offsetY,
      endX: offsetX,
      endY: offsetY,
      color: "black",
      thickness: 2,
    };
  };

  handleMouseMove = (event: React.MouseEvent) => {
    if (!this.drawing || !this.currentShape) return;

    const { offsetX, offsetY } = event.nativeEvent;
    this.currentShape.endX = offsetX;
    this.currentShape.endY = offsetY;

    this.redrawCanvas(); // 실시간 반영
  };

  handleMouseUp = () => {
    if (this.currentShape) {
      this.model.addShape(this.currentShape); // Model에 추가
      this.currentShape = null;
    }
    this.drawing = false;
  };

  private redrawCanvas() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // 캔버스 초기화

    this.model.getShapes().forEach((shape) => {
      this.ctx!.beginPath();
      this.ctx!.moveTo(shape.startX, shape.startY);
      this.ctx!.lineTo(shape.endX, shape.endY);
      this.ctx!.strokeStyle = shape.color;
      this.ctx!.lineWidth = shape.thickness;
      this.ctx!.stroke();
    });

    if (this.currentShape) {
      this.ctx!.beginPath();
      this.ctx!.moveTo(this.currentShape.startX, this.currentShape.startY);
      this.ctx!.lineTo(this.currentShape.endX, this.currentShape.endY);
      this.ctx!.strokeStyle = this.currentShape.color;
      this.ctx!.lineWidth = this.currentShape.thickness;
      this.ctx!.stroke();
    }
  }
}
