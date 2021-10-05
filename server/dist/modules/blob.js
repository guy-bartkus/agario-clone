"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math");
var settings_1 = __importDefault(require("./settings"));
var Blob = /** @class */ (function () {
    function Blob(pos) {
        if (pos === void 0) { pos = new math_1.Vec2(); }
        this.pos = pos;
        this._radius = 5;
        this._mass = 0; // calculated when constructor is called
        this.quadrants = [];
        this.velocity = new math_1.Vec2();
        this.direction = new math_1.Vec2();
        this.color = math_1.Color.colors[math_1.randInt(0, math_1.Color.colors.length - 1)];
        this.radius = this._radius;
    }
    Blob.prototype.destroy = function () {
    };
    Object.defineProperty(Blob.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (r) {
            this._radius = r;
            this._mass = Math.round(Math.PI * (Math.pow(r, 2)));
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Blob.prototype, "mass", {
        get: function () {
            return this._mass;
        },
        set: function (s) {
            this._mass = s;
            this._radius = Math.round(Math.sqrt(s / Math.PI));
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    Blob.evaporate = function (blobs) {
        for (var _i = 0, blobs_1 = blobs; _i < blobs_1.length; _i++) {
            var blob = blobs_1[_i];
            if (blob.mass > 10) {
                blob.mass *= 0.99;
            }
        }
    };
    Blob.calcQuadrants = function (blobs) {
        var quadrants = [];
        for (var _i = 0, blobs_2 = blobs; _i < blobs_2.length; _i++) {
            var blob = blobs_2[_i];
            var box = {
                tL: new math_1.Vec2(),
                bR: new math_1.Vec2(),
                qTL: new math_1.Vec2(),
                qBR: new math_1.Vec2()
            };
            box.tL = blob.pos.sub(new math_1.Vec2(blob.radius, blob.radius));
            box.bR = blob.pos.add(new math_1.Vec2(blob.radius, blob.radius));
            box.qTL = new math_1.Vec2(Math.floor(box.tL.x / 256), Math.floor(box.tL.y / 256));
            box.qBR = new math_1.Vec2(Math.floor(box.bR.x / 256), Math.floor(box.bR.y / 256));
            var rows = settings_1.default.mapSize / 256;
            for (var x = box.qTL.x; x < box.qBR.x; x++) {
                for (var y = box.qTL.y; y < box.qBR.y; y++) {
                    quadrants.push(x * rows + y);
                }
            }
            blob.quadrants = quadrants;
        }
    };
    return Blob;
}());
exports.default = Blob;
;
// const Blob = new Blob(6, 9);
// // Blob.radius = 10;
// Blob.mass = 20;
// console.log(`Radius: ${Blob.radius}, mass area: ${Blob.mass}`)
