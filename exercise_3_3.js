const ellipse = {
	width: 10,
	height: 5,
};

ellipse.getArea = function(){return this.width*this.height*Math.PI};

ellipse.getPerimeter = function(){return 2*Math.PI*Math.sqrt((Math.pow(this.width, 2)+Math.pow(this.height, 2))/2)};

ellipse.getEccentricity = function(){return Math.sqrt(1-Math.pow(this.height/this.width, 2))};