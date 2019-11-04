### Reading (Chapter 7 of HTML/CSS)

**1. If you're using an input element in a form, what attribute controls the behavior of that input?**

The `type` attribute is used to specify the type of input created (e.g. radio, checkbox, text, etc.).
   
<br />

**2. What element is used to create a dropdown list?**

The `<select></select>` element is used in conjunction with one or more `<option></option>` elements.
   
<br />

**3. If you're using an input element to send form data to a server, what should the type attribute be set to?**

The `type` attribute, as specified in the question, could be set to any number of options depending upon the type of data being collected and the input type amenable to collecting such data. The `method` of the `<form></form>` element would most likely be set to `post`.
   
<br />

**4. What element is used to group similar form items together?**

The `<fieldset></fieldset>` element.
   
<br />

### Reading (Chapters 13 and 15 of HTML/CSS)

**1. Describe the differences between border, margin, and padding.**

   - Border - The border separates the edge of one box from another.
   
   - Margin - The margin sits outside of the border and can be used to create a gap between adjacent boxes.
   
   - Padding - The padding is the space between the border and the content within a box.
   
<br />

**2. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?**

The values move clockwise, top (1px), right (2px), bottom(5px), left(10px).
   
<br />

**3. Describe the difference between block-level and inline elements.**

Block level elements always appear on a new line. Inline elements do not start on a new line.
   
<br />

**4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?**

Fixed positioning is a form of absolute positioning that positions an element in relation to the browser's viewport, as opposed to its containing element. Elements with fixed positioning do not affect the flow of surrounding elements nor do they move position when the user scrolls. The z-index property is important because elements can overlap and this property allows the developer to choose which elements appear on top.
   
<br />

**5. What is the difference between a fixed and liquid layout?**

Fixed width layouts do not respond to a user resizing the browser window (or using a device with a different resolution), they are typically built using units of pixels, making them non-responsive. Liquid layouts are responsive and stretch and contract according to the resolution of the user's display or browser window, they are built with units such as percentages, rems, and ems.
   
<br />
