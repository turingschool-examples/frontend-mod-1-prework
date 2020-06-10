class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  addTopping(toppings){
    this.toppings.push(toppings);
  }
  removeTopping(toppings){
    this.toppings = newTop;
  }
  changeProtein(protein){
    this.protein = protein;
  }
};

var base = prompt('Choose your base');        // prompts for base
var protein = prompt('Choose your protein');  //prompts for protein
var toppings = [];
for(var i = 0; i <3; i++)
  toppings.push(prompt('Choose your toppings'));    // prompts for 3 toppings, sets to array

var dinner = new Burrito(protein, base, toppings);              // create new instance of Burrito
console.log(dinner.base, dinner.protein, dinner.toppings);

var extraTop = prompt('you get a free topping, what shall it be!?'); //prompts to add topping
dinner.addTopping(extraTop);                                        // pushes in new topping at end of array
console.log(dinner.toppings);

var removeTop = prompt('Do you want to remove any toppings now?'); //prompts to remove topping
var newTop = toppings.filter(i => i !== removeTop);               //filters out selection array based on user selection (this is wicked sweet)
dinner.removeTopping(newTop);

if (confirm('Would you like double meat?')) {         // asks user to select y/n for double meat
  var doubleMeat = 'DOUBLE! '+ protein                // if yes, will prompt you got it and return the new protein value
  console.log('You got it!');
} else {                                             //// if no, will prompt maybe next time and not alter protein value
  var doubleMeat = protein
  console.log('Maybe next time!');
}
dinner.changeProtein(doubleMeat);                    // passes the arugment through the changeProtein method

console.log(dinner.base + ",", dinner.protein + ",", dinner.toppings)       // logs dinner

if (confirm('Does everything look good here?')){                          // prompt to complete order
  var completeOrder = dinner
  console.log('Proceed to checkout');
} else{
  console.log('Reload and lets start again')
}
