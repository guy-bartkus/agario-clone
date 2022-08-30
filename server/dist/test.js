"use strict";
// export const playerUpdate = (players: Player[]): void => {
//     const message = new ArrayBuffer(players.length*15);
//     const dv = new DataView(message);
//     for(let i = 0; i < players.length; i++) {
//         const player = players[i];
//         dv.setUint16(i*15, player.pos.x);
//         dv.setUint16(i*15 + 2, player.pos.y);
//         dv.setUint16(i*15 + 4, player.direction.x);
//         dv.setUint16(i*15 + 6, player.direction.y);
//         dv.setUint8(i*15 + 8, player.color.r);
//         dv.setUint8(i*15 + 9, player.color.g);
//         dv.setUint8(i*15 + 10, player.color.b);
//         dv.setUint16(i*15 + 11, player.radius);
//         dv.setUint16(i*15 + 13, player.mass);
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2REFBNkQ7QUFDN0QsMERBQTBEO0FBQzFELHdDQUF3QztBQUV4QyxnREFBZ0Q7QUFDaEQscUNBQXFDO0FBRXJDLDRDQUE0QztBQUM1QyxnREFBZ0Q7QUFFaEQsc0RBQXNEO0FBQ3RELHNEQUFzRDtBQUV0RCxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUVsRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IHBsYXllclVwZGF0ZSA9IChwbGF5ZXJzOiBQbGF5ZXJbXSk6IHZvaWQgPT4ge1xuLy8gICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgQXJyYXlCdWZmZXIocGxheWVycy5sZW5ndGgqMTUpO1xuLy8gICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KG1lc3NhZ2UpO1xuXG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgcGxheWVyID0gcGxheWVyc1tpXTtcblxuLy8gICAgICAgICBkdi5zZXRVaW50MTYoaSoxNSwgcGxheWVyLnBvcy54KTtcbi8vICAgICAgICAgZHYuc2V0VWludDE2KGkqMTUgKyAyLCBwbGF5ZXIucG9zLnkpO1xuXG4vLyAgICAgICAgIGR2LnNldFVpbnQxNihpKjE1ICsgNCwgcGxheWVyLmRpcmVjdGlvbi54KTtcbi8vICAgICAgICAgZHYuc2V0VWludDE2KGkqMTUgKyA2LCBwbGF5ZXIuZGlyZWN0aW9uLnkpO1xuXG4vLyAgICAgICAgIGR2LnNldFVpbnQ4KGkqMTUgKyA4LCBwbGF5ZXIuY29sb3Iucik7XG4vLyAgICAgICAgIGR2LnNldFVpbnQ4KGkqMTUgKyA5LCBwbGF5ZXIuY29sb3IuZyk7XG4vLyAgICAgICAgIGR2LnNldFVpbnQ4KGkqMTUgKyAxMCwgcGxheWVyLmNvbG9yLmIpO1xuXG4vLyAgICAgICAgIGR2LnNldFVpbnQxNihpKjE1ICsgMTEsIHBsYXllci5yYWRpdXMpO1xuLy8gICAgICAgICBkdi5zZXRVaW50MTYoaSoxNSArIDEzLCBwbGF5ZXIubWFzcyk7XG4vLyAgICAgfVxuLy8gfSJdfQ==