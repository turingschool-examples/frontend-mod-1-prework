1. When using the input element on a form, the 'type' attribute controls the behavior of the element.
2. Dropdown boxes are created using the 'select' element  
3. When using an input method to send form data to a server, the 'type' method setting will depend on the data being collected. If the data is something like a username, the type will be 'text', for passwords, the type can be set to 'password' for an additional layer of security. There are additional types, such as 'radio' 'checkbox', etc. depending on what kind of input the designer is collecting.
4. Similar form items can be grouped together using a 'fieldset' element, which will usually display inside a line border.

---
1. Borders, Margins and Padding:
* Border: CSS treats each HTML element as if it is in a box. The border separates the boxes from one another; the border is always present, even though it may not be visible.
* Margin: Margins exist outside the edges of borders. By changing the width of the margin, space can be created between the borders of boxes.
* Padding: Padding is a space between the inside edge of the box and the content of the box.

2. Padding values are expressed in a clockwise fashion, starting at the top, so for a CSS rule `padding: 1px 2px 5px 10px`, the box would have a 1 pixel (1px) padding on the top, 2px padding on the right hand side, 5px padding on the bottom, and 10px padding on the left hand side.

3. Block-level elements effect an entire 'box' of code, and will always start on a new line. Inline elements can sit on the same line with other elements.  `<p></p>` is a block element, and will start a new line on the page, `<strong></strong>` is an inline element and can effect just one or two words within a sentence in the middle of a paragraph.

4. Fixed positioning determines where an element will be displayed in relation to the browser window, rather than to its containing element. Elements with fixed position will not move when the user scrolls up or down the page, and they do not affect the position of any other elements on the page. The z-property index allows control of which element will appear on top when boxes overlap. Since an element with a fixed position will not change its relative position, or cause other elements to flow around it, the z-property index allows us to determine which box will display on top of the other, which can prevent confusion for the reader.

5. Fixed width layouts do not change size depending on the size of the user's browser window, but liquid layouts do. This means that with a fixed width, the image will always stay as the designer intended, but it is not as adaptable, and can make it difficult to read for people with browsers that are not the size that the designer envisioned, or for people who need a larger font size. Liquid layouts may not display as the designer intended, but are more adaptable to the user.
