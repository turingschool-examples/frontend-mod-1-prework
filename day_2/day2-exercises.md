# Day 2: HTML and CSS
  Answer these questions about the reading in your `day2-exercises.md` file:

  1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  * "ol" Ordered lists are lists where each item is numbered. Ie: a cookie recipe or build instructions
  * "ul" Unordered lists are lists that begin with a bullet point.
  * "dl" Definition lists are made up of a set of terms followed by their definition.

  2.  What is the basic structure of an element used to link to another website?
  * a href="URL">name of website</a
  * (Note: In the example above, I intentionally removed open and closing brackets to not run the code in md)

  3.  What attribute should you include in a link to open a new tab when the link is clicked?
  * A "target" attribute on the opening tag.  The value of the attribute should be underscore blank.
  * ie: "<a href="URL" target="underscoreblank"</a.>" (Note: I intentionally typed out underscore to not run the code in md)

  4.  How do you link to a specific part of the same page?
  * First you need to and id attribute to identify the points in the page that the link will go to.
  * Second to link to the element that uses an is attribute, you use a "a" element again with the addition of an href element, # symbol followed by the value of the id attribute.
    ie:  h1 id="top"
         a href="#top">Top</a
  * (Note: In the example above, I intentionally removed open and closing brackets to not run the code in md)


  Answer these questions about the reading in your `day2-exercises.md`:

  1.  What is the purpose of CSS?
  * The purpose of CSS is to allow you to specify how a page will look.  

  2.  What does CSS stand for? What does cascading mean in this case?
  * CSS = Cascading Style Sheets.  It essentially means the passing on of information.  In other words, the passing on of rules applied to elements, that make them appear a certain way, visually, on a page.

  3.  What is the basic structure of a CSS rule?
  * The basic structure includes two parts: a selector and a declaration.  The selector indicates which element the rule applies to.  The declaration indicates how the elements referred to in the selector should be styled.
  ie: p {font-family: Times;}  p is the selector and {font-family: Times;} is the declaration.

  4.  How do you link a CSS stylesheet to your HTML document?
  * First, it must be linked in the "head" element
  * The link will have 3 attributes:
    1. href = specifies the CSS path
    2. type = specifies the type of document being linked to  
    3. rel = specifies the relationship b/t the html page and the file it is linked to
  * The structure would look like this:  link href="css/styles.css" type="text/css" rel="stylesheet"
  * (Note: In the example above, I intentionally removed open and closing brackets to not run the code in md)

  5.  When is it useful to use external stylesheets as opposed to using internal CSS?
  * When building a site with more than one page.  

  6.  Describe what a color hex code is.
  * A hex code is a 6 digit code that represents the amount of red, green and blue in a color, preceded by a # sign.
  ie: #ee3e80

  7.  What are the three parts of an HSL color property?
  * Hue: which is expressed as an angle (b/t 0 and 360 degrees)
  * Saturation: is expressed as a percentage %
  * Lightness: is expressed as a percentage % as well. 0% = white 50% = normal 100% = black
  ie: hsl(0, 0%, 78%)   Note: they are separated by a comma in this order (hue, saturation, lightness)

  8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  * Serif = have extra details on the end of the main strokes
  * Sans-serif = have straight ends to the letters (cleaner design)
  * Monospace = Have fixed-width

  9.  When specifying font-size, what are the main three units used?
  * Pixels = allows precise control over how much space the text takes up.  (number of pixels is followed by the letters px)
  * Percentages = 16px is equivalent to 100%  which means double that 32px is = to 200%
  * EMS = is equivalent to the letter "m" of the parent element
