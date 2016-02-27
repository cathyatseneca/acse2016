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
function setup(){
	x=0;
	y=0;
	xDirection=1;
	yDirection=1;
	createCanvas(500,200);
}
function draw(){
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
