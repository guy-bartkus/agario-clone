(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scaling_1 = require("./modules/scaling");
var ws = new WebSocket("ws://" + window.location.hostname + ":6969");
var self = { pos: { x: 0, y: 0 } };
var rCanvas = document.getElementById('main');
var rCtx = rCanvas.getContext('2d');
var mCanvas = document.createElement("canvas");
var mCtx = mCanvas.getContext('2d');
mCanvas.width, mCanvas.height = 1024 * 8;
(0, scaling_1.resizeCanvas)(rCanvas);
window.addEventListener('resize', function () { return (0, scaling_1.resizeCanvas)(rCanvas); });
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvc3JjL2luZGV4LnRzIiwiY2xpZW50L3NyYy9tb2R1bGVzL3NjYWxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLDZDQUFpRDtBQUNqRCxJQUFNLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxVQUFPLENBQUMsQ0FBQztBQUVsRSxJQUFJLElBQUksR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDeEMsSUFBTSxPQUFPLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkUsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQTZCLENBQUM7QUFFbEUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBOEIsQ0FBQztBQUVuRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUV6QyxJQUFBLHNCQUFZLEVBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsSUFBQSxzQkFBWSxFQUFDLE9BQU8sQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7QUFFL0QsU0FBUyxNQUFNO0lBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7SUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFD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QVUsQ0FBQztJQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkMsQ0FBQyxDQUFBO0FBSFksUUFBQSxZQUFZLGdCQUd4QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IHJlc2l6ZUNhbnZhcyB9IGZyb20gJy4vbW9kdWxlcy9zY2FsaW5nJztcbmNvbnN0IHdzID0gbmV3IFdlYlNvY2tldChgd3M6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06Njk2OWApO1xuXG5sZXQgc2VsZjogYW55ID0geyBwb3M6IHsgeDogMCwgeTogMCB9IH07XG5jb25zdCByQ2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5jb25zdCByQ3R4ID0gckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuY29uc3QgbUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5jb25zdCBtQ3R4ID0gbUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpICBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbm1DYW52YXMud2lkdGgsIG1DYW52YXMuaGVpZ2h0ID0gMTAyNCAqIDg7XG5cbnJlc2l6ZUNhbnZhcyhyQ2FudmFzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiByZXNpemVDYW52YXMockNhbnZhcykpO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgckN0eC5maWxsU3R5bGUgPSBgIzMzM2A7XG4gICAgckN0eC5maWxsUmVjdCgwLCAwLCByQ2FudmFzLndpZHRoLCByQ2FudmFzLmhlaWdodCk7XG4gICAgckN0eC5wdXRJbWFnZURhdGEobUN0eC5nZXRJbWFnZURhdGEoc2VsZi5wb3MueCAtIDUwMCwgc2VsZi5wb3MueSAtIDUwMCwgMTAwMCwgMTAwMCksIDAsIDApO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn1cblxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG5cbi8vVkVSWSBiYWQgY29kZSBhbGwgb2YgdGhpcyBuZWVkcyB0byBiZSByZXdyaXR0ZW4sIGp1c3QgZm9yIHRlc3Rpbmdcblxud3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlOiBhbnkgPSBlLmRhdGE7XG5cbiAgICBtZXNzYWdlLmFycmF5QnVmZmVyKCkudGhlbihidWZmZXIgPT4ge1xuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjogYW55ID0ge3Bvczoge319O1xuICAgIFxuICAgICAgICBwbGF5ZXIuY29sb3IgPSBbMCwgMCwgMF07XG4gICAgICAgIHBsYXllci5wb3MueCA9IGR2LmdldFVpbnQxNigwKTtcbiAgICAgICAgcGxheWVyLnBvcy55ID0gZHYuZ2V0VWludDE2KDIpO1xuICAgIFxuICAgICAgICBwbGF5ZXIuY29sb3JbMF0gPSBkdi5nZXRVaW50MTYoOCk7XG4gICAgICAgIHBsYXllci5jb2xvclsxXSA9IGR2LmdldFVpbnQxNig5KTtcbiAgICAgICAgcGxheWVyLmNvbG9yWzJdID0gZHYuZ2V0VWludDE2KDEwKTtcbiAgICBcbiAgICAgICAgcGxheWVyLnJhZGl1cyA9IGR2LmdldFVpbnQxNigxMSk7XG4gICAgXG4gICAgICAgIHBsYXllci5tYXNzID0gZHYuZ2V0VWludDE2KDEzKTtcbiAgICBcbiAgICAgICAgY29uc3QgaXNTZWxmID0gZHYuZ2V0VWludDgoMTUpO1xuICAgIFxuICAgICAgICBpZihpc1NlbGYpIHtcbiAgICAgICAgICAgIHNlbGYgPSBwbGF5ZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbUN0eC5maWxsU3R5bGUgPSBgIzMzM2A7XG4gICAgICAgIG1DdHguZmlsbFJlY3QoMCwgMCwgODE5MiwgODE5Mik7XG4gICAgXG4gICAgICAgIG1DdHguZmlsbFN0eWxlID0gYHJnYigke3BsYXllci5jb2xvclswXX0sICR7cGxheWVyLmNvbG9yWzFdfSwgJHtwbGF5ZXIuY29sb3JbMl19KWA7XG4gICAgXG4gICAgICAgIG1DdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIG1DdHguYXJjKHBsYXllci5wb3MueCwgcGxheWVyLnBvcy55LCBwbGF5ZXIucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIG1DdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIG1DdHguZmlsbCgpO1xuICAgIH0pO1xufSk7IiwiZXhwb3J0IGNvbnN0IHJlc2l6ZUNhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbn0iXX0=
