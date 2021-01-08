# Checkerboard approach

## My initial idea for tackling the checkerboard was to create a ``for`` equation much like we've been using in a lot of our exercises.
1. first though, values have to be made, and this is definitely a length x width equation.

``` javaScript
class Checkerboard { //I'm creating a class, just incase I want different sizes later.
  constructor(length, width) {
    this.length = length  //define my keys & values needed
    this.width = width
  }
}
```
2. next, to create the ``function``, my idea was to rename my ``integer`` to the ``string "x "``, and then tackle ``console.logging`` ``x`` into a pattern using a loop to count down.
``` javaScript
for (var i = 0; i < this.length * this.width; i++)
this.length = ""; this.width = "x ";
```
3. well, we both know this doesn't work, and isn't the right approach.
  * after looking googling this program a little I was pleased to at least see I wasn't on the WRONG track, just needed to think on a larger scale for each dimension seperately.
  * I _am_ looking forward to having a better comprehension of more complex methods like this.
