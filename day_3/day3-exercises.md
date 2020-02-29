1. If you're using an input element in a form, what attribute controls the behavior of that input?
  * The value of the `type` attribute

2. What element is used to create a dropdown list?
  * The `select` element
    * You give the dropdown a name and then add options with values

3. If you're using an input element to send form data to a server, what should the type attribute be set to?
  * `submit` is the type you would use to send data back to a server

4. What element is used to group similar form items together?
  * `fieldset` groups related items together

  ---

1. Describe the differences between border, margin, and padding.
  * border - separates the edge of one box from another
  * margin - sits outside the edge of a border
    * You set a width of a margin to make a gap between the borders of two adjacent boxes
  * padding - the whitespace between the border of a box and the content inside the box.  
    * Adding padding can increase the readability

  * Essentially if you have a border around a box, the padding is the space you create within the box and the margin is the space you can created outside the box

2. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
  * Padding starts at the top and then moves clockwise
    * 1 px is the top
    * 2 px is the right
    * 5 px is the bottom
    * 10 px is the left

3. Describe the difference between block-level and inline elements.
  * Block-level boxes start on a new line and are the main building blocks of a webpage's layout
    * Headers, paragraphs, and lists are all examples of block-level elements
  * Inline elements flow between surrounding text
    * Images, bold, and italicize are examples of inline elements  

4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
  * Fixed positioning is a form of absolute positioning that positions the element relative to the browser window vs the containing element
    * Fixed positioning doesn't affect the positioning of surrounding elements and does not move when scrolling
  * Z-index controls which element appears on top, so it's important because, so it needs to be used in fixed positioning to allow the fixed element to appear over other elements

5. What is the difference between a fixed and liquid layout?
  * Fixed layouts do not change size as the browser window changes size, but liquid layouts can stretch and contract when the browser window changes size
  * Fixed layouts are usually given in pixels, and liquid layouts are usually a percentage 
