export class GraphicView {
    constructor(controller) {
        this.controller = controller;
        this.selectedObject = null;
        this.isDragging = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.getCanvasPosition = () => {
            const rect = this.canvas.getBoundingClientRect();
            return { x: rect.left, y: rect.top };
        };
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        //마우스 이벤트 리스너
        this.canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
        this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
    }
    onMouseDown(event) {
        const canvasPos = this.getCanvasPosition();
        const mouseX = event.clientX - canvasPos.x;
        const mouseY = event.clientY - canvasPos.y;
        console.log("mouse down", mouseX, mouseY);
        // const objects = this.controller.getObjects();
        this.isDragging = true;
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
    }
    onMouseMove(event) {
        if (!this.isDragging)
            return;
    }
    onMouseUp(event) {
        const canvasPos = this.getCanvasPosition();
        const mouseX = event.clientX - canvasPos.x;
        const mouseY = event.clientY - canvasPos.y;
        const dx = mouseX - this.lastMouseX;
        const dy = mouseY - this.lastMouseY;
        this.isDragging = false;
        console.log("mouse up", this.lastMouseX, this.lastMouseY, mouseX, mouseY);
        this.controller.addRectangle(this.lastMouseX, this.lastMouseY, dx, dy);
    }
    render() {
        var _a;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!this.ctx) {
            throw new Error("2d context is not supported");
        }
        for (const obj of this.controller.getObjects()) {
            obj.draw(this.ctx);
        }
    }
}
