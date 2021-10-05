"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpawnablePos = void 0;
var settings_1 = __importDefault(require("./settings"));
var getSpawnablePos = function (players) {
    var chunks = settings_1.default.mapSize / 256;
    var free = [];
    for (var i = 0; i < Math.pow(chunks, 2); i++) {
        var exists = false;
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            for (var _a = 0, _b = player.quadrants; _a < _b.length; _a++) {
                var quad = _b[_a];
                if (quad === i) {
                    exists = false;
                    break;
                }
            }
            if (exists) {
                break;
            }
        }
        if (!exists) {
            free.push(i);
        }
    }
    return free;
};
exports.getSpawnablePos = getSpawnablePos;
