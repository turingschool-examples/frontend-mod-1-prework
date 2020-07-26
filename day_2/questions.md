## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
> var animals;    

> animals = ["zebra", "giraffe", "elephant"]

2. Using the array `animals`, how would you access `"giraffe"`?
> animals[1]

3. How would you add `"lion"` to the `animals` array?
> console.log(25>2)

4. Name and describe two additional array methods.
``The **Array Includes Method** will determine if a certain value is
included in an array and provide a Boolean true or false return.``

> favDeadSongs = ["Reuben and Cherise", "Me and my Uncle", "He's Gone"];

> console.log(favDeadSongs.includes('cats'));

> false  

> undefined

> console.log(favDeadSongs.includes("Me and my Uncle"));

> true

> undefined

``The **Array Join Method** will take all of the elements in an array and join
them together to return a single string. A separator can be specified to return
the string split by different characters."``

> favDeadSongs = ["Reuben and Cherise", "Me and my Uncle", "He's Gone"];

> console.log(favDeadSongs.join());

> Reuben and Cherise,Me and my Uncle,He's Gone

> undefined

> console.log(favDeadSongs.join(" "));

> Reuben and Cherise Me and my Uncle He's Gone

> undefined

> console.log(favDeadSongs.join('AND THEN'));

> Reuben and Cherise AND THEN Me and my Uncle AND THEN He's Gone

> undefined


5. What are the boolean values in JavaScript?
``Boolean values in JavaScript can only be true or false.``

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
> console.log(2 == 25)
``false``

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
> console.log(25 > 2)
``true``
