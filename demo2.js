/* Processing code:

int x;
int y;
int xDirection;
int yDirection;
void setup(){
	x=0;
	y=0;
	xDirection=1;
	yDirection=1;
	size(500,200);
}
void draw(){
	background(255,255,255);
	ellipse(x,y,100,100);
	x=x+1*xDirection;
	y=y+1*yDirection;
	if(x==0 || x == width ){
		xDirection *= -1;
	}
	if(y==0 || y==height){
		yDirection *= -1;
	}
}

*/

var x;
var y;
var xDirection;
var yDirection;
var redSlider;     //used to control sliders
var greenSlider;
var blueSlider;
function setup(){
	x=0;
	y=0;
	xDirection=1;
	yDirection=1;
	createCanvas(500,200);
	redSlider = createSlider(0,255,1);
	redSlider.position(300,10);
	redSlider.style("background-color","red");
	greenSlider = createSlider(0,255,1);
	greenSlider.style("background-color","green");
	greenSlider.position(300,30);
	blueSlider = createSlider(0,255,1);
	blueSlider.position(300,50);
	blueSlider.style("background-color","blue")
}
function draw(){
	background(255,255,255);
	stroke(redSlider.value(), greenSlider.value(), blueSlider.value());
	fill(redSlider.value(),greenSlider.value(), blueSlider.value());
	ellipse(x,y,100,100);
	x=x+1*xDirection;
	y=y+1*yDirection;
	if(x==0 || x == width ){
		xDirection *= -1;
	}
	if(y==0 || y==height){
		yDirection *= -1;
	}
}
