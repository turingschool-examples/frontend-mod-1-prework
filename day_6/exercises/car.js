class Car {
  constructor(brand, year, color, seats) {
    this.brand = brand
    this.year = year
    this.color = color
    this.seats = seats
  }

     changeCarColor() {
      this.color="Red"
     }

     changeCarBrand() {
      this.brand="Toyota"
     }

     getAgeOfCar() {
      console.log(this.year)
     }

    };

    var car1 = new Car("Mazda", 2015, "Blue", 5)

    // Call the methods here

    car1.changeCarColor()
    car1.changeCarBrand()
    car1.getAgeOfCar()

    console.log(car1.color)
    console.log(car1.brand)
