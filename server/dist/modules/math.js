"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2 = exports.Color = exports.randInt = void 0;
const randInt = (min, max) => {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
};
exports.randInt = randInt;
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static random() {
        return Color.colors[(0, exports.randInt)(0, Color.colors.length - 1)];
    }
}
exports.Color = Color;
Color.colors = [
    new Color(255, 0, 0), new Color(0, 255, 0), new Color(0, 0, 255),
    new Color(255, 255, 0), new Color(255, 0, 255), new Color(0, 255, 255)
];
const randColor = Color.random();
const color = new Color(0, 50, 255);
console.log(randColor, color);
class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vec2) {
        return new Vec2(this.x + vec2.x, this.y + vec2.y);
    }
    sub(vec2) {
        return new Vec2(this.x - vec2.x, this.y - vec2.y);
    }
    mul(scalar) {
        return new Vec2(this.x * scalar, this.y * scalar);
    }
    div(vec2) {
        return new Vec2(this.x / vec2.x, this.y / vec2.y);
    }
    normalize() {
        const m = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return new Vec2(this.x / m, this.y / m);
    }
    distance(vec2) {
        const lX = this.x - vec2.x;
        const lY = this.y - vec2.y;
        return Math.sqrt(Math.pow(lX, 2) + Math.pow(lY, 2));
    }
    direction(vec2) {
        return this.sub(vec2).normalize();
    }
    rotate(ang) {
        return new Vec2(this.x * Math.cos(ang) - this.y * Math.sin(ang), this.x * Math.sin(ang) + this.y * Math.cos(ang));
    }
    angleBetween(vec2) {
        return Math.atan2(vec2.y * this.x - vec2.x * this.y, vec2.x * this.x + vec2.y * this.y);
    }
    toAngle() {
        return Math.atan2(this.y, this.x);
    }
    get mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    static fromAngle(rads) {
        return new Vec2(Math.cos(rads), Math.sin(rads));
    }
}
exports.Vec2 = Vec2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL21hdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFVLEVBQUU7SUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQTtBQUZZLFFBQUEsT0FBTyxXQUVuQjtBQUlELE1BQWEsS0FBSztJQUtkLFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3ZDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVmLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTTtRQUNULE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFBLGVBQU8sRUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOztBQWRMLHNCQW9CQztBQUpVLFlBQU0sR0FBWTtJQUNyQixJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDaEUsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQ3pFLENBQUM7QUFJTixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU5QixNQUFhLElBQUk7SUFJYixZQUFZLElBQVksQ0FBQyxFQUFFLElBQVksQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFVO1FBQ1YsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFVO1FBQ1YsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELEdBQUcsQ0FBQyxNQUFjO1FBQ2QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxHQUFHLENBQUMsSUFBVTtRQUNWLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFBLElBQUksQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFL0MsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBVTtRQUNmLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQUEsRUFBRSxFQUFJLENBQUMsQ0FBQSxHQUFHLFNBQUEsRUFBRSxFQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDZCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRCxZQUFZLENBQUMsSUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksR0FBRztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFBLElBQUksQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFJLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUN6QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQTdERCxvQkE2REMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmFuZEludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKG1heCsxKSAtIG1pbikgKyBtaW4pO1xufVxuXG5cblxuZXhwb3J0IGNsYXNzIENvbG9yIHtcbiAgICByOiBudW1iZXI7XG4gICAgZzogbnVtYmVyO1xuICAgIGI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yID0gcjtcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgICAgdGhpcy5iID0gYjtcblxuICAgIH1cblxuICAgIHN0YXRpYyByYW5kb20oKTogQ29sb3Ige1xuICAgICAgICByZXR1cm4gQ29sb3IuY29sb3JzW3JhbmRJbnQoMCwgQ29sb3IuY29sb3JzLmxlbmd0aCAtIDEpXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29sb3JzOiBDb2xvcltdID0gW1xuICAgICAgICBuZXcgQ29sb3IoMjU1LCAwLCAwKSwgbmV3IENvbG9yKDAsIDI1NSwgMCksIG5ldyBDb2xvcigwLCAwLCAyNTUpLCBcbiAgICAgICAgbmV3IENvbG9yKDI1NSwgMjU1LCAwKSwgbmV3IENvbG9yKDI1NSwgMCwgMjU1KSwgbmV3IENvbG9yKDAsIDI1NSwgMjU1KVxuICAgIF07XG59XG5cblxuY29uc3QgcmFuZENvbG9yID0gQ29sb3IucmFuZG9tKCk7XG5jb25zdCBjb2xvciA9IG5ldyBDb2xvcigwLCA1MCwgMjU1KTtcblxuY29uc29sZS5sb2cocmFuZENvbG9yLCBjb2xvcik7XG5cbmV4cG9ydCBjbGFzcyBWZWMyIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIGFkZCh2ZWMyOiBWZWMyKTogVmVjMiB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjMih0aGlzLnggKyB2ZWMyLngsIHRoaXMueSArIHZlYzIueSk7XG4gICAgfVxuXG4gICAgc3ViKHZlYzI6IFZlYzIpOiBWZWMyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMueCAtIHZlYzIueCwgdGhpcy55IC0gdmVjMi55KTtcbiAgICB9XG5cbiAgICBtdWwoc2NhbGFyOiBudW1iZXIpOiBWZWMyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMyKHRoaXMueCAqIHNjYWxhciwgdGhpcy55ICogc2NhbGFyKTtcbiAgICB9XG5cbiAgICBkaXYodmVjMjogVmVjMik6IFZlYzIge1xuICAgICAgICByZXR1cm4gbmV3IFZlYzIodGhpcy54IC8gdmVjMi54LCB0aGlzLnkgLyB2ZWMyLnkpO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpOiBWZWMyIHtcbiAgICAgICAgY29uc3QgbSA9IE1hdGguc3FydCh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyKTtcblxuICAgICAgICByZXR1cm4gbmV3IFZlYzIodGhpcy54IC8gbSwgdGhpcy55IC8gbSk7XG4gICAgfVxuXG4gICAgZGlzdGFuY2UodmVjMjogVmVjMik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGxYID0gdGhpcy54IC0gdmVjMi54O1xuICAgICAgICBjb25zdCBsWSA9IHRoaXMueSAtIHZlYzIueTtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGxYICoqIDIgKyBsWSAqKiAyKTtcbiAgICB9XG5cbiAgICBkaXJlY3Rpb24odmVjMjogVmVjMik6IFZlYzIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIodmVjMikubm9ybWFsaXplKCk7XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZzogbnVtYmVyKTogVmVjMiB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjMih0aGlzLnggKiBNYXRoLmNvcyhhbmcpIC0gdGhpcy55ICogTWF0aC5zaW4oYW5nKSwgdGhpcy54ICogTWF0aC5zaW4oYW5nKSArIHRoaXMueSAqIE1hdGguY29zKGFuZykpO1xuICAgIH1cblxuICAgIGFuZ2xlQmV0d2Vlbih2ZWMyOiBWZWMyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodmVjMi55KnRoaXMueCAtIHZlYzIueCp0aGlzLnksIHZlYzIueCp0aGlzLnggKyB2ZWMyLnkqdGhpcy55KTtcbiAgICB9XG5cbiAgICB0b0FuZ2xlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9XG5cbiAgICBnZXQgbWFnKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICoqIDIgKyB0aGlzLnkgKiogMik7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21BbmdsZShyYWRzOiBudW1iZXIpOiBWZWMyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMyKE1hdGguY29zKHJhZHMpLCBNYXRoLnNpbihyYWRzKSk7XG4gICAgfVxufSJdfQ==