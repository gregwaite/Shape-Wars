class MovingObject {
	constructor(props) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.game = props.game;
		this.shape = props.shape;
		this.canvas = document.getElementById('game-canvas');
		this.ctx = this.canvas.getContext('2d');
		this.up = false;
		this.down = false;
		this.right = false;
		this.left = false;
		this.draw = this.draw.bind(this);
	}

	move() {
		let velocity;
		this.checkIfInBounds();
		if (this.constructor.name === "Enemy" || this.constructor.name === "Health") {
			velocity = [this.game.waveNum, this.game.waveNum];
		} else {
			velocity = this.vel;
		}
		if (this.left) {
			this.vel[0] += 0.5;
			this.pos[0] -= velocity[0] + 2;
		} 
		if (this.right) {
			this.vel[0] += 0.5;
			this.pos[0] += velocity[0] + 2;
		} 
		if (this.down) {
			this.vel[1] += 0.5;
			this.pos[1] += velocity[1] + 3;
		} 
		if (this.up) {
			this.vel[1] += 0.3;
			this.pos[1] -= velocity[1] + 2;
		}
		if (this.attacking) {
			this.attack();
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
		if (this.constructor.name === "Hurt") {
			if (this.pos[0] > this.canvas.width) {
				delete this.game.hurtCircs[this.game.hurtCircs.indexOf(this)];
				return false;
			}
		} else if (this.pos[0] > this.canvas.width - 30) {
			return false;
		}
		return true;
	}
	inBoundsLeft() {
		if (this.constructor.name === "Hurt" ) {
			if (this.pos[0] < 0) {
				delete this.game.hurtCircs[this.game.hurtCircs.indexOf(this)];
				return false;
			}
		} else if (this.pos[0] < 20) {
			return false;
		}
		return true;
	}
	inBoundsUp() {
		if (this.constructor.name === "Circle" && this.pos[1] < 100) {
			return false;
		} else if (this.constructor.name === "Hurt") {
			if (this.pos[1] < 0) {
				delete this.game.hurtCircs[this.game.hurtCircs.indexOf(this)];
				return false;
			}
		} else if (this.constructor.name === "Attack"){
			if (this.pos[1] < 0){
				delete this.game.attack[this.game.attack.indexOf(this)];
				return false;
			}
		}else if (this.pos[1] < 20) {
			return false;
		}
		return true;
	}
	inBoundsDown() {
		if (this.constructor.name === "Circle" && this.pos[1] > this.canvas.height - 30) {
			return false;
		} else if (this.constructor.name === "Hurt") {
			if (this.pos[1] > this.canvas.height) {
				delete this.game.hurtCircs[this.game.hurtCircs.indexOf(this)];
				return false;
			}
		} else if (this.pos[1] > this.canvas.height - 5) {
			return false;
		}
		return true;
	}
}


module.exports = MovingObject;