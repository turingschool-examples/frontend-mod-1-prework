#High Level Notes
##Caesar Cipher


A **caesar cipher** is an algorithmic method used to encrypt text by replacing a letter with another letter a certain position away in the alphabet.


First, I will create a function. Then I will name it, giving it a string and a number.

```
function cipher(string, number) {
  ```
Next, I add code that will make the string lower case in order to make the characters uniform.

```
 var lowerCase = string.toLowerCase();
  ```
Next, I add the alphabet and then each letter in the alphabet return as its own string.

  ```
 var alphabet= 'abcdefghijklmnopqrstuvwxyz'.split('');
```


I define two **variables** that will be used in the code. They are blank because they will be used to return a value later, and do have have a value on their own for any purposes that apply to this code.

```  
 var newString = '';
 var string = '';
```

Now I create a **loop** that applies to my `lowerCase` string. `0` represents the first letter in a string, or the current letter.
```
 for (var i = 0; i< lowerCase.length; i++) {
    ```
The following code iterates over the current letter, represented by `letterNow`.

```  var letterNow = lowerCase[i];
```

Next, I add code that prevents any edge casing errors.`Continue` allows the code to break out of the `if` statement, but remain in the **loop**.

```
    if(letterNow ===" "){
      newString += letterNow;
      continue;
   }
   ```

Then, I define the variable `indexNow` to tell the code that the alphabet letter `a` has an index of `0`, with `b` having and index of `1` and so on. Now the index can be used and another letter will be represented according to the shift value used by the user.

```   
   var indexNow = alphabet.indexOf(letterNow);
   ```

`number` now represents the shift value

```  
   var newIndex = indexNow + number;

  ```
Next, code is added so that the index always represents one of the letters of the alphabet.

```  
   if(newIndex>25) newIndex = newIndex -26;
   if(newIndex<0) newIndex = newIndex+26;
   ```

I attempted to run the code, and at first it seemed to work. However, the **cipher** would not address any capital letters. The following code addresses every input letter and makes it lowercase so that the **cipher** acknowledges its presence. The `||''` had to be added into the conditional statements. Because the string was empty, the capitalize logic considered the properties to be undefined and read as an error in the code.

```
   if(string[i] === string[i]||''.toUpperCase()) {
   newString += alphabet[newIndex].toUpperCase();
   }
   else{
     newString += alphabet[newIndex];
   }
 }
```

 Last, I use `return` to leave the **loop** and return to `newString`.

 ```
 return newString
}
```

Now that the code is complete and no longer returns errors, I log the **function** to start **encoding** text. `Hello World` represents the text that will be encoded. `5` the number of fixed positions away of the new letter that will replace each current letter.


`console.log(cipher('Hello World',5))` returns `MJQQT BTWQI`.


I used `console.log(cipher('MJQQT BTWQI',-5))` to make sure that the code was consistent. This returned `HELLO WORLD` which tells me that the cipher is complete!

###Extra Testing

`console.log(cipher('With great power comes great repsonsibility', 10))` returns `gsdr qbokd zygob mywoc qbokd bozcyxcslsvsdi`

`console.log(cipher('gsdr qbokd zygob mywoc qbokd bozcyxcslsvsdi', -10))` returns `with great power comes great responsibility`


`console.log(cipher('I am tired.',20))` returns `c ug nclyxt`

`console.log(cipher('c ug nclyx',-20))` returns `i am tired`
