class MovingObject {
	constructor(props) {
		this.pos = props.pos;
		this.vel = props.vel;
		this.radius = props.radius;
		this.color = props.color;
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
	}
}

module.exports = MovingObject;