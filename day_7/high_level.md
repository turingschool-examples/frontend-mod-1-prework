##To create a cipher:
1. We would define the alphabet as an array of each letter to be sure the program knew what the base alphabet was.
>var alphabet = [ <br>
>  'A','B','C','D','E','F',<br>
>  'G','H','I','J','K','L',<br>
>  'M','N','O','P','Q','R',<br>
>  'S','T','U','V','W','X',<br>
>  'Y','Z'<br>
>];

2. Because the cipher is going to be a string value, we would need to modify that into an array of characters.
>###Example:<br>
>var phrase = "HELLO"<br>
>var phraseArray = Array.from(phrase); <br>
>   //should return ['H','E','L','L','O']

3. Next we would need to compare our new array to the alphabet variable and determine where each of our phraseArray values appeared in the alphabet array.
> If index of 'A' in alphabet is 0, 'B' is 1, 'C' is 2, etc. Not sure on the coding here, but ['H','E','L','L','O'] should compare to the alphabet array and log back as [7,4,11,11,14]

4. Now we need to define how we want to shift our cipher to encode the text. Feasibly we could move forward or backward in the alphabet as long as we find a way to circle back up to index 0('A') if we are moving past the end of the array, or down to index 25('Z') if we are moving backwards past the start of the array. After choosing how we want to shift the cipher, we would create a function to take the indexed array and apply that shift and log the change.
>I did a bit of research but couldn't quite find the exact language to do this. I saw that you could move forward or backwards in the alphabet using a positive integer to move forward and a negative integer to move backwards however many letters. For example if I wanted to move the cipher's alphabet back 4 letters, I would set the shift as -4 and the shifted array would register as [3,0,7,7,10]

5. After getting the adjusted index array, we would then have to revert the array to characters, and then change it into a string again to be logged.
>The shifted index array [3,0,7,7,10] <br>
>Would become a character array ['D', 'A','H','H','K']<br>
>That new character array would be changed into a string of "DAHHK"

*For a more complex beginning phrase (ex: "This is Kristen's complex sentence"), you could program an if else function that would compare each character in the string to the alphabet variable, if the character is present the program will run the above modifications on it, if the character is not present the program will just print them as is. This would maintain spaces and symbols in the correct location within the string.
