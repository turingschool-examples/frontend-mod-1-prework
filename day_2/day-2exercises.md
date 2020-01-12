  1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  Ordered lists are lists that are numbered.  This could be steps in an instruction manual.  An unordered list is a list that starts with bullet points.  This might be a shopping list or list of chores.  Definition lists are made up of a list of words and their definitions.  Think dictionary or encyclopedia entries.

  2.  What is the basic structure of an element used to link to another website?
  `<a href='url_link'>Text in Document</a>`

  3.  What attribute should you include in a link to open a new tab when the link is clicked?
  You would use the `<target>` attribute.  This attribute's value should be `_blank`.  The structure of this would look like this: ```<a href='url_link' target=`_blank`>Text in Document</a>```
  4.  How do you link to a specific part of the same page?
  First you would need to use the id attribute to name the part of your page.  If I want to make a link to the top of my page I would set the value of the id attribute to "top".  Then in my anchor, it would read something like this: `<a href="#top">Top of page</a>`

  1.  What is the purpose of CSS?
  The purpose of CSS is to style the HTML.  Examples include typeface, font color, box dimensions, and more.

  2.  What does CSS stand for? What does cascading mean in this case?
  Cascading Style Sheets.  The cascade refers to rules falling (cascading) to the next style sheet and which rules take precedence over the others.

  3.  What is the basic structure of a CSS rule?
  Basic CSS structure looks like this: `selector{declaration}` where the selector is the element in the HTML document and the declaration is how the selector should be styled.

  4.  How do you link a CSS stylesheet to your HTML document?
  You create a link in the HTML document using the `<link>` element, an empty element that resides in the `<head>` element.  This element has three attributes and it looks can like this: `<link href="css/styles.css" type="text/css" rel="stylesheet">`

  5.  When is it useful to use external stylesheets as opposed to using interal CSS?
  Using external stylesheets is useful in websites with multiple pages.  This way, the rules will apply to all pages and the developer doesn't have to repeat the CSS on every page.  This makes for cleaner HTML as well.

  6.  Describe what a color hex code is.
  A hex code is used to identify a specific color.  
  The code refers to red, green, and blue in hexidecimal code.

  7.  What are the three parts of an HSL color property?
  Hue, saturation, and lightness.  Hue refers to the color.  Saturation refers to the amount of grey in that color.  And lightness is the amount of white or black in the color.  

  8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  Serif, sans-serif, and monospace.  Serif typefaces have more detail associated with them, adding "strokes" to the letters.  Sans-serif has no additional detailing and results in more square ends of each letter.  Monospace means that each letter takes up the same amount of space in a word, as if contained by the same sized box.

  9.  When specifying font-size, what are the main three units used?
  Pixels, percentages, and ems.  Pixels are how many pixels the letter takes up on a screen.  Percentages refer to the size relative to the percent of a standard letter size (16px).  And ems is the equivalent of the width of the letter M.
