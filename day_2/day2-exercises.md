# Day 2: HTML and CSS
  Answer these questions about the reading in your `day2-exercises.md` file:

  1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  1.1 <ol> Ordered lists are lists where each item is numbered Ie: a cookie recipe or build instructions
  1.2 <ul> Unordered lists are lists that begin with a bullet point
  1.3 <dl> Definition lists are made up of a set of terms followed by their definition

  2.  What is the basic structure of an element used to link to another website?
  2.1 <a href="http://www.google.com">Google</a>

  3.  What attribute should you include in a link to open a new tab when the link is clicked?
  3.1 A target attribute on the opening tag.  
      ie: <a href="http://www.google.com" target="_blank">Google</a> (opens a new window)

  4.  How do you link to a specific part of the same page?
  4.1 First you need to and id attribute to identify the points in the page that the link will go to.
  4.2 Second to link to the element that uses an is attribute, you use a <a> element again with the addition of an href element, # symbol followed by the value of the id attribute.
    ie:  <h1 id="top">
         <a href="#top">Top</a>


  Answer these questions about the reading in your `day2-exercises.md`:

  1.  What is the purpose of CSS?
  1.1 The purpose of CSS is to allow you to specify how a page will look.  

  2.  What does CSS stand for? What does cascading mean in this case?
  2.1 CSS = Cascading Style Sheets.  It essentially means the passing on of information.  In other words, the passing on of rules applied to elements, that make them appear a certain way, visually, on a page.

  3.  What is the basic structure of a CSS rule?
  3.1 The basic structure includes two parts: a selector and a declaration.  The selector indicates which element the rule applies to.  The declaration indicates how the elements referred to in the selector should be styled.
  ie: p {font-family: Times;}  p is the selector and {faont-family: Times;} is the declaration.

  4.  How do you link a CSS stylesheet to your HTML document?
  4.1 First, it must be linked in the <head> element
  4.2 The link will have 3 attributes: 1. href = specifies the CSS path 2. type = specifies the type of document being linked to  3. rel = specifies the relationship b/t the html page and the file it is linked to.
  4.3 The structure would look like this:  <link href="css/styles.css" type="text/css" rel="stylesheet" />

  5.  When is it useful to use external stylesheets as opposed to using interal CSS?
  5.1 When building a site with more than one page.  

  6.  Describe what a color hex code is.
  6.1 A hex code is a 6 digit code that represents the amount of red, green and blue in a color, preceded by a # sign.
  ie: #ee3e80

  7.  What are the three parts of an HSL color property?
  7.1 Hue: which is expressed as an angle (b/t 0 and 360 degrees)
  7.2 Saturation: is expressed as a percentage %
  7.3 Lightness: is expressed as a percentage % as well. 0% = white 50% = normal 100% = black
  ie: hsl(0, 0%, 78%)   Note: they are separated by a comma in this order (hue, saturation, lightness)

  8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  8.1 Serif = have extra details on the end of the main strokes
  8.2 Sans-serif = have straight ends to the letters (cleaner design)
  8.3 Monospace = Have fixed-width

  9.  When specifiying font-size, what are the main three units used?
  9.1 Pixels = allows precise control over how much space the text takes up.  (number of pixels is followed by the letters px)
  9.2 Percentages = 16px is equivalent to 100%  which means double that 32px is = to 200%
  9.3 EMS = is equivalent to the letter "m" of the parent element
