#Caesar Cypher

Based off what I have learned so far, the following are the steps I would take to solve this cypher problem:

1. Create an array that listed all letters A-Z, define it as var `letters`
1. The users input string will be broken down into it's own array using `.split('')` to get an indexed position of each letter.
1. A function will use `.findIndex()` that will have it's position modified by the user's shift index. For example, index position input from the user's string, converted to an array, might have a value of 3, indicating the matched index array position of 'C' on the `letters` array. If the user input a shift value of 5, the new index position of the array would be 8, indicating a letter of 'H'.
1. A `.length` command will find the length of the input string, and a `for` loop running for the length of the string will convert each index position of the original input to the index position of the new converted cypher.
1. Using the new index positions of the converted cypher, each letter will be looked up in the `letters` array and have their values added to a new cypher string variable.  
1. To catch any numbers in the array index returning an `undefined`, an `if` statement will be included that checks to see if any index number goes over 26 or under 0. If this is the case, the new number will be shifted either to the front of the end but the remaining value. 
