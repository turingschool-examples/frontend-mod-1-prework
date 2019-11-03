## Day 3 Exercises

1.  If you're using an input element in a form, what attribute controls the behavior of that input?
  - `<form action=""`

2.  What element is used to create a dropdown list?
  - Select:
`<select name="example">
  <option value="value1">Choice1</option>
  <option value="value2">Choice2</option>
</select>`

3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
  - Submit:
  `<input type="text" name="value1" />
  <input type="submit" name="optional" value="Button Text!" />`

4.  What element is used to group similar form items together?
- Fieldset:
`<fieldset>
<legend>Box Title</legend>
<label>Form Title:<br />
<input type="text" name="value1" /></label><br />
</fieldset>`  

1.  Describe the differences between border, margin, and padding.
  - Border: Separates the edge of one box from another.
  - Margin: Sits outside the edge of the border.
  - Padding: Space between the edge of a box and the content within it.
2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
  - Top (1px)
  - Right (2px)
  - Bottom (5px)
  - Left (10px)
3.  Describe the difference between block-level and inline elements.
  - Block level elements extend to the edge of the page and stack on top of each other, while inline elements share their Y coordinates and sit next to each other in a line.
4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
  - Fixed positioning places the element in relation to the browser window. This can cause overlapping so use of the Z-index allows you to control what is visible.
5.  What is the difference between a fixed and liquid layout?
  - Fixed layouts use set units like px and do not scale when the browser window changes in size, whereas liquid layouts use percentages to ensure that visibility remains the same despite window size or other user settings.
