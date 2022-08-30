export const randInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * ((max+1) - min) + min);
}



export class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;

    }

    static random(): Color {
        return Color.colors[randInt(0, Color.colors.length - 1)];
    }

    static colors: Color[] = [
        new Color(255, 0, 0), new Color(0, 255, 0), new Color(0, 0, 255), 
        new Color(255, 255, 0), new Color(255, 0, 255), new Color(0, 255, 255)
    ];
}


const randColor = Color.random();
const color = new Color(0, 50, 255);

console.log(randColor, color);

export class Vec2 {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add(vec2: Vec2): Vec2 {
        return new Vec2(this.x + vec2.x, this.y + vec2.y);
    }

    sub(vec2: Vec2): Vec2 {
        return new Vec2(this.x - vec2.x, this.y - vec2.y);
    }

    mul(scalar: number): Vec2 {
        return new Vec2(this.x * scalar, this.y * scalar);
    }

    div(vec2: Vec2): Vec2 {
        return new Vec2(this.x / vec2.x, this.y / vec2.y);
    }

    normalize(): Vec2 {
        const m = Math.sqrt(this.x ** 2 + this.y ** 2);

        return new Vec2(this.x / m, this.y / m);
    }

    distance(vec2: Vec2): number {
        const lX = this.x - vec2.x;
        const lY = this.y - vec2.y;

        return Math.sqrt(lX ** 2 + lY ** 2);
    }

    direction(vec2: Vec2): Vec2 {
        return this.sub(vec2).normalize();
    }

    rotate(ang: number): Vec2 {
        return new Vec2(this.x * Math.cos(ang) - this.y * Math.sin(ang), this.x * Math.sin(ang) + this.y * Math.cos(ang));
    }

    angleBetween(vec2: Vec2): number {
        return Math.atan2(vec2.y*this.x - vec2.x*this.y, vec2.x*this.x + vec2.y*this.y);
    }

    toAngle(): number {
        return Math.atan2(this.y, this.x);
    }

    get mag(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    static fromAngle(rads: number): Vec2 {
        return new Vec2(Math.cos(rads), Math.sin(rads));
    }
}