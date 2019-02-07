class MovingObject {
	constructor(props) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.canvas = document.getElementById('game-canvas');
		this.ctx = this.canvas.getContext('2d');
	}

	handleKeypress(key) {
		if (key.code === "ArrowLeft" || key.code === "KeyA") {
			this.moveleft();
		} else if (key.code === "ArrowRight" || key.code === "KeyD") {
			this.moveright();
		} else if (key.code === "ArrowUp" || key.code === "KeyW") {
			this.moveup();
		} else if (key.code === "ArrowDown" || key.code === "KeyS") {
			this.movedown();
		}
	};

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
	}

	moveright(){
		this.ctx.clearRect(0, 0, 400, 400);
		this.pos[0] += 10;
		this.drawCircle();
	}
	moveleft(){
		this.ctx.clearRect(0, 0, 400, 400);
		this.pos[0] -= 10;
		this.drawCircle();
	}
	movedown() {
		this.ctx.clearRect(0, 0, 400, 400);
		this.pos[1] += 10;
		this.drawCircle();
	}
	moveup(){
		this.ctx.clearRect(0, 0, 400, 400);
		this.pos[1] -= 10;
		this.drawCircle();
	}
}


module.exports = MovingObject;