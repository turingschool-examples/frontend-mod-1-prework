#Caesar Cipher High-Level Notes

##Big Steps

  1. ARRAY: Create an array variable with a list of alphabet letters as string
      elements.

  2. SPLIT: Create method in class that splits the words inside an entered
     string into individual letters and spaces.

  3. SHIFT: Create method in class that identifies letters relative to their
     location in alphabet array and then changes those letters to new values based on an entered shift value.

  4. RETURN: Create method in class that returns new string from new letter values.


###Small Steps

    - ARRAY

        1. Create an array variable (alphabet) with a list of uppercase
           alphabet letters as string elements.

    - SPLIT

        1. Create a function that takes a user entered string and splits that
          string into an array (newArray) of several substrings of each character from the
          original string.

        2. If a substring in the new array is a letter, make that letter
           uppercase.

    - SHIFT

        1. Create another function with a loop that determines if the first
           index of the newArray (the first letter of the original string) has
           the same value as an element in the alphabet array.

        2. If the values are the same, set the value of the first index of
           the newArray to the value of the matching index in the alphabet array plus the user-inputed shift.
             - So if "R" is the letter we are changing, and 4 is the shift,
               4 would be added to the index of "R" in the alphabet array, and
               the new value would be set to the value of "V", which is 4 away
               from "R".
            - If there is a space leave it unchanged.

        3. Return the new letter in a new array (finalArray) and repeat this
           loop for every substring in the newArray.

    - RETURN

         1. With the finalArray, join all of the now changed letters from the
            original string, and print them as a new string.
