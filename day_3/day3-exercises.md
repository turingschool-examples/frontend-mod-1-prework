1.  If you're using an input element in a form, what attribute controls the behavior of that input?
If you are using the input element in a form the type attribute controls the behavior of the input. For example, when the type attribute has a value of "password", it creates a text box that hides characters as they are typed.

2.  What element is used to create a dropdown list?
The `<select>` element is used to create a dropdown list. It must contain two or more `<option` elements, each representing one option.

3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
When using an input element to send form data to a server, the `type` attribute should be set to `type="submit"`.

4.  What element is used to group similar form items together?
The `<fieldset>` element can be used to group similar form items together (like all contact details grouped together).

<br><br>

1.  Describe the differences between border, margin, and padding.
* Border refers to the edge of a box. Every box has one, but the border is not always visible.
* Margin refers to the space outside the border. Increasing the margin will increase the space between two boxes.
* Padding refers to the space between the border and the content of the box. If you have no padding, the content can push right up against the border and be hard to read.

2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
* 1px = top of box
* 2px = right side of box
* 5px = bottom of box
* 10px = left side of box
* As a rule, when written in this shorthand the values go in a clockwise direction starting with the top side.

3.  Describe the difference between block-level and inline elements.
Block-level elements can't share horizontal space with other elements, so they take up the whole width of the page (even if the element doesn't visually take up the whole width). They have a line break before and after them.

Inline elements can share horizontal space with other elements. They only occupy as much space as they need and do not have line breaks before or after them.

4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
Fixed positioning assigns positions to elements relative to the browser window instead of the containing element. They do not move when the user scrolls up or down. Z-index controls which box appears "on top" when boxes overlap. Elements with higher z-indexes will appear "on top" of elements with lower z-indexes. When using fixed positioning, the z-index helps you control how the fixed element will display as the user scrolls up and down and whether it will appear above or below the other elements it passes.

5.  What is the difference between a fixed and liquid layout?
Fixed width layouts have specific set measurements and do not change size if the browser window changes. Liquid layouts adapt their size as the browser window is resized. Their measurements tend to be given in percentages.
