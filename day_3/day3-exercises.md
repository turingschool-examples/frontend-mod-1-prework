# Day 3: HTML and CSS

Answer these questions about the reading in your `day3-exercises.md` file:

1.  If you're using an input element in a form, what attribute controls the behavior of that input?
* action

2.  What element is used to create a dropdown list?
```
<select>
```

3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
* type="submit"

4.  What element is used to group similar form items together?
```
<fieldset>
```
Answer these questions about the reading in your `day3-exercises.md` file:

1.  Describe the differences between border, margin, and padding.
* Border: separate the edge of one box from another.(even if it's not visible or is specified to be 0 pixels wide)
* Margin: sit outside the edge of the border to which you can set the width to create a gap between two borders of two adjacent boxes)
* Padding: is the space between the border of a box and any content contained within it.

2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
* 1px = top, 2px = right, 5px = bottom, 10px = left

3.  Describe the difference between block-level and inline elements.
* block-level elements start on a new line.  ie:
```
<h1> <p> <ul> <li>
```
* inline elements flow in between surrounding text ie:
```
<img> <b> <i>
```

4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
* The role of fixed positioning is to position the element in relation to the browser window.  It's an absolute or fixed position.  SO when a user scrolls down the page it stays in place.
* The z-index is important in that it controls which element sits on top by assigning a value to the z-index.  ie:  an element with a z-index of 10 will sit or stack on top of an element with a z-index of 3.  This means that if you want the position: fixed element to sit on top you would want the z-index of that position: fixed element to be the higher number in the aforementioned example.

5.  What is the difference between a fixed and liquid layout?
* A fixed layout does not change size as the user increases or decreases the size of their browser window.
* A liquid layout will change its size as the user increases or decreases the size of their browser window.
