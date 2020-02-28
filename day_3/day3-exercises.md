# Day 3:

## Chapter 7 questions:

###If you're using an input element in a form, what attribute controls the behavior of that input?
The attribute that would be used to control input is the type. The value of the type input determines the type of information being gathered. Examples of different type values: text, password, radio, checkbox.

### What element is used to create a dropdown list?
The element used to create a drop down list is the select box: `<select>` The select element will include two or more `<option>` elements within the opening and closing tags. It will also include a name attribute of the form control sent to the server, and values for each option that can be selected.

### If you're using an input element to send form data to a server, what should the type attribute be set to?
The type attribute should be set to the value of "text" so that the computer knows the information it's getting from the user is in text format.

### What element is used to group similar form items together?
To group form items together, the `<fieldset>` element is used. This element will often put a box around the grouped forms to show they are related. To label the section of groups in the form, the `<legend>` element is used right after the opening fieldset tag.

## Chapters 13 and 15 questions:

### Describe the differences between border, margin, and padding:
These three properties control the appearance of boxes on the page. The border is what separates the edges of of boxes on a webpage, the border may or may not be visible. The borders can be separated further with the margin property. The margin sits outside the border and can be controlled with a set width. The padding property is the space or "pad" between the border and its contents, making it more readable to the user.

### For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
When multiple values of padding are specified, then you always start at the top and go clockwise. Therefore, 1px applies to the top, 2px applies to the right side, 5px applies to the bottom, and 10px applies to the left side of the text.

### Describe the difference between block-level and inline elements.
The display property gives the ability to change elements from being block-level or inline on the page. Block level elements include a box that start on a new line. So if you have a couple element (say on a heading) they would be displayed vertically, or "slacked" on each other. If you set the display value in CSS to inline then this would change to the boxes to be displayed next to each other in a line. The inline display also allows for boxes to flow between surrounding text.

### What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
I like to think of absolute and fixed positioning as a new "layer" on the page. This comes in handy when you need an element to behave differently on the page while not effecting any of the other elements. In this position could place an element right on top of another one but in a new "layer." This is when the z-index is important because this determines which element will be on top or show above the other one.

### What is the difference between a fixed and liquid layout?
With fixed-width layouts, the design element of the page won't change size when the user increases or decreases the size of the window. The liquid layout will adjust with the browser window size and. Both have advantages and disadvantages.
