## Day 2 Exercises


1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  - `<ol>` Ordered lists are sequential and are used to describe steps in a particular order.
  - `<ul>` Unordered lists are usually displayed as bullet points and their order is usually less important than ordered lists, i.e. you would likely not encounter any issues by changing their order.
  - `<dl>` Definition lists are used to show a term `<dt>` and then define it using `<dd>`
2.  What is the basic structure of an element used to link to another website?
  - `<a href="hyperlink.com">Text to display.</a>`
3.  What attribute should you include in a link to open a new tab when the link is clicked?
  - *target="_blank"* `<a href="hyperlink.com" target="_blank">Text to display.</a>`
4.  How do you link to a specific part of the same page?
  - Set the `id="section_name"` attribute for a section of your web page and you can then use `<a href="#section_name">` to link to it.

1.  What is the purpose of CSS? It changes the appearance of a webpage as opposed to its content.
2.  What does CSS stand for? What does cascading mean in this case?
  - Cascading Style Sheet. Cascading refers to the order in which rules are applied.
3.  What is the basic structure of a CSS rule?
  - `p {
    font-family: arial;
  }`

  In this case the *selector* p indicates that we will be modifying the paragraph element, and the *declaration* "font-family: arial;" makes the modification. Now all text within `<p>` elements will display in Arial font.
4.  How do you link a CSS stylesheet to your HTML document?
  - Insert a line of HTML in the Head element that shows the filepath to the CSS stylesheet.
5.  When is it useful to use external stylesheets as opposed to using internal CSS?
  - Almost always, unless the CSS is really simple. External stylesheets are helpful for organization and allow you to make changes that affect multiple pages at once.
6.  Describe what a color hex code is.
  - Hex codes use numbers and letters to define the amount of red, yellow, and blue in a color. These are used to create cpecifc colors.
7.  What are the three parts of an HSL color property?
  - Hue, Saturation, and Lightness.
8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  - serif: These fonts have decorative details on the ends of letters
  - sans-serif: These fonts do not have the tiny serif details and are therefore better suited to small screen applications.
  - monotype: Fonts in these families have a fixed width for all letters, meaning that they have equal spacing for smaller or larger letters.
9.  When specifying font-size, what are the main three units used?
  1. Pixels
  1. Percentages
  1. Ems
