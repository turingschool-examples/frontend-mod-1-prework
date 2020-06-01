### pop
  * removes the last item from an arrays

  `const healthy = ["kale", "eggs", "strawberries", "donuts"]`

//      output is: (4) ["kale", "eggs", "strawberries", "donuts"]

  `console.log(healthy.pop());`

//      healthy now outputs: (3) ["kale", "eggs", "strawberries"]

### push
  * adds an item to the end of the arrays

  `const exercise = ["pushups", "squats", "lunges"];`

//      output is:  ["pushups", "squats", "lunges"]

  `count = exercise.push("pullups");`

//      output is: count = exercise.push("pullups");

### shift
  * removes the 1st item in an array, but can also return the first item

  `const important = ["sleep", "movie", "clean"]`

//      (3) ["sleep", "movie", "clean"]

  `const firstElement = important.shift();`

//      important now returns: (2) ["movie", "clean"]
//      and firstElement returns: "sleep"

### unshift
  * adds items (or elements? I feel like I've seen both) to the beginning of an array

  `const relax = ["movie", "read", "walk"];`

  `console.log(relax.unshift("dance", "paint"));`

//      now returns: (5) ["dance", "paint", "movie", "read", "walk"]
