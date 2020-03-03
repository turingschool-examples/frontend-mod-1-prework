## Chapter 7 on Forms

### If you're using an input element in a form, what attribute controls the behavior of that input?
When using an input element in a form, the `type` attribute will determine what kind of input they will be creating.

### What element is used to create a dropdown list?
The `select` element is used to create dropdown lists, while the `option` element specifies what different options can be selected.

### If you're using an input element to send form data to a server, what should the `type` attribute be set to?
The `type` element should be set to `"submit"` when sending data to a server.

### What element is used to group similar form items together?
The `fieldset` element can be used to group form items together, most browsers will show these forms inside of a box. You can use CSS to style this container. The `legend` element can be used to create a title for the box of forms.

## Chapters 13 and 15 on Boxes and Layout

### Describe the differences between border, margin, and padding.
The border (whether visible or not) separates the edge of one box from another. The margin is the space outside of the edge of the border, which can be increased to create more space between boxes. Padding is the space inside the box between the border and the contents of the box. Adding padding can make the content more readable.

### For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box do each pixel value correspond to?
The standard for CSS rules is top, right, bottom, left. So 1px=top 2px=right 5px=bottom 10px=left

### Describe the difference between block-level and inline elements.
Block level elements take up the full width of the space available and always start on a new line. If you do not have a width set for your 'body' these elements will fill the entire browser page. Inline elements only take up as much width as necessary and do not start a new line. `<h1>`(all headers) and `<p>` are examples of block elements while `<img>` and `<b>` or `<i>` are good examples of inline elements. `<div>` can be used to group a set of elements into one block-level box, while `<span>` can be used to do the same thing with a number of inline elements.

### What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
Fixed-positioning positions the element in relation to the browser window, so that the element does not appear to move when the person scrolls up or down on the page. An example of this would be a large paywall banner on a news site, that covers the article text regardless of how you scroll. The z-index is important because it allows you to decide what element will be shown on "top" or in the front of the page. In my example this is important if you want to keep the paywall banner in front of the article text.

### What is the difference between a fixed and liquid layout?
A fixed layouts stay the same regardless of how the user manipulates the browser window, with measurements usually assigned to pixels. Liquid layouts stretch and change as the user manipulates the browser window. Liquid layouts use percentages to calculate how elements should appear on the page.
