(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scaling_1 = require("./modules/scaling");
var ws = new WebSocket("ws://" + window.location.hostname + ":81");
var self = { pos: { x: 0, y: 0 } };
var rCanvas = document.getElementById('main');
var rCtx = rCanvas.getContext('2d');
var mCanvas = document.createElement("canvas");
var mCtx = mCanvas.getContext('2d');
mCanvas.width, mCanvas.height = 1024 * 8;
scaling_1.resizeCanvas(rCanvas);
window.addEventListener('resize', function () { return scaling_1.resizeCanvas(rCanvas); });
function render() {
    rCtx.fillStyle = "#333";
    rCtx.fillRect(0, 0, rCanvas.width, rCanvas.height);
    rCtx.putImageData(mCtx.getImageData(self.pos.x - 500, self.pos.y - 500, 1000, 1000), 0, 0);
    window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);
//VERY bad code all of this needs to be rewritten, just for testing
ws.addEventListener("message", function (e) {
    var message = e.data;
    message.arrayBuffer().then(function (buffer) {
        var dv = new DataView(buffer);
        var player = { pos: {} };
        player.color = [0, 0, 0];
        player.pos.x = dv.getUint16(0);
        player.pos.y = dv.getUint16(2);
        player.color[0] = dv.getUint16(8);
        player.color[1] = dv.getUint16(9);
        player.color[2] = dv.getUint16(10);
        player.radius = dv.getUint16(11);
        player.mass = dv.getUint16(13);
        var isSelf = dv.getUint8(15);
        if (isSelf) {
            self = player;
        }
        mCtx.fillStyle = "#333";
        mCtx.fillRect(0, 0, 8192, 8192);
        mCtx.fillStyle = "rgb(" + player.color[0] + ", " + player.color[1] + ", " + player.color[2] + ")";
        mCtx.beginPath();
        mCtx.arc(player.pos.x, player.pos.y, player.radius, 0, 2 * Math.PI);
        mCtx.closePath();
        mCtx.fill();
    });
});

},{"./modules/scaling":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeCanvas = void 0;
var resizeCanvas = function (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
exports.resizeCanvas = resizeCanvas;

},{}]},{},[1]);