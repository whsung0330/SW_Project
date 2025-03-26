export interface Shape {
  type: "line" | "rectangle" | "circle";
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
  thickness: number;
}
