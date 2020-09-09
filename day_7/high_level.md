# High Level Write Up

_I made an initial write up thinking there was a way for me to do this problem. I wanted to go through the motions and actually code the thing and it was a way bigger project than I anticipated. When I started realizing all the limitations of my original idea, I did a lot of Googling and I ended up using ASCII values and learning a whole bunch of new stuff about regex and all sorts of other things. I wanted to include my original write up, but I also amended it at the end to include a write up of how I actually coded it. I wanted to leave my original idea because this was so difficult for me to figure out I can't imagine anyone believing I knew what I was doing from the beginning. The actual code can be found in high_level.js_

## Ceaser Cipher     

1. First, to match the requirements, we're going to need to create a `CeaserCipher` class as well as an `encode` method within that class.

2. For the actual encoding, within the encode method:

* Create an array of the alphabet
* Use a for loop to iterate through each character of the input string
* Use `array.indexOf()` to find the position of the input character in our alphabet array
* For each element in the loop, add the specified shift amount
* Find the encoded letter by accessing our alphabet array letter after the shift has been applied.
* Store the new encoded letter in a string variable
* Once we've iterated through the entire string, our new encoded string can be returned

3. Call the encode `method` of our `CeaserCipher` class using `CeaserCipher.encode()`

## Amended Ceaser Cipher (This represents the actual coded version)

1. First, to match the requirements, we're going to need to create a `CeaserCipher` class as well as an `encode` method within that class.

2. Use a for loop to iterate through each character of the input string and:
* Find the ASCII value for that letter
* Use an if/else statement to:
  - Determine if the letter is uppercase or lowercase
  - Apply the numerical shift to our ASCII value
  - Check if the new ASCII value is outside the realm of the alphabet
    1. If it is, subtract 26 to wrap it back around to the beginning of the alphabet
  - Repeat for each case (upper and lower)
  - Add statements to deal with the following:
    1. If the character is a space, keep it at that ASCII value
    2. If the character is not a letter or space return "Letters only please"
* Append our result to include the new letter
* Return our output

3. Call the encode `method` of our `CeaserCipher` class using `CeaserCipher.encode()`
