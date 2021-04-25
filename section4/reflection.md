## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

It worked out well! The frequent breaks helped me clear my head and process what I had just done. I'm definitely using it in the future.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I'm going to be honest - I started off following the instructions closely, and as time went on I forgot about them. I've had a persistent issue throughout my life when it comes to time estimation and scheduled breaks. It isn't that I don't care about the method; I just become distracted, and then I lose track of my original intentions.

I'm able to work through tasks by forcing deadlines on myself, but they have always been large-scale. If a large project was coming up in school, for example, I would estimate a rough number of hours to complete it then get started a few days before, allotting myself a few hours each day with wiggle room after. Regarding these exercises, I haven't known how to estimate time because it's all so new to me.

However - honesty may be a virtue, but so is commitment and persistence. I am going to try to adapt to these instructions. The pom breaks alone were a huge help, so I can only imagine what's possible once I nail down scheduling.

1. What is an Object, and how is it different from an Array in Javascript?

An object is a variable type that includes properties. These properties can be referenced separately from the object as a whole, and acted upon separately as well. An array is a set of variables that are indexed and operated on as a whole. Although arrays are easier to write and implement, objects allow for greater detail and flexibility when worked into other pieces of code. (At least, that's what I understand.)

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

An array would work here because we don't need any information aside from their names.

  * List of states and their capitals

An object would be able to separate the states and their capitals, and therefore let us draw whichever piece of information we need from the list.

  * List of things to pack for vacation

An array is all we need since we don't care about the specific properties of each item.

  * Names of all the Instagram accounts I follow

An array would let us store that list without having to get into account-specific information.

  * List of student names and their cohort

Depending on formatting, either could work here; but if we're separating out the student names from their cohorts for use in different contexts, an object would work best. Personally, I would just use an array unless otherwise necessary.

  * Ingredients and amount of each ingredient to bake a cake

An object would let us store the names of each ingredient as well as their measurements. Separating the measurements into their own property would allow us to manipulate portion sizes.

  * All my favorite restaurants

An array will do just fine here! Commercial names are static and don't need to be variable.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

I'm currently playing a social mobile game called HighRise. In it, players have an item inventory, an individual storefront, and rooms filled with furniture they purchase with two types of in-game currency. They might have an object that looks something like this:

`
var playerStats = {
  playerStats.username = "Cloudwell";
  playerStats.inventory = "Wow eyes", "Purple Winter Coat", "Winter Scarf", "Black Slacks", "Ace Aura";
  playerStats.storefrontActive = true;
  playerStats.gold = 250;
  playerStats.bubbles = 2480;
  playerStats.profile = "No idea what I'm doing but here I am";
}

`

1. What questions do you still have about classes and/or Objects?

I think I get it so far! I just have to used it more.
