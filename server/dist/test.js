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
