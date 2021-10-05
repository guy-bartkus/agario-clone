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
var Virus = /** @class */ (function (_super) {
    __extends(Virus, _super);
    function Virus() {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        return _super.call(this) || this;
    }
    ;
    return Virus;
}(blob_1.default));
;
