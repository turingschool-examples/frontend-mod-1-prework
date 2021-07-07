# Part One #

##  If you're using an input element in a form, what attribute controls the behavior of that input? ##
  **~~Text~~, Name, Size, & Maxlength**
  ~~When the type attribute has a value of text, it creates a single line text input.~~
  
  Name attributes identify the form control and is sent along with the information they enter to the server.
  
  Size attribute indicates the width of the text input, measured by the number of characters that would be seen.
  
  Maxlength attribute limits the number of characters a user may enter into the text field. Its value is the max number of allowed characters.

##  What element is used to create a dropdown list? ##
  The `<select>` element is used to create a drop down list box. It contains two or more `<option>` elements.
  ```
  <select name="coffee">
    <option value="latte"> Latte </option>
    <option value="americano"> Americano </option>
    <option value="nitro_cold_brew"> Nitro Cold Brew </option>
    <option value="espresso"> Espresso </option>
  </select>
  ```

##  If you're using an input element to send form data to a server, what should the `type` attribute be set to? ##
  Type="submit"

##  What element is used to group similar form items together? ##
`<fieldset>` element groups similar forms together. A `<legend>` element can come directly after the opening fiedset tag and contains a caption which helps identify the purpose of that group of form controls.

# Part Two #

## Describe the differences between border, margin, and padding. ##
**Border** is on every box, even if it is not visible or specified. The border separates the edge of one box to another.

**Margin** sit outside the edge of the border. You can set the width of a margin to create a gap between the borders of two adjacent boxes.

**Padding** is the space between the border of a box and any content contained within it. Adding padding can increase the readability of its contents.

## For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to? ##
  The order of values when specifying different widths for the four borders goes top, right, bottom, left; clockwise.

## Describe the difference between block-level and inline elements. ##
  Inline elements sit alongside each other, in the same line. Block-level elements appear on new lines. In many cases margins can be added to block level to seperate them out even further visually.

## What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning? ##
  Fixed is a dorm of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element. Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrolls up or down the page. The element requires a position with a fixed value.
  
  The z-index has a numerical value, and the higher the number the closer that element is to the front. For example 10 would come in front of 5. The z-index is sometimes referred to as the stacking context, as if blocks have been stacked on top of each other.

## What is the difference between a fixed and liquid layout? ##
  **Fixed Width Layout** designs do not change size as the user increases the size of their browser window. Measurements tend to be given in pixels.
  
  **Liquid Layout** designs stretch and contract as the user increases or decreases the size of their browser window. They tend to use percentages. Useful when transferring web page from desktop, to ipad, to mobile. zs
