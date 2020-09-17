## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
Actually vastly different. I initially did not like using *BeFocused* as it doesn't always play the sound to indicate that a period of work time is over when I lock the phone. However, I noticed a **HUGE** difference by having the chronometer sound playing during the work period! It did add that slight pressure to keep working for as long as I can hear the sound AND helped me stay focused.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

Overall I was moving much faster than I anticipated! I was able to add goals to Step 1 multiple times!

I think my biggest issue was when my node was having run issues. I suddenly wasn't "crushing it" according to my list, and ended up being a little frustrated. But I was able to be more aware of that frustration, and not get too hung up on it. Instead of being mad that it wasn't working, I assumed I had an error in my code, so was looking for ways/examples to fix what I thought the issue was. It wasn't until I located some examples that I realized I was correct and that I should probably just restart the Terminal.

So that is something for me to watch: if I am seemingly behind where I thought I would be, don't get frustrated. Calm down and continue on, and I will probably catch back up with the increase in speed and focus I noticed!

1. What is an Object, and how is it different from an Array in Javascript?

An Object, like an Array, is a collection of data. It differs from an array by assigning labels to each value as a key-value pair and not having a length. Instead of index numbers to access elements, properties in an object are accessed by their key. Objects also are the primary building block of Classes and Instances.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - *array*
  All you need here is a list of the students' names; there is no need for any labels.
  * List of states and their capitals - *object*
  Here it would be easiest to assign states as the keys with the values beign the corresponding capitals. The need for both is there.
  * List of things to pack for vacation - *either*
  It depends on how specific you want to get. You can use an object with keys such as food, then have the corresponding value be an array of all the food you're bringing. You could follow that line of thinking for each category of item you are bringing. However, at its simplest, you'll just have a list of all the items, so if you don't care about being too organized, an array of all the items is sufficient.
  * Names of all the Instagram accounts I follow - *array*
  Simple list.
  * List of student names and their cohort - *object of arrays*
  I would set each cohort title as the keys with the values being arrays of all the student names.
  * Ingredients and amount of each ingredient to bake a cake - *object*
  Clear need for both an ingredient name (key) and amt (value).
  * All my favorite restaurants - *array*
  Simple list again

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
```javascript
// object representing a user on chess.com
class User {
  constructor(username, ratings, userSettings, friends) {
    this.name = username; // string
    this.ratings = ratings; // object with keys of diff categories of play and values as arrays of win/loss/draw ratios
    this.settings = userSettings; // object with keys as diff settings and values as diff chosen settings
    this.friends = friends; // array of strings being usernames of other users
  }

  addFriend(diffUsername) {
    this.friends.push(diffUsername);
  }

}  
```

1. What questions do you still have about classes and/or Objects?
In general, looking forward to learning more about the different keywords used in Classes and how to start integrating subclasses.
