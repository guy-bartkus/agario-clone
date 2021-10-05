import { resizeCanvas } from './modules/scaling';
const ws = new WebSocket(`ws://${window.location.hostname}:81`);

let self: any = { pos: { x: 0, y: 0 } };
const rCanvas = document.getElementById('main') as HTMLCanvasElement;
const rCtx = rCanvas.getContext('2d') as CanvasRenderingContext2D;

const mCanvas = document.createElement("canvas");
const mCtx = mCanvas.getContext('2d')  as CanvasRenderingContext2D;

mCanvas.width, mCanvas.height = 1024 * 8;

resizeCanvas(rCanvas);
window.addEventListener('resize', () => resizeCanvas(rCanvas));

function render() {
    rCtx.fillStyle = `#333`;
    rCtx.fillRect(0, 0, rCanvas.width, rCanvas.height);
    rCtx.putImageData(mCtx.getImageData(self.pos.x - 500, self.pos.y - 500, 1000, 1000), 0, 0);
    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);


//VERY bad code all of this needs to be rewritten, just for testing

ws.addEventListener("message", (e) => {
    const message: any = e.data;

    message.arrayBuffer().then(buffer => {
        const dv = new DataView(buffer);

        const player: any = {pos: {}};
    
        player.color = [0, 0, 0];
        player.pos.x = dv.getUint16(0);
        player.pos.y = dv.getUint16(2);
    
        player.color[0] = dv.getUint16(8);
        player.color[1] = dv.getUint16(9);
        player.color[2] = dv.getUint16(10);
    
        player.radius = dv.getUint16(11);
    
        player.mass = dv.getUint16(13);
    
        const isSelf = dv.getUint8(15);
    
        if(isSelf) {
            self = player;
        }
    
        mCtx.fillStyle = `#333`;
        mCtx.fillRect(0, 0, 8192, 8192);
    
        mCtx.fillStyle = `rgb(${player.color[0]}, ${player.color[1]}, ${player.color[2]})`;
    
        mCtx.beginPath();
        mCtx.arc(player.pos.x, player.pos.y, player.radius, 0, 2 * Math.PI);
        mCtx.closePath();
        mCtx.fill();
    });
});