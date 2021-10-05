import ws from 'ws';
import express from 'express';
import { join } from 'path'
import Player from './modules/player';
import { randInt, Vec2 } from './modules/math';
import { playerUpdate } from './modules/socket';

const app = express();

app.use(express.static(join(__dirname, "../", "../", "public")));

console.log(__dirname);

const server = app.listen(81, '0.0.0.0', () => { // returns a server
    console.log("Ready!");
});

const wss = new ws.Server({ server });

const players: Player[] = [];
const blobs: Blob[] = [];

wss.on('connection', (socket, req) => {
    const player = new Player(socket, "Unnamed Player", new Vec2(randInt(1000, 1200), randInt(1000, 1200)));
    players.push(player);
});

// Timing things; nightmare! YEET
setInterval(() => {
    for (let player of players) {
        player.velocity = player.direction;
        player.pos = player.pos.add(player.velocity);

        playerUpdate(player.socket, [player], true);
        
        for (let player2 of players) {
            if (player2.pos.distance(player.pos) > 1000) {
                playerUpdate(player2.socket, [player]);
            }
        }
    }
}, 1000 / 20);
