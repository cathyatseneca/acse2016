/* Processing code:

class Circle{
  int x;
  int y;
  int xDirection;
  int yDirection;
  color fillColour;
  color strokeColour;
  float radius;
  Circle(int xpos,int ypos, int xDir, int yDir, color co,float rad){
    x=xpos;
    y=ypos;
    xDirection=xDir;
    yDirection=yDir;
    fillColour=co;
    strokeColour=co;
    radius=rad;
  }
  void draw(){
    fill(fillColour);
    stroke(strokeColour);
    ellipse(x,y,radius*2,radius*2);
    x=x+1*xDirection;
    y=y+1*yDirection;
    if(x==0 || x == width ){
      xDirection *= -1;
    }
    if(y==0 || y==height){
      yDirection *= -1;
    }
  }
};
Circle [] circles;
color randomColour(){
  return color(random(0,255),random(0,255),random(0,255));
}
void setup(){
  size(500,200);
  circles=new Circle[10];
  for(int i=0;i<10;i++){
    circles[i]=new Circle(int(random(0,width)),int(random(0,height)),1,1,randomColour(),random(10,50));
  }
}
void draw(){
  background(255,255,255);
  for(int i=0;i<10;i++){
    circles[i].draw();
  }
}

*/
/* JavaScript is not a classy OO language so everything will seem 
a bit wierd.  If you want to try to write OO code like the way you
do in Java/C++ classy type language you will find it more awkward syntactically.
This example follows the functional pattern as described in
JavaScript The Good Parts by Douglas Crockford
*/

/*define your class as the return value from an
anonymous function.  The spec parameter allows us
to define an object as our parameter.  This can
make our intialization very flexible.
*/

function randomColour(){
  return color(random(0,255),random(0,255),random(0,255));
}
var Circle=function(spec){

	var that={};   //a way to refer to current object
	               //initialize it to an empty object
  	var x = spec.x || 0;  //if spec object has an x component, use it otherwise use 0
  	var y = spec.y || 0;
  	var xDirection= spec.xDirection || 1;
  	var yDirection= spec.yDirection || 1;
  	var fillColour=spec.colour || randomColour();
  	var strokeColour=fillColour;
  	var radius = spec.radius || 25;

  	//add a draw function to that
	that.draw=function(){
    	fill(fillColour);
   		stroke(strokeColour);
    	ellipse(x,y,radius*2,radius*2);
    	x=x+1*xDirection;
    	y=y+1*yDirection;
    	if(x==0 || x== width ){
      		xDirection *= -1;
    	}
    	if(y==0 || y == height){
      		yDirection *= -1;
    	}
 	}
 	//return that.  The local variables  to this function
 	//are essentially private as there isn't a way to refer
 	//to it outside of this function
 	return that;
};
var circles;

function setup(){
  createCanvas(500,200);
  circles=[];
  for(var i=0;i<10;i++){
    circles.push(Circle({x:int(random(0,width)),
    					 y:int(random(0,height)),
    					 xDirection:-1,
    					 yDirection:-1,
    					 radius:random(10,50)}));
  }
}
function draw(){
  background(255,255,255);
  for(var i=0;i<10;i++){
    circles[i].draw();
  }
}