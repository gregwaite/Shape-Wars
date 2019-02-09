class MovingObject {
	constructor(props) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.canvas = document.getElementById('game-canvas');
		this.ctx = this.canvas.getContext('2d');
		this.draw = this.draw.bind(this);
	}


	drawCircle(){
		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();

		this.ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);
		this.ctx.fill();
		this.ctx.closePath();
	}

	drawRect() {
		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.fillRect(this.pos[0], this.pos[1], this.radius, this.radius);
		this.ctx.closePath();
	}

	moveRight(){
		this.pos[0] += 2;
	}
	moveLeft(){
		this.pos[0] -= 2;
	}
	moveDown() {
		this.pos[1] += 2;
	}
	moveUp() {
		this.pos[1] -= 2;
	}
}


module.exports = MovingObject;