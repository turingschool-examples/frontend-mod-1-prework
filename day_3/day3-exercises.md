## Read Chapter 7 on Forms from HTML and CSS: Design and Build Websites
Answer these questions about the reading in your day3-exercises.md file:

If you're using an input element in a form, what attribute controls the behavior of that input?<br />
  The value of the type attribute determines what kind of input they will be creating. Lets say the type attribute has a value of "text", it would then create a single-line text input.

What element is used to create a dropdown list?<br />
The `<select>` element is used to create a drop down list box. The `<option>` element is used to specify the options in that list that the user can select from.


If you're using an input element to send form data to a server, what should the type attribute be set to?<br />
A name attribute "text".

What element is used to group similar form items together?<br />
The `<fieldset>` element.


## Read Chapters 13 and 15 on Boxes and Layout from HTML and CSS: Design and Build Websites
Answer these questions about the reading in your day3-exercises.md file:

Describe the differences between border, margin, and padding.<br />

Every box has a <strong>border</strong>, (visible or not, 0px), it separates the edge of one box from another. Whereas a <strong>margin</strong> sits outside the edge of a border, can also be used to create gaps between two adjacent boxes. <strong>Padding</strong> is the space between the border of a box and any content contained within it.

For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?<br />
left, bottom, right, top

Describe the difference between block-level and inline elements.<br />
These can get a bit confusing but if I have it right they allow you to turn an inline element into a block-level element or vice-versa, and can also be used to hide an element from the page.(?)  

What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?<br />
Fixed positioning is a type of absolute positioning that requires the position property to have a value of fixed. When using relative, fixed or absolute positioning, boxes can overlap, if they do overlap, the elements that appear later in the HTML code sit on top of those that are earlier in the page. So if you want to control which element sits on top, you can use the z-index property.

What is the difference between a fixed and liquid layout?<br />

Fixed width layout design do not change size as the user increases or decreases the size of their browser window. Measurements usually given in pixels. Liquid layout stretch and contract as the user increases or decreases the size of their browser window. Measurements usually given in percentages.
