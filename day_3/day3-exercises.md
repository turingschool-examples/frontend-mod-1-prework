# Day 3 Exercises

## Chapter 7(Forms) Questions and Answers
1)  If you're using an input element in a form, what attribute controls the behavior of that input?
* Answer: When using an input element, the 'type' attribute controls the behavior of that input.  For example, in the line of code: `<input type="radio"..>` the user will be prompted to click a radio button as a response.  If the input type is 'text' then the user will be prompted to enter text in a text box.

2)  What element is used to create a dropdown list?
* Answer: A dropdown list is also known as a select list.  The `<select>` element is used to create a dropdown list. Along with the `<select>` element, you need to name the form control with the 'name' attribute and then create options to select with the `<option>` element.

3)  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
* Answer: The input type should be set to "Submit", which will add a submit button to send a form to the server.  For example: `<input type="submit"  value="submit" />` will create a button titled 'submit.' The value attribute sets the name of the button.  

4)  What element is used to group similar form items together?
* Answer: The ``<fieldset></fieldset>`` element will group form items together.  This is handy when you need similar items from a user, such as their contact information(email, cell phone).  The `<fieldset>` element will usually wrap a little box around all the input types needed.

## Chapter 13 and 15 Questions and Answers
1) Describe the differences between border, margin, and padding.
* Answer: Border, Margin, and Padding are 3 properties of boxes.
  * Border: The border separates the edge of one box from another
  * Margin: The margin is outside the edge of the border.  If you set the margin width you can create a gap between the borders of adjacent boxes.
  * Padding: The padding sets the space between the border of a box and any content within the box.  Adding Padding can make it easier to read the contents of a box.
2) For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
* Answer: This is shorthand for the 4 sides of a box. Beginning with the top(1px), each successive pixel number represents padding on the next clockwise box side.  In the above example, 1px(top) 2px(right) 5px(bottom) 10px(left).

3) Describe the difference between block-level and inline elements.
* Answer: Block-level elements will appear on the page in a vertical alignment (one above the other) and inline elements will appear as a horizontal alignment (side by side).

4) What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
* Answer: Fixed positioning fixes and element's position relative to the browser window. For example, you could fix the header position to the top so it always appears in the browser window even when scrolling down.  The z-index is important for this because you may need to control which element sits on top if they overlap. This is needed when trying to keep the heading always in front.  The z-index property is similar to the "bring to front" feature in Word.

5) What is the difference between a fixed and liquid layout?
* Answer: Fixed width layouts do not change sizes as the user increases or decreases the size of their browser window.  Liquid layouts will change sizes, stretching and contracting as the browser window is adjusted.

[CodePen Website Link Day 3](https://codepen.io/nickstaylor/pen/MWYVGGX)
