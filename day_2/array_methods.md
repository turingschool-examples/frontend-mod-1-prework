#Array Methods to Study
1. "pop" - The method .pop() will remove the last element from an array<br>
>**Example:** <br>
> var flower = ['lily','rose','orchid','tulip','iris']; <br>
>console.log(plants.pop()); <br>
>//will print the last element of the array which is 'iris'<br>
>consol.log(plants); <br>
>//now expected to print the array ['lily','rose','orchid','tulip']; <br>
>plants.pop(); <br>
>//will remove the current last element from the array <br>
>console.log(plants); <br>
>//Should now print Array ['lily','rose','orchid']; <br><br>

2. "push" - The method .push() will add elements (one or more) to the end of the array and return the new length of the array. <br>
>**Example:** <br>
> var catNames = ['Tater Tot', 'Olive', 'Lou']; <br>
> var count = animals.push('Manos'); <br>
> console.log(count); <br>
> // This should tell us that the Array count is now 4, because we've added 'Manos' <br>
> console.log(catNames); <br>
> // This should show us the new Array ['Tater Tot', 'Olive', 'Lou', 'Manos'];
> catNames.push('Desdemona', 'Murphy', 'Indigo');<br>
> console.log(catNames); <br>
> //This should have added three new items to the Array ['Tater Tot', 'Olive', 'Lou', 'Manos', 'Desdemona', 'Murphy', 'Indigo'] <br><br>

3. "shift" - The .shift() method removes the first value from an array and returns it. <br>
>**Example:** <br>
> var colors = ['purple', 'red', 'aqua']; <br>
> var firstElement = colors.shift(); <br>
> console.log(colors); <br>
> // This should output the Array ['red', 'aqua'] <br>
> console.log(firstElement); <br>
> // Expected output here would be 'purple'<br><br>

4. "unshift" - The method .unshift() will add elements to the beginning of the array. It can add one or multiiple values. <br>
>**Example:** <br>
> var number = [1, 2, 3]; <br>
> console.log(number.unshift(4, 5, 6)); <br>
>// expected output: 6 <br>
> console.log(number); <br>
>// expected output: Array [4, 5, 1, 2, 3]
