class laptop {
  constructor(brand, size, isOn){
    this.brand = brand;
    this.size = size;
    this.isOn = isOn;
  }
  turnOn() {
    this.isOn = true;
  }
}
var laptop1 = new laptop('Macbook Pro', 13, true);
console.log(laptop1);

var laptop2 = new laptop('Macbook Air', 14, true);
console.log(laptop2);

var laptop3 = new laptop('HP', 17, false);
laptop3.turnOn();
console.log(laptop3);
