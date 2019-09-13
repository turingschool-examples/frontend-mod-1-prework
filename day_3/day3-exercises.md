Chapter 7

If you're using an input element in a form, what attribute controls the behavior of that input?

- The type attribute determines the behavior of the input.

What element is used to create a dropdown list?

- The select element creates a dropdown

If you're using an input element to send form data to a server, what should the type attribute be set to?

- The submit type will create a button to submit the form data to the server

What element is used to group similar form items together?

- The fieldset element is used to group form items together. You can also use the legent element to add a descriptive header to the fieldset, such as Contact Info for a form section containing address, email, phone, etc.


Chapter 13, 15

Describe the differences between border, margin, and padding.

- Border can be imagined as the outline of the content box. Padding is the amount of space between the actual content and the border. Margin is the amount of space surrounding the border from one margin to the next.

For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

- Top: 1px, Right: 2px, Bottom: 5px, Left: 10px

Describe the difference between block-level and inline elements.

- Block level elements create a new box/container of contents. Essentially they create a new line by default, and will have a border, margin, and padding. Inline elements are displayed inside a single container and wont have a line separation. They will be inside the same border, margin, and padding box.

What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

- Fixed positioning forces a container to an absolute or relative position. This makes it so that scrolling will keep content to a specified position. Z-index changes front to back how items are displayed. This is important for fixed positioning as the z-index will inform the browser what content should be on top and what should be behind. An example of this is a static navigation header bar at the top. With the z-index set to 20, the header will always be on top of all content with a z-index less than 20.

What is the difference between a fixed and liquid layout?

- Fixed layout means the content layout has been specifically sized and placed, generally with pixels as the size dimension. Liquid layout means that content is dynamic to window size, with dimensions set as percentages. Content will also stack with a liquid layout when the window size gets small enough.
