## Read Chapter 7 on Forms from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Answer these questions about the reading in your `day3-exercises.md` file:

1.  If you're using an input element in a form, what attribute controls the behavior of that input?

  - <type> attribute

2.  What element is used to create a dropdown list?

  - two or more <option></option> elements with corresponding value attributes, all within a <select></select> element using a name attribute


3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?

  - <input type="submit" />

4.  What element is used to group similar form items together?

  - <fieldset></fieldset> element

## Read Chapters 13 and 15 on Boxes and Layout from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Answer these questions about the reading in your `day3-exercises.md` file:

1.  Describe the differences between border, margin, and padding.

  - Borders separate the edges of one box from another
  - Margins are just outside the borders, margins are used to create space between the borders of two boxes next to each other
  - Padding is just inside the border, it's the space between a box's border and anything contained inside that box.  (Increasing the padding can increase readability of the contents)

2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?

  - Shorthand goes in clockwise order, beginning at the top
    - 1px: top
    - 2px: right
    - 5px: bottom
    - 10px: left

3.  Describe the difference between block-level and inline elements.

  - inline elements sit along side each other as opposed to block-level elements which would appear each on their own inline

4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

  - positions an element in relation to the browser window, rather than the containing element.

  - The z-index is a property that gives you control over what appears on top.  As a user scrolls through a site, elements with a fixed positioning do not move so elements that are not fixed have to either flow around, or exist above or below as they pass.

5.  What is the difference between a fixed and liquid layout?

  - Fixed layouts do not change size as the user minimizes or maximizes their browser window.  

  - Liquid layouts adjust with the user when the  size of the browser window is changed
