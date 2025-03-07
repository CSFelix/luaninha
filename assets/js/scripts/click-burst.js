const burst = new mojs.Burst({
	count: 10,
	left: 0,
	top: 0,
	children: {
		shape: ['circle', 'rect', 'curve', 'polygon'],
		fill: ['yellow', 'red', 'green', 'blue'],
		degreeShift: 'rand(-360, 360)',
	},
	duration: 500,
});

const bang = new mojs.Burst({
	left: 0,
	top: 0,
	radius: {1:35},
	angle: 45,
	count: 8,
	children: {
		radius: 8,
		fill: 'orange',
		scale: {1:0, easing: 'sin.in'},
		pathScale: [0.7, null],
		duration: [500, 700],
		degreeShift: [13, null],
	},
});

document.onclick = (event) => {
	const position = { x: event.pageX, y: event.pageY };
	burst.tune(position);
	burst.replay();
	bang.tune(position);
	bang.replay();
}