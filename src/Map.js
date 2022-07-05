let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWW--WWW.WW.WWWWWW
WWWWWW.WW.WooooooW.WW.WWWWWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

class Map {
    constructor(ctx) {
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;
    }

    keyboard_event() { }
    update() { }
    draw(ctx, delta) {
        const w = this.canvasWidth / 28;
        const h = this.canvasHeight / 31;

        let x_pos = -w;
        let y_pos = -h;

        pacmanMap.split('\n').forEach(row => {
            x_pos = 0;
            row.split('').forEach(symbol => {

                switch (symbol) {
                    case 'W':
                        ctx.strokeStyle = 'gray';
                        ctx.fillStyle = 'gray';
                        ctx.fillRect(x_pos, y_pos, w, h);
                        break;
                    case '.':
                        ctx.strokeStyle = 'red';
                        ctx.lineWidth = 1;
                        ctx.fillStyle = 'red';
                        ctx.beginPath();
                        ctx.moveTo(x_pos + (w / 2), y_pos + (h / 2));
                        ctx.arc(
                            x_pos + (w / 2),
                            y_pos + (h / 2),
                            w / 6,
                            0,
                            2 * Math.PI,
                        );
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fill();
                        break;
                    case '*':
                        ctx.strokeStyle = 'blue';
                        ctx.lineWidth = 1;
                        ctx.fillStyle = 'blue';
                        ctx.beginPath();
                        ctx.moveTo(x_pos + (w / 2), y_pos + (h / 2));
                        ctx.arc(
                            x_pos + (w / 2),
                            y_pos + (h / 2),
                            w / 6,
                            0,
                            2 * Math.PI,
                        );
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fill();
                        break;
                    case '-':
                        ctx.strokeStyle = 'orange';
                        ctx.lineWidth = 10;

                        ctx.beginPath();
                        ctx.moveTo(x_pos, y_pos + (h / 2));
                        ctx.lineTo(x_pos + w, y_pos + (h / 2))
                        ctx.stroke();
                        break;
                    case 'o':
                        ctx.strokeStyle = 'pink';
                        ctx.fillStyle = 'pink';
                        ctx.fillRect(x_pos, y_pos, w, h);
                        break;
                    default:
                        console.log('Symbol not valid');
                        break;
                };
                x_pos += w;
            });
            y_pos += h;
        });
    };
};
