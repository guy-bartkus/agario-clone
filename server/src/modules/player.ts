import ws from'ws';
import Blob from "./blob";

export default class Player extends Blob {
    constructor(public socket: ws, public name: string = "Unnamed cell", ...p: ConstructorParameters<typeof Blob>) { 
        super();
    };

    kill() {
        this.destroy();
    }

    eat(target: Blob) {
        if(target instanceof Player) {
            target.kill();
        } else {
            target.destroy();
        }

        this.mass += target.mass;
    }
};
