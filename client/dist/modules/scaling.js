"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeCanvas = void 0;
var resizeCanvas = function (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
exports.resizeCanvas = resizeCanvas;
