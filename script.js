class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
	}

	getPerimeter() {
		return 4 * this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
it('calculates area and perimeter correctly - 1', function() {
    const square = new Square(7);
    assert.equal(square.getArea(), 49); // checks if the area is correctly calculated
    assert.equal(square.getPerimeter(), 28); // checks if the perimeter is correctly calculated
})