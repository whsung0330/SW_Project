export class GraphicModel {
    constructor() {
        this.objects = [];
    }
    addObject(obj) {
        this.objects.push(obj);
    }
    getObjects() {
        return this.objects;
    }
    getObjectAmount() {
        return this.objects.length;
    }
}
