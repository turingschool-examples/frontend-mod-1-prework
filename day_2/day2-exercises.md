1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  Ordered lists have numerical numbers preceding them usually for listing steps in a tutorial or question numbers in a quiz. Browsers usually indent these.
  Unordered lists are indented items with bullet points.
  Definition lists have terms and then a definition indented below that line. A separate ID is given to the term & the definition.
2.  What is the basic structure of an element used to link to another website?
  * Opening element, with absolute address to desired webpage in quotes
  * Text that will be what the user clicks on
  * Closing element
  e.g. `<a href = "website.com">Website link here</a>`
3.  What attribute should you include in a link to open a new tab when the link is clicked?
  Include `target="_blank"` right after the link to the website.
4.  How do you link to a specific part of the same page?
  First, define a section of the website you'd like to link. This is done by adding `id="sectionTitle"` to the tag of that section. You then reference this by creating a link that points to that part you defined. e.g. <a href = #"sectionTitle">Go to section</a>

  ---

  1.  What is the purpose of CSS?
    CSS is used to style how the HTML contents of the page look.
  2.  What does CSS stand for? What does cascading mean in this case?
    CSS = Cascading Style Sheet. Cascading refers to the way you can overwrite rules written at a higher 'parent' level by modifying the 'child' with its own rule. You can even write 2 rules for the same element, and the lattermost rule will take effect (unless the browser isn't capable of displaying that rule, in which case it will default the the 1st rule).
  3.  What is the basic structure of a CSS rule?
    CSS rules are comprised of a selector and a declaration. The selector indicates which elements this rule should apply to, and the declaration indicates the style it should adapt.
  4.  How do you link a CSS stylesheet to your HTML document?
    Use the <link> element and indicate
    1. where the CSS file is located using href,
    2. what type of file it is using type,
    3. and what the relationship to the HTML document it has using rel.
  5.  When is it useful to use external stylesheets as opposed to using internal CSS?
    When you have more than one page, you should use external stylesheets so you can update multiple pages at once if you want to change a style. It also keeps your code cleaner by separating the content and styles, and every page uses the same style instead of repeating the same code on every page.
  6.  Describe what a color hex code is.
    A color hex code is a series of 6 characters that specify a specific color. It uses a combination of RGB values to indicate which color to use.
  7.  What are the three parts of an HSL color property?
    Hue (the color range), Saturation (how intense the color is), and lightness (how close to white the color is)
  8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
    Serif, sans serif, and monospace. Serif uses extra details on the ends of the strokes. Sans serif subtracts these details, which typically make it easier to read on low resolution screens. Monospace fonts have uniform spacing between all the letters which makes them ideal for coding, as the letters will always align.
  9.  When specifying font-size, what are the main three units used?
    You can use px/pixels, percentages, and em.
