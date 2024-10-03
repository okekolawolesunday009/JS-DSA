class Circle {

	constructor(radius, areaCalculator) {
	this.radius = radius;
	this.areaCalculator = areaCalculator;
	}

  
  getArea() {
    return this.areaCalculator.calculate(this.radius);
  }
}

class AreaCalculator {
	calculate(radius) {
		return (Math.PI * (radius ** 2));
	}
  
}

function main(radius) {
  let areaCalculator = new AreaCalculator();
  let circle = new Circle(radius, areaCalculator);   
}
console.log(main(5));
