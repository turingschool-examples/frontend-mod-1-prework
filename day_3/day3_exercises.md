# Day 3: HTML and CSS

# Chapter 7

# 1. If you're using an input element in a form, what attribute controls the behavior of that input?
**Answer:**
The `type=` attribute controls the behavior of an input element. If you were creating a text input for a username, you would use `input type="text"`. If you were creating a password input, you would use `input type="password"` to create an input field that blocked out the characters as the user typed them. If you were creating a file upload input, you would use `input type="file"`. There are other input types that can be used as well.

# 2. What element is used to create a dropdown list?
**Answer:**
The `<select>` element is used to create a drop down list/box. It contains two or more `<option>` elements nested within it. The `<option>` element must be assigned a `value=` for the server to pair with the input and the text that may be selected.

# 3. If you're using an input element to send form data to a server, what should the type attribute be set to?
**Answer:**
When using `<input>` elements within a form, the `type=` attribute should be set to the appropriate type for that particular input. Use `type="password"` for password, or `type="email"` for an email etc.

# 4. What element is used to group similar form items together?
**Answer:**
To group similar form items to be displayed within a box, you can use the `<fieldset>` element. You do this by nesting all your `<input>` code within the open and closing `<fieldset>` element tags. You may then use the `<legend>` element to give a heading name to the `<fieldset>` box.

# Chapter 13 & 15

# 1. Describe the differences between border, margin, and padding.
**Answer:**
1. Border: The boarder is a visible (or invisible) line that maps the perimeter of a box. It can signify where one box ends and another begins.
2. Margin: The margin sits outside the edge of a boarder creating a gap between the boarders of two adjacent boxes.
3. Padding: The padding is the space between the boarder of a box and any content within it.

# 2. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
**Answer:**
When using a padding rule for a box in CSS, four pieces of information are necessary. Boarder-top-width, boarder-right-width, boarder-bottom-width, and boarder-left-width. When the code is printed on a line, the first value is the top width, the next (continuing clockwise) is the right side width, and so on.

# 3. Describe the difference between block-level and inline elements.
**Answer:**
Block-level elements appear underneath one another, while inline elements appear next to each other if there is room for the element to do so.

# 4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
**Answer:**
Fixed positioning is a form of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element. The element will not move when the user scrolls on the screen. This is sometimes seen as annoying adds on a website that suddenly appear and the user must close it to continue reading the page. `z-index:` is used to prioritize boxes that would otherwise overlap. The larger the value of the `z-index:`, the higher priority it is, meaning a `z-index:5` would appear over the top of one with `z-index:3`.

# 5. What is the difference between a fixed and liquid layout?
**Answer:**
Fixed layouts do not change size as the user increases or decreases the size of their browser window. These measurements tend to be given in pixels and are better for desktop or laptop computers. Liquid layouts stretch and contract as the user increases or decreases the size of their browser window. These measurements tend to use percentages. This layout is best for pages viewed on all different kinds of devices (i.e. phone, tablet, laptop etc.).
