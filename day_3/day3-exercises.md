1. If you're using an input element in a form, what attribute controls the behavior of that input?

The method attribute basically  determines how the information input in the form is handled by the server. There are two types to this: get, which acts as temporary data (like a search box), and post in which users want their data to be saved, or contains private information not want to be seen by others (passwords, etc.).

2. What element is used to create a dropdown list?

The <select> element, an example of how this would like like is:
```<select name="examples">
  <option value="example1">Example1</option>
  <option value="example2">Example2</option>
  <option value="example3">Example3</option>```
  

3. If you're using an input element to send form data to a server, what should the type attribute be set to?

Submit, this will have 3 elements to it: First, you need to set the input type to submit, next create a name for the submit button, and last the value attribute will show which text will appear on the button.

4. What element is used to group similar form items together?

The ```<fieldset>``` element will group similar items within a form together. This can be helpful for large forms as it can break larger tasks down into more manageable groupings.

5. Describe the differences between border, margin, and padding.

Border- Separates the edges of one box from another.
Margin- Located outside the border, creates a gap between 2 boxes.
Padding-  Space located between the border and content WITHIN a box.

6. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

1px- top, 2px- right, 5px- bottom, 10px- left. An easy way I like to think about this is going clock wise starting from the 12 o'clock position.

7. Describe the difference between block-level and inline elements.

block-level- When each element comprises 1 line, additional elements will show up on subsequent lines.
inline- Multiple elements can be shown on a singular line.

8. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

Fixed position commands an element to remain stationary (or in a fixed location), despite the user moving the browser to other elements. The z-index is important while using fixed positioning because items will eventually overlap, this will allow you to chose which element displays on top.

9. What is the difference between a fixed and liquid layout?

A fixed width layout will remain in the same position if the user expands or shrinks their browser window. However a liquid layout will stretch or contract based on the increasing or decreasing of the browser size, making it a more dynamic looking setup.
