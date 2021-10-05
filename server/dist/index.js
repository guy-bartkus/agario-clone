"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var express_1 = __importDefault(require("express"));
var path_1 = require("path");
var player_1 = __importDefault(require("./modules/player"));
var math_1 = require("./modules/math");
var socket_1 = require("./modules/socket");
var app = express_1.default();
app.use(express_1.default.static(path_1.join(__dirname, "../", "../", "public")));
console.log(__dirname);
var server = app.listen(81, '0.0.0.0', function () {
    console.log("FUCK MA PUSSY!!!");
});
var wss = new ws_1.default.Server({ server: server });
var players = [];
var blobs = [];
wss.on('connection', function (socket, req) {
    var baller = new player_1.default(socket, "cracker_jack", new math_1.Vec2(math_1.randInt(1000, 1200), math_1.randInt(1000, 1200)));
    players.push(baller);
});
// Timing things; nightmare! YEET
setInterval(function () {
    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
        var player = players_1[_i];
        player.velocity = player.direction;
        player.pos = player.pos.add(player.velocity);
        socket_1.playerUpdate(player.socket, [player], true);
        for (var _a = 0, players_2 = players; _a < players_2.length; _a++) {
            var player2 = players_2[_a];
            if (player2.pos.distance(player.pos) > 1000) {
                socket_1.playerUpdate(player2.socket, [player]);
            }
        }
    }
}, 1000 / 20);
