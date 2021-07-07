**Chapter 7: Forms**

1. If you're using an input element in a form, what attribute controls the behavior of that input?

 The `type` attribute controls the behavior of that input. You can set it to either text, password, textarea, radio or checkbox.

1. What element is used to create a dropdown list?

  The `<select>` element is used to create a drop down list box.

1. If you're using an input element to send a* form data to a server, what should the type attribute be set to?

  The type attribute should be set to `type="submit"` in order to submit forms to a server.

1. What element is used to group similar form items together?

  The `<fieldset>` element can group related form controls together.


  **Chapter 13 & 15: Boxes and Layout**

1. Describe the differences between border, margin, and padding.

  Let's start from what is closest to the content and move outward:

  1. Padding is the space the space between the content and the border. Adding padding can increase readibility.

  1. Border is the edge of the box in CSS. It will be represented by a visual line when it has a value.

  1. Margin is the amount of space between one boxes border and that of another adjacent box in CSS.

1. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

  Top - 1px

  Right - 2px

  Bottom - 5px

  Left - 10px

1. Describe the difference between block-level and inline elements.

  Inline elements appear on the same line left to right, and are subject to the browser's default inline processing. You will likely not be able to change properties such as height for these elements unless you set the `display` property to `inline-block`.

  Blocks elements appear on a new line, such as `<p>`, and will create a block around the element to hold it. They are much more customizable when it comes to styling properties and are stacked vertically by default.


1. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

  Fixed positioning permanently positions the element in relation to the browser window. Meaning that is the user scrolls it will always stay in the exact same location within the window. I think this would be useful for menu bars and headers.

  The z-index property is important when using fixed positioning due to the possibility of boxes overlapping. In the event of overlap, you can control which box appears above the other by assigning it a z-index higher than that of the other.

1. What is the difference between a fixed and liquid layout?

  In a fixed layout, designs do not change size as the user increases or decreases  the size of their browser window. Measurements for boxes tend to be given in pixels.

  In a liquid layout, designs do change as the user modifies the size of their browser window. Measurements for boxes here, tend to be given in either percentages or em's.
