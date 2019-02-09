class MovingObject {
	constructor(props) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.canvas = document.getElementById('game-canvas');
		this.ctx = this.canvas.getContext('2d');
		this.up = false;
		this.down = false;
		this.right = false;
		this.left = false;
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

	move() {
		let velocity;
		this.checkIfInBounds();
		if (this.constructor.name === "Enemy") {
			velocity = [1, 1];
		} else {
			velocity = this.vel;
		}
		if (this.left) {
			this.vel[0] += 0.3;
			this.pos[0] -= velocity[0];
		} 
		if (this.right) {
			this.vel[0] += 0.3;
			this.pos[0] += velocity[0];
		} 
		if (this.down) {
			this.vel[1] += 0.3;
			this.pos[1] += velocity[1];
		} 
		if (this.up) {
			this.vel[1] += 0.3;
			this.pos[1] -= velocity[1];
		}
	}

	checkIfInBounds(){
		if (!this.inBoundsLeft()) {
			this.left = false;
		} 
		if (!this.inBoundsRight()) {
			this.right = false;
		} 
		if (!this.inBoundsDown()) {
			this.down = false;
		} 
		if (!this.inBoundsUp()) {
			this.up = false;
		}
	}

	inBoundsRight(){
		if (this.pos[0] > this.canvas.width - 30) {
			return false;
		}
		return true;
	}
	inBoundsLeft() {
		if (this.pos[0] < 20) {
			return false;
		}
		return true;
	}
	inBoundsUp() {
		if (this.pos[1] < 20) {
			return false;
		}
		return true;
	}
	inBoundsDown() {
		if (this.pos[1] > this.canvas.height - 5) {
			return false;
		}
		return true;
	}
}


module.exports = MovingObject;