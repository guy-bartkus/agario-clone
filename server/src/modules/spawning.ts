import settings from './settings';
import Player from './player';
import { Vec2, randInt } from './math';

export const getSpawnablePos = (players: Player[]): number[] => {
    const chunks = settings.mapSize / settings.spawnChunkSize;
    const free: number[] = [];

    for(let i = 0; i < chunks**2; i++) {
        let exists = false;

        for(let player of players) {
            for(let quad of player.quadrants) {
                if(quad === i) {
                    exists = false;
                    break;
                }
            }

            if(exists) {
                break;
            }
        }

        if(!exists) {
            free.push(i);
        }
    }

    return free;
}