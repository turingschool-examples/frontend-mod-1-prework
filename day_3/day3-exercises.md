## If you're using an input element in a form, what attribute controls the behavior of that input?
  When using an input element in a form the 'name' attribute controls the behavior of the input. When data is entered into the form by a user the servers need to know which form control each piece of data was entered into.
- EXAMPLE: `<select name="Cars"></select>`

## What element is used to create a dropdown list?
  The select element is used to create a dropdown list.
  EXAMPLE: `<select name="cars">
              <option value="Mustang">Mustang</option>
              <option value='Corvette'>Corvette</option>
              <option value='Charger'>Charger</option>
            </select>`
    - Select was used to create a dropdown list. `Cars` is the name given to the `select` element. `<option>` element is used to specify the option given to the user, the words like "mustang, corvette and charger" that are written in between the `<option>` element will appear to the user as choices. The `value=""` element used, is to indicate the value sent to the server.  

## If you're using an input element to send form data to a server, what should the type attribute be set to?
  The `type=""` attribute should be set to what ever the input element type you are using calls for. So if you are using a 'file input box' the type attribute called for is `type="file"`. Or for instance a 'image button' the `type=""` called for is the 'image': `type="image"`.

## What element is used to group similar form items together?
  With the element ``<fieldset>`` we are able to group similar forms together.
  EXAMPLE: `<fieldset>
            <legend> Contact Information </legend>
            <label>Email:<br />
            <input type="text" name="email" /><label><br />
            <label>mobile<br />
            <input type="txt" name="mobile" /></label><br />
            <label>home phone<br />
            <input type="txt" name="home_phone" /><label>
           </fieldset>`

## Describe the differences between border, margin, and padding.
  - border: Every box has a border. Even if it was instructed to have a 0px. It separates the margin and the padding.
  - Margin: Sits outside the edge of the border. This is used to create space in between different borders.
  - Padding: Is the area between the actual content of the box and the border of the box itself.

## For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?
  - 1px: top-padding
  - 2px: right-padding
  - 5px: bottom-Padding
  - 10px: left-padding

## Describe the difference between block-level and inline elements.
  - Block: Is any element that starts on a new line lake a paragraph <p> and uses the full width of the page. or container.
  - Inline: Can take up one line or multiple lines and will have a line break before and after the element.
  - Inline-block: Causes a block-level element to flow like an inline while retaining other features of a block-level element.

## What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
  When we as developers are using fixed positioning it is important to know how to implement z-index. Z-index allows us to control what box appears on top. Also elements that have a fixed position do not effect the position of surrounding elements. When complimented with z-index there leaves a lot of room for customization.

## What is the difference between a fixed and liquid layout?
  - Fixed: These types of layouts do not change size as the user increases or decreases the size of their browser window. This layout is usually given in pixels.
  - Liquid: These types of layout designs stretch and contract as the user increases and decreases the size of the window.This layout is usually given in %.
