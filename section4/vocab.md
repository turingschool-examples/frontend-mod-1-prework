##Section 4 VOCAB!

####Terms
Object Literal:
*an object literal is any object we literally type out*
{
  stuff : 'lots of stuff',
  more_stuff : 'all da tings'
};

{};

Yes, they can even be empty object literals.

key-value pair:
*a property of an object*
A property of an object is akin to an element in an array. It is the actual piece of data being stored in an object. What makes these so unique is that each piece of data is stored under a key in the object. This key is a way to access/call the value much as an index is used to access/call an element in an array.

Saying property is synonymous with saying key-value pair.

Syntax: <key_name> : <value>
```javascript
var obj = {
  key : value
};

var anotherObj = {
  tomatoes : 5
};
```
In both of these examples we have the key (which does not have to be called key) and the value.

```javascript
var exampleObj = {
  string : 'this is an example string',
  number : 42,
  boolean : false,
  array : ['x', 'y', 'z'],
  object : {
    stuff : 'things',
    et_cetera : 'mainly et cetera'
  }
};
```

**Important Note**
The type of the key is ALWAYS a string. Period. No ifs, and, or buts about it. The key is always a string.

The value can be any data type, even arrays, objects, OR FUNCTIONS. By the way, a method across Javascript is actually a function stored in an object. The name of the method is actually a dot notation call using that label as the key to the stored function. The objects holding the functions which are our methods are native to Javascript; you do not need to go and write them every time you open a coding environment. When you specify you're writing in Javascript, these objects containing these functions which are your methods are already loaded and ready to go. More on dot notation here in a sec.

#####Referencing Elements in Objects
dot notation
Dot notation is the first way to reference a property in an object. Our methods all traditionally use dot notation (you can technically call these same methods with bracket notation; more on that below). Syntax <name_of_object>**.**<key_name>

```javascript
var obj1 = {
  rawr : 'screaming'
};

var soundEffects = obj1.rawr;
console.log(soundEffects);
/*
There are actually TWO examples of dot notation in this example. Can you find them both?
console.log is an example of using dot notation
  it is referencing the native object console and calling the value (a function) at the key 'log'
*/
```

*bracket notation*
I'm including bracket notation as it is as important to know when dealing with objects (maybe even more so?) than dot notation.
Bracket notation is the second way to reference a property in an object.
```javascript
var obj2 = {
  Asta : '5-leaf clover grimoire',
  Yuno : '4-leaf clover grimoire',
  Noelle : '3-leaf clover grimoire'
};

var theGrimoireYouWant = obj2['Yuno']
console['log'](theGrimoireYouWant);
```

**The instant question arises: why the hell do we have two ways to reference the value at a key in an object?**

*reasons to have two*
"There is only one true law of the Sith...there are only two." -Darth Sidious
  If you know the rest of this quote, good for you! You watch too much Clone Wars. Except there is no such thing as too much Clone Wars...

  Oh well...

There are two different ways to access values in objects because each are better at different things. Dot notation is easier to type. It is much more commonly used for methods. It is almost exclusively used with Classes and Instances. It also makes it easier to assign new properties to an object.
```javascript
console.log(obj2.Asta);
obj2.Julius = 'floating grimoire of awesomeness that has no cover and endlessly cycles pages'
console.log(obj2);
```
Dot notation can run into some issues, though. It cannot reference a key whose name you do not know. This becomes critical when writing out certain functions that need to look at multiple keys in an object. Bracket notation has a second form that allows you to do this.

```javascript
function getAllKeys(obj) {
  var container = [];
  var values = [];
  for (var key in obj) {    
    container.push(key);
    values.push(obj[key]);
  }
  var result = container + ', ' + values;
  return result;
}

var input = { first : 'blah', second : 'tgif' };
var output = getAllKeys(input);
console.log(output); // ['blah', 'tgif']
```

*To recap, dot notation has one form, and bracket notation has two forms.*
  Bracket notation's first form wraps the key name in quotes and is treated just like dot notation.
  The second form does not have the key name wrapped in quotes. This means that that line of code is going to look for some variable or key which fits, as it is not pointing to any specific key in an object. It wants a variable or key name which we don't know yet to work.
```javascript
console.log('hi');
console.log(['hi']);
```

method
A way to interact with the attributes of an object, particularly a class prototype or an instance. Outside of this, there are nowhere near as many methods like string or array methods that actually work with objects.

class (in JS)
An overarching potential archetype of several instances or sub-classes with same attribute and method types, if not exact replicas. For example, any instance of the class Car will have engine, color, make, model, year, etc. Not every car will have the same engine, color, make, model, etc.

object instance
A particular named instance of a class. This is a specific example of a class. A 2009 Hyundai Santa Fe GLS is an instance of the class Car.

properties
Properties are also called key-value pairs in Javascript.

####JS Reserved Shit
class

constructor

new
