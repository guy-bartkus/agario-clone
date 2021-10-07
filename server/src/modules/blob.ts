import { Color, Vec2, randInt } from "./math";
import settings from './settings';

export default class Blob {
    private _radius: number = 5;
    private _mass: number = 0; // calculated when constructor is called
    public quadrants: number[] = [];
    public velocity: Vec2 = new Vec2();
    public direction: Vec2 = new Vec2();
    public color: Color = Color.colors[randInt(0, Color.colors.length - 1)];

    destroy() {
        
    }

    get radius(): number {
        return this._radius;
    };

    get mass(): number {
        return this._mass;
    };

    set radius(r: number) {
        this._radius = r;
        this._mass = Math.round(Math.PI * (r ** 2));
    };

    set mass(s: number) {
        this._mass = s;
        this._radius = Math.round(Math.sqrt(s / Math.PI));
    };

    static evaporate(blobs: Blob[]) {
        for(let blob of blobs) {
            if(blob.mass > 10) {
                blob.mass *= 0.99;
            }
        }
    }

    static calcQuadrants(blobs: Blob[]) {
        const quadrants: number[] = [];

        for(let blob of blobs) {
            const box = {
                tL: new Vec2(),
                bR: new Vec2(),
                qTL: new Vec2(),
                qBR: new Vec2()
            };

            box.tL = blob.pos.sub(new Vec2(blob.radius, blob.radius));
            box.bR = blob.pos.add(new Vec2(blob.radius, blob.radius));

            box.qTL = new Vec2(Math.floor(box.tL.x/256), Math.floor(box.tL.y/256));
            box.qBR = new Vec2(Math.floor(box.bR.x/256), Math.floor(box.bR.y/256));

            const rows = settings.mapSize / 256;

            for(let x = box.qTL.x; x < box.qBR.x; x++) {
                for(let y = box.qTL.y; y < box.qBR.y; y++) {
                    quadrants.push(x * rows + y);
                }
            }

            blob.quadrants = quadrants;
        }
    }

    constructor(public pos: Vec2 = new Vec2()) {
        this.radius = this._radius;
    }
};

// const Blob = new Blob(6, 9);
// // Blob.radius = 10;
// Blob.mass = 20;
// console.log(`Radius: ${Blob.radius}, mass area: ${Blob.mass}`)