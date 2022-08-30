"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpawnablePos = void 0;
const settings_1 = __importDefault(require("./settings"));
const getSpawnablePos = (players) => {
    const chunks = settings_1.default.mapSize / 256;
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
    return free;
};
exports.getSpawnablePos = getSpawnablePos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bhd25pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9zcGF3bmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwREFBa0M7QUFJM0IsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFpQixFQUFZLEVBQUU7SUFDM0QsTUFBTSxNQUFNLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3RDLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUUxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBQSxNQUFNLEVBQUUsQ0FBQyxDQUFBLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDL0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRW5CLEtBQUksSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQ3ZCLEtBQUksSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsSUFBRyxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUNYLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDthQUNKO1lBRUQsSUFBRyxNQUFNLEVBQUU7Z0JBQ1AsTUFBTTthQUNUO1NBQ0o7UUFFRCxJQUFHLENBQUMsTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBMUJZLFFBQUEsZUFBZSxtQkEwQjNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBWZWMyLCByYW5kSW50IH0gZnJvbSAnLi9tYXRoJztcblxuZXhwb3J0IGNvbnN0IGdldFNwYXduYWJsZVBvcyA9IChwbGF5ZXJzOiBQbGF5ZXJbXSk6IG51bWJlcltdID0+IHtcbiAgICBjb25zdCBjaHVua3MgPSBzZXR0aW5ncy5tYXBTaXplIC8gMjU2O1xuICAgIGNvbnN0IGZyZWU6IG51bWJlcltdID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2h1bmtzKioyOyBpKyspIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuXG4gICAgICAgIGZvcihsZXQgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcXVhZCBvZiBwbGF5ZXIucXVhZHJhbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYocXVhZCA9PT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihleGlzdHMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFleGlzdHMpIHtcbiAgICAgICAgICAgIGZyZWUucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmVlO1xufSJdfQ==