import Blob from "./blob";
import { Vec2 } from "./math";

export default class Food extends Blob {
    constructor(public pos: Vec2 = new Vec2()) {
        super();
    };
};