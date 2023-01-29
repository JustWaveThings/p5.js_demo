function setup() {
	createCanvas(1000, 1000);
	background(150);
}

function draw() {
	mouseIsPressed ? fill(0) : fill(255);
	ellipse(mouseX, mouseY, 80, 80);
}
