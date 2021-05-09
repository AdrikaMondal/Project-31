class Man
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			}
		this.x=x;
		this.y=y;
		this.r=50;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.animation=loadImage("Walking Frame/walking_1.png") //"Walking Frame/walking_2.png",
        //"Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png",
       // "Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
		World.add(world, this.body);

	}
	display()
	{	
			// rectMode(CENTER)
			// rotate(this.body.angle)
			imageMode(CENTER)
			image(this.animation,this.body.position.x,this.body.position.y+70,300,300);
	
	}

}