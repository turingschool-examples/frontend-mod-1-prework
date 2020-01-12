# Day 3 Exercises

## Chapter 7 Questions
1) If you're using an input element in a form, what attribute controls the behavior of that input?
  * The type attribute.


2) What element is used to create a dropdown list?
  * ```<select>```
  * The select element then contains two or more ```<option>``` elements which the user selects from that dropdown.


3) If you're using an input element to send form data to a server, what should the type attribute be set to?
  * "submit"


4) What element is used to group similar form items together?
  * ```<fieldset>```


## Chapter 13 & 15 Questions
1) Describe the differences between border, margin, and padding.
  * The border separates the edge of one box from another.
  * The margin sit outside the edge of the border.
  * Padding is the same between the border of a box and any content contained within it. This helps with realdability.


2) For a CSS rule ```padding: 1px 2px 5px 10px``` what sides of the content box does each pixel value correspond to?
  * 1px - padding for the top of the box
  * 2px - padding on the right side of the box
  * 5px - padding for the bottom of the box
  * 10px - padding for the left side of the box


3) Describe the difference between block-level and inline elements.
  * In HTML, a block-level element means the box the content is in will take up the entire width of the page and "block out" other elements from sitting next to it. Each block-level element starts on a new line.
    * For example, if you put a box around a list (which is a block element), you would see that the box takes up the entire width of the page, even if the characters in the list are short.
  * In HTML, an inline element then means the content will only take up as much width as needed to display the contents of the elements. So they allow other elements to be "in line" with the other inline elements. These flow in between surrounding text.  
    * For example, you have three images that you want to display on a website. These are inline elements, so these will try to fit on the same page as close together as possible.
  * You can uses these elements with the display property in CSS to change the display of block-level and inline elements to appear as the other.  
    * For example, with the display property, using a block element causes an inline element to act like a block-level element. You could use this with your three images if you wanted them to take up the entire width of the page and not all squeeze in together.
    * And vice versa, an inline element causes a block-level element to act like an inline element. This could be used if you had a list of items for a navigation bar that you wanted to appear horizontally at the top of you webpage.


4) What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
  * Fixed positioning positions the element in relation to the browser window. So when a user scrolls down the page, it stays in the exact same place.
  * The z-index, or stacking context, is used because if you move an element from normal flow, boxes can overlap, so the z-index allows you to control which box will appear on top.


5) What is the difference between a fixed and liquid layout?
  * A fixed layout does not change size as the user increases or decreases the size of their browser window.
    * Measurements are given in pixels.
  * A liquid layout stretches and contracts as the user increases or decreases the size of their browser window.
    * Measurements are given in percentages.



## CodePen
* Link: https://codepen.io/rnthomas/pen/PowRypE
