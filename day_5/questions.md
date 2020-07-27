## Day 5 Questions

1. What is an Object, and how is it different from an Array in Javascript?

> An **object** is a collection of information about a specific instance, stored as key-value pairs. Because of this pairing, these pieces of information may be called by their *key* (property name) to access, use or alter the data value associated with that name, rather than having to refer to the information based on its assigned index number within an *array*.

1. In the space below, create an Object stored to a variable named `petStore`.  This object should hold an inventory of items and the number of that item that you might find at a pet store.

```
        var petStore = {
          numBagsKittyLitter = 10,
          numDogLeashes = 18,
          numBetaFish = 12,
          numWaterBowls = 8,
          numScratchPosts = 5
        };
```

1. Given the following `states = {"CO": "Colorado", "IA": "Iowa", "OK": "Oklahoma"}`, how would you access the value `"Iowa"`?

```
        states.IA
```

1. How would you add a new property to that object with a key of `"MN"` and a value of `"Minnesota"`?

```
        states.MN = "Minnesota";
```

1. What is another example of when we might use a object?  In this case, why is a object better than an array?

> I imagined my own version of the coffee order exercise prompted at the beginning of the Objects lesson plan.
It is helpful to use an **object** when we want to store and access a variety of data types associated with one instance of a thing (rather than *arrays*, wherein it is preferred to use uniform data types to keep the information cleaner). In this case, we manipulate strings, integers, booleans, an array and a **method**.
```
        var cafeOrder = {
          drink: 'dirty chai',
          sizeOz: 12,
          temp: 'hot',
          shots: 2,
          toGo: false,
          shotOpt: [ 1, 2, 3 ],
          location: '2914 Coffee',
          placeOrder: [Function]
        }
```
> This accessibility includes being able to use the data in more complex ways, by calling on the properties as variables to perform more deeply nested references and / or calculations within **methods**.

```
        cafeOrder.shots = cafeOrder.shotOpt[2];

          // updates the value of shots in the cafeOrder object to be the number 3, because it is index[2] within the associated shotOpt array.

        cafeOrder.placeOrder = function() {
            console.log ("I'd like a "+ cafeOrder.sizeOz + "oz, " + this.drink + " with " + this.shots + "shots, please!");
        };

        // note: Used both cafeOrder.sizeOz as well as 'this' keyword to call this.drink and this.shots, showing that either will work the same way to refer to values associated with the key within this object.
```

1. What questions do you still have about objects?

> In the PowerPoint on Objects, I wonder if the provided example for a box of books may have been misleading for the sake of simplicity... or maybe I don't understand that it was done this way for other functional reasons.
I see the value of being able to work with the contents using array methods. Otherwise, I might argue that the `contents: booksArray` property would better be represented as an ***object*** *within the* ***BOX object*** OR even as an ***array*** *of* ***objects*** (is that a possible thing?) because each individual book title listed would then carry its own set of data (as properties like title:, author:,  numberOfPages:, etc). However, I am not sure what steps would then be necessary to access the the data further nested within those objects.
Was `contents: booksArray` presented this way to keep things clearer initially before diving in, or was this done with regard to the way the value of `booksArray` would actually be used? Maybe a key name like `bookTitles`, or such would allow this to sit more comfortably as an array?

> NOTE: I spoke with Amy about this after having typed out the above consideration/question, and it seem likely that this example was so provided in the interest of keeping things simpler. I've opted (in several places including this one) to leave this as record of my learning process, but Amy did seem to reassure that I am on the right track in thinking that even each of the books within the box could be appropriately represented as an object to hold its unique data.
