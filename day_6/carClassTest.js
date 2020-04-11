class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this.brokenDown = false;
  }

  paint(newColor) {
    this.color = newColor;
  }

  breakDown() {
    this.brokenDown = true;
  }
}

var myCar = new Car("Honda", "red");
console.log(myCar);
myCar.breakDown();
console.log(myCar.brokenDown);
myCar.paint("bright orange");
console.log(myCar.color); 
console.log(myCar);
