# Array Methods #
---

## pop ##
`.pop()` removes the **last item** of an array. It does not take in any arguments.
```
var foodAllergies = ['Rice' , 'Peanuts' , 'Shellfish' , 'Tree Nuts' , 'Potatoes']
foodAllergies.pop()
console.log(foodAllergies)
//returns ['Rice' , 'Peanuts' , 'Shellfish' , 'Tree Nuts']
```
---

## push ##
`.push()` allows the addition of items to the **end** of an array.
```
foodAllergies.push('Soybeans')
console.log(foodAllergies)
//returns ['Rice' , 'Peanuts' , 'Shellfish' , 'Tree Nuts' , 'Soybeans']
```
---

## shift ##
`.shift()` removes the **first item** of an array. It does not take in any arguments.
```
foodAllergies.shift()
console.log(foodAllergies)
//returns ['Peanuts' , 'Shellfish' , 'Tree Nuts' , 'Soybeans']
```

## unshift ##
`.unshift()` allows the addition of items to the **beginning** of an array.
```
foodAllergies.unshift('Wheat')
console.log(foodAllergies)
//returns ['Wheat' , 'Peanuts' , 'Shellfish' , 'Tree Nuts' , 'Soybeans']
```
---

These methods allow one to alter an array without having to recreate it from scratch.
