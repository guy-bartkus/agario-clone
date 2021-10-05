
export class Color {
    constructor(public r: number = 0, public g: number = 0, public b: number = 0) { }

    static colors: Color[] = [
        new Color(255, 0, 0), new Color(0, 255, 0), new Color(0, 0, 255), 
        new Color(255, 255, 0), new Color(255, 0, 255), new Color(0, 255, 255)
    ];
}

export class Vec2 {
    constructor(public x: number = 0, public y: number = 0) {  }

    add(otherVec: Vec2) {
        return new Vec2(this.x + otherVec.x, this.y + otherVec.y);
    }

    sub(otherVec: Vec2) {
        return new Vec2(this.x - otherVec.x, this.y - otherVec.y);
    }

    div(otherVec: Vec2) {
        return new Vec2(this.x / otherVec.x, this.y / otherVec.y);
    }

    mul(otherVec: Vec2) {
        return new Vec2(this.x * otherVec.x, this.y * otherVec.y);
    }

    distance(otherVec: Vec2): number {
        return Math.sqrt((Math.abs(this.x - otherVec.x))**2 + (Math.abs(this.y - otherVec.y))**2);
    }

    normalize(magnitude: number) {
        this.x /= magnitude
        this.y /= magnitude
    }
}

export const randInt = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
}
