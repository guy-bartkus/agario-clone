"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randInt = exports.Vec2 = exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color(r, g, b) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        this.r = r;
        this.g = g;
        this.b = b;
    }
    Color.colors = [
        new Color(255, 0, 0), new Color(0, 255, 0), new Color(0, 0, 255),
        new Color(255, 255, 0), new Color(255, 0, 255), new Color(0, 255, 255)
    ];
    return Color;
}());
exports.Color = Color;
var Vec2 = /** @class */ (function () {
    function Vec2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.add = function (otherVec) {
        return new Vec2(this.x + otherVec.x, this.y + otherVec.y);
    };
    Vec2.prototype.sub = function (otherVec) {
        return new Vec2(this.x - otherVec.x, this.y - otherVec.y);
    };
    Vec2.prototype.div = function (otherVec) {
        return new Vec2(this.x / otherVec.x, this.y / otherVec.y);
    };
    Vec2.prototype.mul = function (otherVec) {
        return new Vec2(this.x * otherVec.x, this.y * otherVec.y);
    };
    Vec2.prototype.distance = function (otherVec) {
        return Math.sqrt(Math.pow((Math.abs(this.x - otherVec.x)), 2) + Math.pow((Math.abs(this.y - otherVec.y)), 2));
    };
    Vec2.prototype.normalize = function (magnitude) {
        this.x /= magnitude;
        this.y /= magnitude;
    };
    return Vec2;
}());
exports.Vec2 = Vec2;
var randInt = function (min, max) {
    return Math.random() * (max - min) + min;
};
exports.randInt = randInt;
