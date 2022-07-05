const angleToRad = (angle) => (angle * Math.PI) / 180;

class Pacman {
  constructor(x = 200, y = 200, color = 'yellow', speed = 100) {
    this.pacmanSize = 20;
    this.mouthOpen = 50;
    this.origin = {
      x: x,
      y: y,
    };
    this.color = color;
    this.maxSpeed = speed;
    this.speed = { x: this.maxSpeed, y: 0 };
    this.direction = 0;
  }

  update(delta) {
    this.mouthOpen = this.mouthOpen + 1 * delta * 20;
    let newPosX = this.origin.x + this.speed.x * delta;
    if (newPosX + this.pacmanSize <= 1000 && newPosX - this.pacmanSize >= 0) {
      this.origin.x = newPosX;
    }
    let newPosY = this.origin.y + this.speed.y * delta;
    if (newPosY + this.pacmanSize <= 1000 && newPosY - this.pacmanSize >= 0) {
      this.origin.y = newPosY;
    }
  }

  draw(ctx, delta) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.fillStyle = this.color;

    let open = 20 * Math.sin(this.mouthOpen) + 20;

    ctx.beginPath();
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.arc(
      this.origin.x,
      this.origin.y,
      this.pacmanSize,
      angleToRad(-open + this.direction),
      angleToRad(open + this.direction),
      true
    );
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  keyboard_event(key) {
    switch (key) {
      case 'ArrowDown':
        console.log('down');
        this.speed.x = 0
        this.speed.y = this.maxSpeed;
        this.direction = 90;
        break;
      case 'ArrowUp':
        console.log('up');
        this.speed.x = 0
        this.speed.y = -this.maxSpeed;
        this.direction = 270;
        break;
      case 'ArrowLeft':
        console.log('left');
        this.speed.x = -this.maxSpeed;
        this.speed.y = 0
        this.direction = 180;
        break;
      case 'ArrowRight':
        console.log('right');
        this.speed.x = this.maxSpeed;
        this.speed.y = 0
        this.direction = 0;
        break;
      default:
        console.log('Key not valid');
        break;
    }
  }
}
