"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const settings_1 = __importDefault(require("./settings"));
class Blob {
    constructor(pos = new math_1.Vec2()) {
        this.pos = pos;
        this._radius = 5;
        this._mass = 0; // calculated when constructor is called
        this.quadrants = [];
        this.velocity = new math_1.Vec2();
        this.direction = new math_1.Vec2();
        this.color = math_1.Color.random();
        this.radius = this._radius;
    }
    destroy() {
    }
    get radius() {
        return this._radius;
    }
    ;
    get mass() {
        return this._mass;
    }
    ;
    set radius(r) {
        this._radius = r;
        this.calcMass();
    }
    ;
    set mass(amt) {
        this._mass = amt;
        this.calcRadius();
    }
    ;
    addMass(amt) {
        this._mass += amt;
        this.calcRadius();
    }
    removeMass(amt) {
        this._mass -= amt;
        this.calcRadius();
    }
    calcMass() {
        this._mass = Math.round(Math.PI * (Math.pow(this._radius, 2)));
    }
    calcRadius() {
        this._radius = Math.round(Math.sqrt(this._mass / Math.PI));
    }
    static evaporate(blobs) {
        for (let blob of blobs) {
            if (blob.mass > 10) {
                blob.mass *= 0.99;
            }
        }
    }
    static calcQuadrants(blobs) {
        const quadrants = [];
        for (let blob of blobs) {
            const box = {
                tL: new math_1.Vec2(),
                bR: new math_1.Vec2(),
                qTL: new math_1.Vec2(),
                qBR: new math_1.Vec2()
            };
            box.tL = blob.pos.sub(new math_1.Vec2(blob.radius, blob.radius));
            box.bR = blob.pos.add(new math_1.Vec2(blob.radius, blob.radius));
            box.qTL = new math_1.Vec2(Math.floor(box.tL.x / settings_1.default.spawnChunkSize), Math.floor(box.tL.y / settings_1.default.spawnChunkSize));
            box.qBR = new math_1.Vec2(Math.floor(box.bR.x / settings_1.default.spawnChunkSize), Math.floor(box.bR.y / settings_1.default.spawnChunkSize));
            const rows = settings_1.default.mapSize / settings_1.default.spawnChunkSize;
            for (let x = box.qTL.x; x < box.qBR.x; x++) {
                for (let y = box.qTL.y; y < box.qBR.y; y++) {
                    quadrants.push(x * rows + y);
                }
            }
            blob.quadrants = quadrants;
        }
    }
}
exports.default = Blob;
;
// const Blob = new Blob(6, 9);
// // Blob.radius = 10;
// Blob.mass = 20;
// console.log(`Radius: ${Blob.radius}, mass area: ${Blob.mass}`)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2Jsb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBOEM7QUFDOUMsMERBQWtDO0FBRWxDLE1BQXFCLElBQUk7SUFxRnJCLFlBQW1CLE1BQVksSUFBSSxXQUFJLEVBQUU7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFwRmpDLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsVUFBSyxHQUFXLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztRQUM1RCxjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVSxZQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFnRmpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBL0VELE9BQU87SUFFUCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFBSSxNQUFNLENBQUMsQ0FBUztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFJLElBQUksQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUVGLE9BQU8sQ0FBQyxHQUFXO1FBQ2YsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQUEsSUFBSSxDQUFDLE9BQU8sRUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQWE7UUFDMUIsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDbkIsSUFBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQzthQUNyQjtTQUNKO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBYTtRQUM5QixNQUFNLFNBQVMsR0FBYSxFQUFFLENBQUM7UUFFL0IsS0FBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDbkIsTUFBTSxHQUFHLEdBQUc7Z0JBQ1IsRUFBRSxFQUFFLElBQUksV0FBSSxFQUFFO2dCQUNkLEVBQUUsRUFBRSxJQUFJLFdBQUksRUFBRTtnQkFDZCxHQUFHLEVBQUUsSUFBSSxXQUFJLEVBQUU7Z0JBQ2YsR0FBRyxFQUFFLElBQUksV0FBSSxFQUFFO2FBQ2xCLENBQUM7WUFFRixHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUQsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRTFELEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxrQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsa0JBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQy9HLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxrQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsa0JBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBRS9HLE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsT0FBTyxHQUFHLGtCQUFRLENBQUMsY0FBYyxDQUFDO1lBRXhELEtBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxLQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNoQzthQUNKO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDOUI7SUFDTCxDQUFDO0NBS0o7QUF4RkQsdUJBd0ZDO0FBQUEsQ0FBQztBQUVGLCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGlFQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yLCBWZWMyLCByYW5kSW50IH0gZnJvbSBcIi4vbWF0aFwiO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9iIHtcbiAgICBwcml2YXRlIF9yYWRpdXM6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBfbWFzczogbnVtYmVyID0gMDsgLy8gY2FsY3VsYXRlZCB3aGVuIGNvbnN0cnVjdG9yIGlzIGNhbGxlZFxuICAgIHB1YmxpYyBxdWFkcmFudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIHZlbG9jaXR5OiBWZWMyID0gbmV3IFZlYzIoKTtcbiAgICBwdWJsaWMgZGlyZWN0aW9uOiBWZWMyID0gbmV3IFZlYzIoKTtcbiAgICBwdWJsaWMgY29sb3I6IENvbG9yID0gQ29sb3IucmFuZG9tKCk7XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXQgcmFkaXVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gICAgfTtcblxuICAgIGdldCBtYXNzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXNzO1xuICAgIH07XG5cbiAgICBzZXQgcmFkaXVzKHI6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9yYWRpdXMgPSByO1xuICAgICAgICB0aGlzLmNhbGNNYXNzKCk7XG4gICAgfTtcblxuICAgIHNldCBtYXNzKGFtdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hc3MgPSBhbXQ7XG4gICAgICAgIHRoaXMuY2FsY1JhZGl1cygpO1xuICAgIH07XG5cbiAgICBhZGRNYXNzKGFtdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hc3MgKz0gYW10O1xuICAgICAgICB0aGlzLmNhbGNSYWRpdXMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVNYXNzKGFtdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hc3MgLT0gYW10O1xuICAgICAgICB0aGlzLmNhbGNSYWRpdXMoKTtcbiAgICB9XG5cbiAgICBjYWxjTWFzcygpIHtcbiAgICAgICAgdGhpcy5fbWFzcyA9IE1hdGgucm91bmQoTWF0aC5QSSAqICh0aGlzLl9yYWRpdXMgKiogMikpO1xuICAgIH1cblxuICAgIGNhbGNSYWRpdXMoKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KHRoaXMuX21hc3MgLyBNYXRoLlBJKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGV2YXBvcmF0ZShibG9iczogQmxvYltdKSB7XG4gICAgICAgIGZvcihsZXQgYmxvYiBvZiBibG9icykge1xuICAgICAgICAgICAgaWYoYmxvYi5tYXNzID4gMTApIHtcbiAgICAgICAgICAgICAgICBibG9iLm1hc3MgKj0gMC45OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjYWxjUXVhZHJhbnRzKGJsb2JzOiBCbG9iW10pIHtcbiAgICAgICAgY29uc3QgcXVhZHJhbnRzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgYmxvYiBvZiBibG9icykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0ge1xuICAgICAgICAgICAgICAgIHRMOiBuZXcgVmVjMigpLFxuICAgICAgICAgICAgICAgIGJSOiBuZXcgVmVjMigpLFxuICAgICAgICAgICAgICAgIHFUTDogbmV3IFZlYzIoKSxcbiAgICAgICAgICAgICAgICBxQlI6IG5ldyBWZWMyKClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGJveC50TCA9IGJsb2IucG9zLnN1YihuZXcgVmVjMihibG9iLnJhZGl1cywgYmxvYi5yYWRpdXMpKTtcbiAgICAgICAgICAgIGJveC5iUiA9IGJsb2IucG9zLmFkZChuZXcgVmVjMihibG9iLnJhZGl1cywgYmxvYi5yYWRpdXMpKTtcblxuICAgICAgICAgICAgYm94LnFUTCA9IG5ldyBWZWMyKE1hdGguZmxvb3IoYm94LnRMLngvc2V0dGluZ3Muc3Bhd25DaHVua1NpemUpLCBNYXRoLmZsb29yKGJveC50TC55L3NldHRpbmdzLnNwYXduQ2h1bmtTaXplKSk7XG4gICAgICAgICAgICBib3gucUJSID0gbmV3IFZlYzIoTWF0aC5mbG9vcihib3guYlIueC9zZXR0aW5ncy5zcGF3bkNodW5rU2l6ZSksIE1hdGguZmxvb3IoYm94LmJSLnkvc2V0dGluZ3Muc3Bhd25DaHVua1NpemUpKTtcblxuICAgICAgICAgICAgY29uc3Qgcm93cyA9IHNldHRpbmdzLm1hcFNpemUgLyBzZXR0aW5ncy5zcGF3bkNodW5rU2l6ZTtcblxuICAgICAgICAgICAgZm9yKGxldCB4ID0gYm94LnFUTC54OyB4IDwgYm94LnFCUi54OyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHkgPSBib3gucVRMLnk7IHkgPCBib3gucUJSLnk7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBxdWFkcmFudHMucHVzaCh4ICogcm93cyArIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmxvYi5xdWFkcmFudHMgPSBxdWFkcmFudHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcG9zOiBWZWMyID0gbmV3IFZlYzIoKSkge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuX3JhZGl1cztcbiAgICB9XG59O1xuXG4vLyBjb25zdCBCbG9iID0gbmV3IEJsb2IoNiwgOSk7XG4vLyAvLyBCbG9iLnJhZGl1cyA9IDEwO1xuLy8gQmxvYi5tYXNzID0gMjA7XG4vLyBjb25zb2xlLmxvZyhgUmFkaXVzOiAke0Jsb2IucmFkaXVzfSwgbWFzcyBhcmVhOiAke0Jsb2IubWFzc31gKSJdfQ==