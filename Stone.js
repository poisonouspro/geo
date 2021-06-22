class Rubber1{
	constructor(x,y)
	{
	var options={
		restitution:0.3,
		friction:5,
		density:1
	}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y, options);
		World.add(world, this.body);

	}
	display()
	{
					
			push()
			translate(pos.x,pos.y)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rectMode(CENTER)
            rect(0, 0, this.width, this.height);
			pop()
	}

}