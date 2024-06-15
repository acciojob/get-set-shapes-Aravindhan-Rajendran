//complete this code
class Rectangle(width,height) {
	this.width=width;
	this.height=height;
	getArea(){
		return width*height;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return 4*width;  
	}
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
