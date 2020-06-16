![methods](https://www.open.ac.uk/researchprojects/enduringlove/sites/www.open.ac.uk.researchprojects.enduringlove/files/styles/hero/public/methods.jpg?itok=mo4ILemm)

# Describe what each method does.
## Methods to study: "pop", "push", "shift", "unshift"

### Pop
- The "pop" method removes the last value from an array and logs the removed value to the console
- Example:
```
var dogs = ["germanShepherd", "husky", "mrWorldWide305"];
console.log(dogs.pop());
// returns: "mrWorldWide305"
console.log(dogs);
// returns: Array ["germanShepherd", "husky"];
dogs.pop();
// returns: "husky"
dogs
// returns "germanShepherd"
```
### Push
- The "push" method allows you to add one or more new values to the end of an array and returns the new length of the Array to the console
- Example:
```
var computers = ["mac", "hp"];
computers.push("google");
// returns: "3";
computers;
// returns: ["mac", "hp", "google"];
```
### Shift
- The "shift" method removes the first value from an array and logs the removed value to the console
- Example:
```
var computers = ["mac", "hp", "google"];
computers.shift();
// returns: "mac";
computers = ["hp", "google"];
var hocusPocus = computers.shift();
hocusPocus
// returns: "hp";
computers;
// returns: "google"
```
### Unshift
The "unshift" method allows you to add one or more new values to the beginning of an array and returns the new length of the Array to the console
- Example:
```
var computers = ["mac", "hp", "google"];
computers.unshift("gateway");
// returns: 4
computers;
// returns: ["gateway", "mac", "hp", "google"];
var newComputer = computers.unshift(“dell”);
computers
// returns: ['dell', 'gateway', 'mac', 'hp', 'google']
newComputer;
// returns: 5
```
