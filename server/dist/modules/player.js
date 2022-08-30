"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blob_1 = __importDefault(require("./blob"));
class Player extends blob_1.default {
    constructor(socket, name = "Unnamed cell", ...p) {
        super();
        this.socket = socket;
        this.name = name;
    }
    ;
    kill() {
        this.destroy();
    }
    eat(target) {
        if (target instanceof Player) {
            target.kill();
        }
        else {
            target.destroy();
        }
        this.mass += target.mass;
    }
}
exports.default = Player;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLE1BQXFCLE1BQU8sU0FBUSxjQUFJO0lBQ3BDLFlBQW1CLE1BQVUsRUFBUyxPQUFlLGNBQWMsRUFBRSxHQUFHLENBQXFDO1FBQ3pHLEtBQUssRUFBRSxDQUFDO1FBRE8sV0FBTSxHQUFOLE1BQU0sQ0FBSTtRQUFTLFNBQUksR0FBSixJQUFJLENBQXlCO0lBRW5FLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFBSTtRQUNBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQVk7UUFDWixJQUFHLE1BQU0sWUFBWSxNQUFNLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBbEJELHlCQWtCQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3MgZnJvbSd3cyc7XG5pbXBvcnQgQmxvYiBmcm9tIFwiLi9ibG9iXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIEJsb2Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzb2NrZXQ6IHdzLCBwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJVbm5hbWVkIGNlbGxcIiwgLi4ucDogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBCbG9iPikgeyBcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9O1xuXG4gICAga2lsbCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgZWF0KHRhcmdldDogQmxvYikge1xuICAgICAgICBpZih0YXJnZXQgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgICAgICAgIHRhcmdldC5raWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXNzICs9IHRhcmdldC5tYXNzO1xuICAgIH1cbn07XG4iXX0=