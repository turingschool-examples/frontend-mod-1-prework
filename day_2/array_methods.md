### Array Methods
1. `pop()`
This method removes the *last* element from an array and returns that element.  It is important to note that this method changes the length of the array.
###### Example:
```
var myPets = ["Howard", "Finn", "Queso"]
var myFavoritePet = myPets.pop()
console.log(myFavoritePet)
// returns Queso
console.log(myPets)
// returns ["Howard", "Finn"]
console.log(myPets.length)
// returns 2
```

2. `push()`
This method adds, or appends, one or more elements to the *end* of an array.  This method will return the new length of the array and depends on the `length` property to determine where to start adding the given values.  If the current `length` cannot be converted into a number, it starts at index 0.
###### Example:
```
var myPets = ["Howard", "Finn", "Queso"]
var addNewPet = myPets.push("Max")
console.log(myPets)
// returns ["Howard", "Finn", "Queso", "Max"]
console.log(myPets.length)
// returns 4
```

3. `shift()`
This method removes the *first* element from an array and returns that element.  It is important to note that this method changes the length of the array.
###### Example:
```
var myPets = ["Howard", "Finn", "Queso"]
var myNewestPet = myPets.shift()
console.log(myNewestPet)
// returns Howard
console.log(myPets)
// returns ["Finn", "Queso"]
console.log(myPets.length)
//returns 2
```

4. `unshift()`
This method adds one or more elements to the *beginning* of an array and returns the new length of the array.  The result depends on the order in which the elements are passed as parameters.
###### Example:
```
var ageOfFriends = [26, 31, 34, 16]
ageOfFriends.unshift(27, 38)
console.log(ageOfFriends)
// returns [27, 38, 26, 31, 34, 16]
var ageOfFriends = [26, 31, 34, 16] // reset
ageOfFriends.unshift(27)
ageOfFriends.unshift(38)
console.log(ageOfFriends)
// returns [38, 27, 26, 31, 34, 16]
```
