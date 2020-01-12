### 1.  If you're using an input element in a form, what attribute controls the behavior of that input?
The attribute `type` with the associated `"text"` variable will control the input type that the user is allowed to input.  

### 2.  What element is used to create a dropdown list?
The `<select>` element can create dropdown lists.  nested within this element will be `<option>` elements with a value equal to one of the options listed.  The structure is: `<option value="choice_1>Choice 1</option>"`

### 3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
The attribute would be set to "submit". `<input type="submit">`

### 4.  What element is used to group similar form items together?
The `<fieldset>` element allows grouping of similar form items.  Nested within would be `<label>` and `<input>` elements, giving the user information about their input options.

### 1.  Describe the differences between border, margin, and padding.
A border defines the edges of a box.  This may or may not be visible to the user.  A margin is the space on the outside edge of a border.  This dimension can be altered to give more or less space between boxes.  Padding is similar to margin but the padding lays on the inside of the border.  It defines the amount of space between the border and the contents of the box.  

### 2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
This shorthand goes clockwise starting at 12 o'clock.  Top: 1px, Right: 2px, Bottom: 5px, Left: 10px.  

### 3.  Describe the difference between block-level and inline elements.
A block-level element is one that occupies an entire line.  Inline elements only occupy the space between their tags.  A block-level element will typically disrupt the flow of the text if it is in the middle of a line of text.  This can be changed using the display property in CSS.

### 4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
Fixed positioning is a way to keep a box in the exact same place in a browser, even if the user is scrolling.  Z-index is important because it allows the developer to decide on what layer each block sits.  It is assigned a numerical value.  The higher the number, the closer the box is to the "top".  If "A" has a z-index value of 10 and "B" has a value of 3, then "A" will appear to be on top of "B".

### 5.  What is the difference between a fixed and liquid layout?
A fixed layout keeps the box sizes the same, whether or not the user changes the screen size.  A liquid layout will have the boxes grow and shrink as the browser window changes size.  Both have their pros and cons when it comes to containing the information and how the layout is intended to be perceived.
