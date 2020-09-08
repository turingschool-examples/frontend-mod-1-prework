/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/burrito.js`

Add the following methods to this burrito class and call the methods below
the class:
1. addTopping
2. removeTopping
3. changeProtein
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.base = base;
    this.toppings = toppings;
    this.protein = protein;
  }

  addTopping(newToppings) {
    this.toppings.push(newToppings);
  }

  removeTopping(index, del) {
    this.toppings.splice(index, del);
  }

  changeProtein(otherProtein) {
    this.protein = otherProtein;
  }
}

var dinner = new Burrito("Beans", "Rice", ["cheese", "salsa", "guacamole"]);

//check original
console.log(dinner.toppings);
console.log(dinner.protein);

//original ok

dinner.addTopping("lettuce");
console.log(dinner.toppings);

// done! well done! You can do shit! Relax your jaw. 

dinner.removeTopping(0, 1);
console.log(dinner.toppings);

// I DID IT DAMMIT! HELL YEAHHHHHHHHHH 

dinner.changeProtein("Chicken");
console.log(dinner.protein);

// got wayyy too into my head! But you got there, didn't ou! See you're totally ready to conquer day_7! 