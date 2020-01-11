# Chapter 7 Answers

1.  If you're using an input element in a form, what attribute controls the behavior of that input?
      * The type attribute controls the behavior of the `<input>` element.
        * type="text" creates a single-line text input
        * type="password" creates a single-line text input, except the characters are blocked out
        * type="radio" creates radio buttons for the user to pick one of a number of options
        * type="checkbox" creates checkboxes for the user to select (and unselect) one or more options in answer to a question
        * type="file" allows users to upload a file
        * type="submit" creates a submit button to send a form to the server
        * type="image" allows you to use an image for the submit button/give the *type* attribute a value of *image*
        * And so many more!

2.  What element is used to create a dropdown list?
      * `<select>` element allows users to select one option from a drop down list and contains two or more `<option>` elements

3.  If you're using an input element to send form data to a server, what should the type attribute be set to?
      * type="submit" creates a submit button to send a form to the server

4.  What element is used to group similar form items together?
      * `<fieldset>` can group related form controls together
        * `<legend>` element can come directly after the opening `<fieldset>` tag and contains a caption that identifies the purpose of the group

# Chapter 13/15 Answers

1.  Describe the differences between border, margin, and padding.
      * Border separates the edge of one box from another
      * Margin sit outside the edge of the border
      * Padding is the space between the border of a box and any content contained within it

2.  For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
      * Top: 1px
      * Right: 2px
      * Bottom: 5px
      * Left: 10px

3.  Describe the difference between block-level and inline elements.
      * Block-level elements start on a new line
      * Inline elements sit alongside each other, rather than appearing on new lines like block-level elements

4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
      * Fixed positioning is a form of absolute positioning/positions the element in relation to the browser window/elements with fixed positioning do not affect the position of surrounding elements and they don't move when the user scrolls up or down the page
      * When you move any element from the normal flow, boxes can overlap/the z-index property allows you to control which box appears on top/controls how far “back” or how far “forward” an element should appear on the web page when elements overlap
        * Its value is a number/the higher the number the closer that element is to the front

5.  What is the difference between a fixed and liquid layout?
      * Fixed width layout designs don't change size as the user increases or decreases the size of their browser window (tend to be in pixels)
      * Liquid layout designs stretch and contract as the user increases or decreases the size of their browser window (tend to be in percentages)
