# Day 2 Exercises

## Chapter 3 and 4 Questions and Answers
1) There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
* Answer: An ordered list is where each item in the list is numbered.  An unordered list is where each item in the list is not numbered, but rather bullet pointed.  A definition list has terms, followed by indented definitions.  There are no numbers or bullet points on definition lists.

2)  What is the basic structure of an element used to link to another website?
* Answer: ``<a href="place actual URL here">This text will show on the webpage and be clickable</a>``

3)  What attribute should you include in a link to open a new tab when the link is clicked?
* Answer: ```target="_blank"``` should be included right after the URL and inside of the initial bracket

4)  How do you link to a specific part of the same page?
* First, you need to give the specific target element on the page an ID, named inside of of the first tag.
    * Ex: ```<h2 id="bottom">```
* Next, now you can create a link at the top (or anywhere on the page) to that specific element by using the a href tags.
    * Ex: The code ```<a href = "bottom">Bottom</a>``` will link to that named ID.

## Chapter 10, 11, and 12 Questions and Answers
1) What is the purpose of CSS?
* Answer: CSS is the platform for code that enhances how elements inside of an HTML page should appear.  CSS sets the atmosphere, style, and feeling of a website.

2) What does CSS stand for? What does cascading mean in this case?
* Answer: CSS is the abbreviation for cascading style sheets.  The cascading in this case means that more than one rule or selector in CSS can be written for an HTML element and the code will 'cascade' down, meaning the last code, or more specific selector will take precedence.

3) What is the basic structure of a CSS rule?
* Answer: The basic structure is: Selector {Declaration}.  Here's a basic structure example: 'p {color: yellow;}' The P is the selector, and the 'color: yellow;' is the declaration.  Within the declaration, there is a property and a value.  In this example, the property is 'color' and the value is 'yellow'.

4) How do you link a CSS stylesheet to your HTML document?
* Answer: In the HTML `<head>` section, the following line of code is used to link the CSS sheet: ``<link type="text/css" rel="stylesheet" href="css/mystylesheet.css"/>`` The type needs to be "text.css", the relationship, or 'rel' should have a value of 'stylesheet' and the `href=` should link the CSS file name and location. The location of the CSS file is usually in a separate sub folder with all of the HTML documents. (**note**: in the example, 'mystylesheet' is a random name)

5) When is it useful to use external stylesheets as opposed to using internal CSS?
* Answer:  When your website has multiple pages to it and you want them all to look uniform, using an external link CSS sheet is better because you only need to change the code on the CSS sheet to change the elements of all of the webpages.  As long as each page is linked to the CSS sheet, you'll be fine.  Also, an HTML page can use more than one style sheet so using an external link to each sheet makes it easier to control different parts of the CSS.   

6) Describe what a color hex code is.
* Answer: A hex code is a 6 digit code(alpha and numeric) that represents values for red, green, and blue in any color.  Hex codes for colors are more precise and writing a specific color and hex codes provide for more color options.

7) What are the three parts of an HSL color property?
* Answer: Hue: expressed an angle between 0-360 degrees.  Saturation: expressed as a %.  Lightness: Expressed as percentage, with 0% being white, 50% normal, and 100% black.

8) In the world of typeface, what are the three main categories of fonts? What are the differences between them?
* Answer: The three main categories of fonts and their descriptions are:
  * Serif: good for long passages of text with extra details on the ends of the main strokes.
  * Sans-Serif: good for small text to make clearer to read with straight ends to letters.
  * Monospace: Aligns well, making it common for code because each font is the same width.

9) When specifying font-size, what are the main three units used?
* Answer: Pixels, Percentages, and EMS (one em is equivalent to the letter m).


[CodePen Website Link Day 2](https://codepen.io/nickstaylor/pen/JjoLGrQ)
