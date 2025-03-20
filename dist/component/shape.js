export class Rectangle {
    constructor(id, posX, posY, width, height) {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
    draw(context) {
        context.fillStyle = "black";
        context.fillRect(this.posX, this.posY, this.width, this.height);
    }
    move(dx, dy) {
        this.posX += dx;
        this.posY += dy;
    }
    resize(w, h) {
        this.width = w;
        this.height = h;
    }
}
