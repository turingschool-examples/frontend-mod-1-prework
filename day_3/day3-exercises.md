#### If you're using an input element in a form, what attribute controls the behavior of that input?
The input element controls the behavior, ie `<input type="text"` for a text box or `input type ='password'` for password text box.

#### What element is used to create a dropdown list?
````javascript
<select name="dropdown list box">
 <option value="dropdown">selection 1</option>
 <option value="dropdown">Selection 2</option>
````

#### If you're using an input element to send form data to a server, what should the type attribute be set to?
The input type would be `name` attribute. It helps the server know which form input is being used.
`<input type="text" name="informationForServer">`  

#### What element is used to group similar form items together?
`fieldset`

#### Describe the differences between border, margin, and padding.
the border property is apart of the box model, the parameter of the element which is just outside of the padding and before the margin.  Padding is the space between the border of a box, and the content inside. Margin helps align the box, esp with corresponding elements near it.


#### For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
We want to give each of the padding a different value, 1px is the top, and continue clockwise around the box, so the right side is 2px, bottom is 5px and the left side is 10px.

#### Describe the difference between block-level and inline elements.
Inline elements will cause a block-level to act as it if is an in-element, vs a block will allow a inline to act as if it was a block.  Block elements can seperate between boxes, and inline is floats more within the box. Inline-block allows more styling.

#### What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
Fixed positioning allows for elements to be in an absolute postion that does not move when you move the page. Think of a header in a spreadsheet with all the values.  Z-index allows you to control which box is on top when they elements move from the normal flow, so when you scroll that spreadsheet, the values don't flow into the header as well.  Cleaner, tighter look on the page.  

#### What is the difference between a fixed and liquid layout?
Liquid layouts are reactive to the size of the browser screen - no side gaps, vs fixed will have often have vertical side gaps and do not resize depending on browser size.
