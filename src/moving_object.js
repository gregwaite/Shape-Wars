class MovingObject {
	constructor(props) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.canvas = document.getElementById('game-canvas');
		this.ctx = this.canvas.getContext('2d');
		this.draw = this.draw.bind(this);
		this.speed = 0;
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
		let velocity;
		if (this.constructor.name === "Enemy") {
			velocity = 1;
		} else {
			velocity = (this.vel[1] += 1);
		}
		this.pos[0] += velocity;
	}
	moveLeft(){
		let velocity;
		if (this.constructor.name === "Enemy") {
			velocity = 1;
		} else {
			velocity = (this.vel[1] += 1);
		}
		this.pos[0] -= velocity;
	}
	moveDown() {
		let velocity;
		if (this.constructor.name === "Enemy") {
			velocity = 1;
		} else {
			velocity = (this.vel[1] += 1);
		}
		
		this.pos[1] += velocity;
	}
	moveUp() {
		this.vel[1] += 1;
		this.pos[1] -= this.vel[1];
	}
}


module.exports = MovingObject;