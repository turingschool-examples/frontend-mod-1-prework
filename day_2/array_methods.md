##pop()

This method returns the last element of an array while removing it from said array. This affects the length of the array as well.

```var raeJepsen = [1, 8, 0, 0, 1, 2, 3, 4, 5, 6, 7];

var phoneNumberFromLastNight = raeJepsen.pop();

console.log(raeJepsen);
//expected output: 1, 8, 0, 0, 1, 2, 3, 4, 5, 6

console.log(phoneNumberFromLastNight);
//expected output: 7
```

##push

push adds element(s) to the end of an array and returns it's new length.

``` var herCats = ["Wanda", "Shelly", "King", "Richard"]

herCats.push("Johnny", "Rae", "Sicko");
// expected output: 7

console.log(herCats);
// expected output: "Wanda", "Shelly", "King", "Richard", "Johnny", "Rae", "Sicko"
```

##shift()

Much like pop, shift() returns the first element of an array while removing it. Again, the length of the array is changed.

```var arrow = ["bow", "quiver", "taught", "arrow", "green arrow"];

arrow.shift(); // expected output: "bow"

console.log(arrow);
// expected output: "quiver", "taught", "arrow", "green arrow"
```

##unshift

Adds element(s) to the beginning of arrays and returns the new length.

``` var herCats = ["Wanda", "Shelly", "King", "Richard"]

herCats.push("Johnny", "Rae", "Sicko");
// expected output: 7

console.log(herCats);
// expected output: "Johnny", "Rae", "Sicko", "Wanda", "Shelly", "King", "Richard"
```
