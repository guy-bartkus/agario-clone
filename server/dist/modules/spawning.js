"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpawnablePos = void 0;
const settings_1 = __importDefault(require("./settings"));
const math_1 = require("./math");
const getSpawnablePos = (players) => {
    const chunks = settings_1.default.mapSize / settings_1.default.spawnChunkSize;
    const free = [];
    for (let i = 0; i < Math.pow(chunks, 2); i++) {
        let exists = false;
        for (let player of players) {
            for (let quad of player.quadrants) {
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
    const spawnChunk = free[(0, math_1.randInt)(0, free.length - 1)];
    const cY = Math.floor(spawnChunk / settings_1.default.spawnChunkSize);
    const cX = spawnChunk - (cY * settings_1.default.spawnChunkSize);
    return free;
};
exports.getSpawnablePos = getSpawnablePos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bhd25pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9zcGF3bmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwREFBa0M7QUFFbEMsaUNBQXVDO0FBRWhDLE1BQU0sZUFBZSxHQUFHLENBQUMsT0FBaUIsRUFBWSxFQUFFO0lBQzNELE1BQU0sTUFBTSxHQUFHLGtCQUFRLENBQUMsT0FBTyxHQUFHLGtCQUFRLENBQUMsY0FBYyxDQUFDO0lBQzFELE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUUxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBQSxNQUFNLEVBQUUsQ0FBQyxDQUFBLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRW5CLEtBQUksSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQ3ZCLEtBQUksSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsSUFBRyxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUNYLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDthQUNKO1lBRUQsSUFBRyxNQUFNLEVBQUU7Z0JBQ1AsTUFBTTthQUNUO1NBQ0o7UUFFRCxJQUFHLENBQUMsTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtLQUNKO0lBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUEsY0FBTyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsa0JBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxNQUFNLEVBQUUsR0FBRyxVQUFVLEdBQUMsQ0FBQyxFQUFFLEdBQUMsa0JBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVuRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUE7QUE5QlksUUFBQSxlQUFlLG1CQThCM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IFZlYzIsIHJhbmRJbnQgfSBmcm9tICcuL21hdGgnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3Bhd25hYmxlUG9zID0gKHBsYXllcnM6IFBsYXllcltdKTogbnVtYmVyW10gPT4ge1xuICAgIGNvbnN0IGNodW5rcyA9IHNldHRpbmdzLm1hcFNpemUgLyBzZXR0aW5ncy5zcGF3bkNodW5rU2l6ZTtcbiAgICBjb25zdCBmcmVlOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNodW5rcyoqMjsgaSsrKSB7XG4gICAgICAgIGxldCBleGlzdHMgPSBmYWxzZTtcblxuICAgICAgICBmb3IobGV0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBmb3IobGV0IHF1YWQgb2YgcGxheWVyLnF1YWRyYW50cykge1xuICAgICAgICAgICAgICAgIGlmKHF1YWQgPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZighZXhpc3RzKSB7XG4gICAgICAgICAgICBmcmVlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcGF3bkNodW5rID0gZnJlZVtyYW5kSW50KDAsZnJlZS5sZW5ndGgtMSldO1xuICAgIGNvbnN0IGNZID0gTWF0aC5mbG9vcihzcGF3bkNodW5rL3NldHRpbmdzLnNwYXduQ2h1bmtTaXplKTtcbiAgICBjb25zdCBjWCA9IHNwYXduQ2h1bmstKGNZKnNldHRpbmdzLnNwYXduQ2h1bmtTaXplKTtcblxuICAgIHJldHVybiBmcmVlO1xufSJdfQ==