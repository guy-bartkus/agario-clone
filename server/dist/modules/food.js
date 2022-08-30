"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blob_1 = __importDefault(require("./blob"));
const math_1 = require("./math");
class Food extends blob_1.default {
    constructor(pos = new math_1.Vec2()) {
        super();
        this.pos = pos;
    }
    ;
}
exports.default = Food;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2Zvb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsaUNBQThCO0FBRTlCLE1BQXFCLElBQUssU0FBUSxjQUFJO0lBQ2xDLFlBQW1CLE1BQVksSUFBSSxXQUFJLEVBQUU7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFETyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUV6QyxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBSkQsdUJBSUM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2IgZnJvbSBcIi4vYmxvYlwiO1xuaW1wb3J0IHsgVmVjMiB9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZCBleHRlbmRzIEJsb2Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3M6IFZlYzIgPSBuZXcgVmVjMigpKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfTtcbn07Il19