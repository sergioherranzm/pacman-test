let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W..........................W
W.WWWWW.WWWW.WWWW.WWW.WWWW.W
W..W....W....W.....W..W..W.W
W.*.W.*.WWW.*W.WW.*W*.W..W*W
W....W..W....W..W..W..W..W.W
W.WWWWW.WWWW.WWWW.WWW.WWWW.W
W..........................W
W.WWWWWWWWWWWWWWWWWWWWWWWW.W
W..........................W
W.WWWWWWWWWWW**WWWWWWWWWWW.W
W.WWWWWWW..........WWWWWWW.W
W.WWWWWWW.WWW--WWW.WWWWWWW.W
W.WWWWWWW.WooooooW.WWWWWWW.W
..........WooooooW..........
W.WWWWWWW.WooooooW.WWWWWWW.W
W.WWWWWWW.WWWWWWWW.WWWWWWW.W
W...*..................*...W
W.WWWWW.WWWWW..WWWWW.WWWWW.W
W.W.....W...W..W...W.W.....W
W.W.....W...W..WWWW..WWW...W
W.W.....W...W..W.W...W.....W
W.WWWWW.WWWWW..W..WW.WWWWW.W
W............**............W
W.WWWWW.WWWWW..WWWW..WWWWW.W
W.W.....W...W..W...W.W.....W
W.W.....W...W..W...W.WWW...W
W.W.....W...W..W...W.W.....W
W.WWWWW.WWWWW..WWWW..WWWWW.W
W...*..................*...W
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
                        ctx.strokeStyle = '#FE8F5D';
                        ctx.fillStyle = '#FE8F5D';
                        ctx.fillRect(x_pos, y_pos, w, h);
                        break;
                    case '.':
                        ctx.strokeStyle = '#FFC94B';
                        ctx.lineWidth = 1;
                        ctx.fillStyle = '#FFC94B';
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
                        ctx.strokeStyle = '#3CBCC7';
                        ctx.lineWidth = 1;
                        ctx.fillStyle = '#3CBCC7';
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
                        ctx.strokeStyle = 'gray';
                        ctx.lineWidth = 10;

                        ctx.beginPath();
                        ctx.moveTo(x_pos, y_pos + (h / 2));
                        ctx.lineTo(x_pos + w, y_pos + (h / 2))
                        ctx.stroke();
                        break;
                    case 'o':
                        ctx.strokeStyle = '#FFD8B2';
                        ctx.fillStyle = '#FFD8B2';
                        ctx.fillRect(x_pos, y_pos, w, h);
                        break;
                    default:
                        console.log('Symbol not valid:', symbol);
                        break;
                };
                x_pos += w;
            });
            y_pos += h;
        });
    };
};
