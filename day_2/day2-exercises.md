1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
An ordered list has a numbered and specific order such as a list of steps to follow like a baking directions an unordered list will typically display in some form of a bulleted list where items are listed but not set in any particular order. A definitions list as its name implies gives a list of words in a listed structure that gives the word followed by the definition of the word in a readable format.
2.  What is the basic structure of an element used to link to another website?
<a href="urlhere">Click me</a>
3.  What attribute should you include in a link to open a new tab when the link is clicked?
<a href="urlhere" target="_blank"> click me</a> (opens a new window)
4.  How do you link to a specific part of the same page?
<a href="urlhere#bottom">Click me<a/>

With the page you created in CodePen on Day 1 (that included Structure and Text), add to it:

*   Two lists: ordered and unordered.
*   A link to your GitHub account.
*   A link to the Turing website.

## Read Chapters 10, 11, and 12 on What is CSS, Color, and Text from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Answer these questions about the reading in your `day2-exercises.md`:

1.  What is the purpose of CSS?
CSS is able to visually change the look of any element in HTML if there is a large header that needs to be presented in a certain color with a certain level of indentation that is done in CSS.
2.  What does CSS stand for? What does cascading mean in this case?
Cascading Style Sheet. Cascading in this instance means that styles can cascade or continue from one page or document to the next.
3.  What is the basic structure of a CSS rule?
body {
  font-family: Arial, Verdana, sans-serif;}
4.  How do you link a CSS stylesheet to your HTML document?
<head>
<link href="css/styles.css" type="text/css" rel="stylesheet" />
</head>
5.  When is it useful to use external stylesheets as opposed to using internal CSS?
External stylesheets is best used when a website is using or planning on using more than one page. This allows for easy cascading of style rather than having to write out CSS assignments for each individual page.
6.  Describe what a color hex code is.
a hex code is a 6 digit that represents the amount of red green or blue is being used on an object.
7.  What are the three parts of an HSL color property?
Hue, Saturation and Lightness
8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
Serif- have many extra details added onto the ends of letters.
Sans-serif- Straight ends to letters that have a much cleaner design.
Monospace- every letter takes up the same amount of space. Good for working environment so that text can line up neatly. 
9.  When specifying font-size, what are the main three units used?
pixels, percentages, ems
