"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var blob_1 = __importDefault(require("./blob"));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(socket, name) {
        if (name === void 0) { name = "Unnamed cell"; }
        var p = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            p[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.socket = socket;
        _this.name = name;
        return _this;
    }
    ;
    Player.prototype.kill = function () {
        this.destroy();
    };
    Player.prototype.eat = function (target) {
        if (target instanceof Player) {
            target.kill();
        }
        else {
            target.destroy();
        }
        this.mass += target.mass;
    };
    return Player;
}(blob_1.default));
exports.default = Player;
;
