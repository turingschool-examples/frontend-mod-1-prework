# Day 3 Exercises
## Chapter 7

### 1.  If you're using an input element in a form, what attribute controls the behavior of that input?
  The `<i>type</i>` attribute will determine what sort of input the user will be prompted for. It can vary between different sorts of text boxes, check boxes, radio buttons, select boxes, file input boxes, and an assortment of buttons.

### 2.  What element is used to create a dropdown list?
  The `<select>` element creates a dropdown list box.

### 3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
  The type attribute should be set to **submit**, this paired with whatever other input method is provided to the user (text box, radio buttons etc) allows the user to push their data once their input is complete.

### 4.  What element is used to group similar form items together?
  The `<fieldset>` element can be used to group together form items that fall under a similar topic in a neat display. Typically the fieldset is displayed and the items are encased in a lined box.

## Chapter 13 & 15

### 1.  Describe the differences between border, margin, and padding.
  The border is a boundary surrounding each box. The padding is the space between the boarder and the content of the box. The margin is the space outside the boarder, and can be used to create space between boxes.

### 2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
  1px Top, 2px Right, 5px Bottom, 10px left

### 3.  Describe the difference between block-level and inline elements.
  Block-level elements always appear on a new line, in contrast, inline elements display within a block-level element and don't start on a new line.

### 4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
  Fixed positioning allows you to place an element relative to the browser window rather than the element that contains it. This means as a user scrolls this element will stay fixed, as such elements can overlap. The z-index determines how far forward or back an element should be when that overlap occurs.

### 5.  What is the difference between a fixed and liquid layout?
  Fixed width layouts do not change size as a user changes the size of their browser window, liquid layouts on the other hand shift as the user changes the size of their browser window.
