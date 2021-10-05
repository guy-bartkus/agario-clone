"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerUpdate = exports.blobUpdate = exports.foodUpdate = void 0;
/*
------------------------------------
Server to client updates
    First byte of message:
    0 = blob updates
------------------------------------

------------------------------------
Server to client blob updates
    Second byte of message:
    0 = blob
    1 = food
    2 = player
    3 = virus
------------------------------------

------------------------------------
Server to client blob blob updates
    Third byte of message: //11
    x, y, dX, dY, color, radius, mass
------------------------------------

------------------------------------
Server to client blob food updates
    Third byte of message:
    x, y
------------------------------------

------------------------------------
Server to client blob player updates
    Third byte of message:
    x, y, dX, dY, color, radius, mass, name
------------------------------------

------------------------------------
Server to client blob virus updates
    Third byte of message:
    x, y, radius
------------------------------------

------------------------------------
Client to server updates
    First byte of message:
    0 = Move direction update
    1 = Eject mass update
    2 = Split update
------------------------------------

------------------------------------
Client to server move direction update
    Second byte of message:
    direction x y
------------------------------------
*/
var foodUpdate = function (socket, foods) {
    var message = new ArrayBuffer(foods.length * 4);
    var dv = new DataView(message);
    for (var i = 0; i < foods.length; i++) {
        var food = foods[i];
        console.log(food.pos.x, food.pos.y);
        dv.setUint16(i * 4, food.pos.x);
        dv.setUint16(i * 4 + 2, food.pos.y);
    }
    socket.send(message);
};
exports.foodUpdate = foodUpdate;
var blobUpdate = function (socket, blobs) {
    var message = new ArrayBuffer(blobs.length * 15);
    var dv = new DataView(message);
    for (var i = 0; i < blobs.length; i++) {
        var blob = blobs[i];
        dv.setUint16(i * 15, blob.pos.x);
        dv.setUint16(i * 15 + 2, blob.pos.y);
        dv.setUint16(i * 15 + 4, blob.velocity.x);
        dv.setUint16(i * 15 + 6, blob.velocity.y);
        dv.setUint8(i * 15 + 8, blob.color.r);
        dv.setUint8(i * 15 + 9, blob.color.g);
        dv.setUint8(i * 15 + 10, blob.color.b);
        dv.setUint16(i * 15 + 11, blob.radius);
        dv.setUint16(i * 15 + 13, blob.mass);
    }
    socket.send(message);
};
exports.blobUpdate = blobUpdate;
var playerUpdate = function (socket, players, isSelf) {
    if (isSelf === void 0) { isSelf = false; }
    var message = new ArrayBuffer(players.length * 16);
    var dv = new DataView(message);
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        dv.setUint16(i * 16, player.pos.x);
        dv.setUint16(i * 16 + 2, player.pos.y);
        dv.setUint16(i * 16 + 4, player.velocity.x);
        dv.setUint16(i * 16 + 6, player.velocity.y);
        dv.setUint8(i * 16 + 8, 255);
        dv.setUint8(i * 16 + 9, 0);
        dv.setUint8(i * 16 + 10, 0);
        dv.setUint16(i * 16 + 11, player.radius);
        dv.setUint16(i * 16 + 13, player.mass);
        dv.setUint8(i * 16 + 15, (isSelf ? 1 : 0));
    }
    socket.send(message);
};
exports.playerUpdate = playerUpdate;
