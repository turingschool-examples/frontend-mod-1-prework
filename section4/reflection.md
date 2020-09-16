## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

```
Not too different, I seemed to be following it somewhat already.

```

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

```
I found useful for focusing, though the estimated times varied a bit. Its difficult with a toddler bopping around, so the breaks were broken, but when I was able to actually commit to the plan the breaks did seem to help and create a goal to work towards.
```

1. What is an Object, and how is it different from an Array in Javascript?
```
An object is a way to store data much like an array, however can accessed and changed multiple times and have unique answers for every instance created using key-pairs. Arrays are more difficult to manipulate and tend to be more static whereas objects are dynamic.
```

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
  ```
  Array - This list is ordered and would not change frequently.
  ```
  * List of states and their capitals
  ```
  Array - The list is again ordered and static, it would not change frequently.
  ```
  * List of things to pack for vacation
  ```
  Array - We simply would need a list, not descriptions of the items on the list.
  ```
  * Names of all the Instagram accounts I follow
  ```
  Object - The accounts followed will have coresponding data associated, handles, comments, posts, ect and would necesitate more information than an array could provide easily.
  ```
  * List of student names and their cohort
  ```
  Object - Because you are attaching information to the names it would be best to build an object.
  ```
  * Ingredients and amount of each ingredient to bake a cake
  ```
  Object - Multiple data points, and each cake baking recipe would be different.
  ```
  * All my favorite restaurants
  ```
  Object - Because of the amount of information pertaining to the restaurants (cuisine, address, phone number, ect) It would be best to build an object.
  ```

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
```
AllTrails would definitely use this to display trails in their search pages.

class TrailDescription {
  constructor(nearestTrailhead, landmarks, levelUseage, levelDifficulty, elevationGain) {
    this.nearestTrailhead = "4th of July Trailhead"
    this.landmarks = "South Arapahoe Peak"
    this.levelUseage = "Moderate"
    this.levelDifficulty = "Difficult"
    this.elevationGain = "3000ft"
  }
}


```
1. What questions do you still have about classes and/or Objects?
```
I think I may be struggling on the when to use bit of objects. Could you explain the difference or maybe give an example when its appropriate to use

class TransactionItem {
  constructor(amt, transactionDate, type) {
    this.amount = amt;
    this.date = transactionDate;
    this.type = type;
  }
}

### and not this?

class TransactionItem {
  constructor() {
    this.amount = 200;
    this.date = "07/24/20";
    this.type = "deposit";
  }
}

From what I'm gathering, the second version is rarely used, but just wanted to be sure.
```
