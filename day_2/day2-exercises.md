Chapter 3 & 4 questions

1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  Ordered lists are lists where each item is numbered.
  Unordered lists are lists where each item is marked with bullet points. Definition lists consist of sets of terms with a definition for each.
2.  What is the basic structure of an element used to link to another website?
  <a href='link-to-some-website'> Link Text </a>
3.  What attribute should you include in a link to open a new tab when the link is clicked?
  href
4.  How do you link to a specific part of the same page?
  <h1 id='Title'> Big Title </h1>
  You can link to a specific part of the same page by using the id of an element as the value of the href element in a link starting with an octothorp.
  <a href="#title">Top</a>

Chapter 10, 11 & 12 questions

1.  What is the purpose of CSS?
  CSS allows you to create rules that style the content of elements
2.  What does CSS stand for? What does cascading mean in this case?
  cascading stylesheet
  In this context, cascading means that multiple stylesheets can be used on the same html document with a hierarchy of importance that decides which conflicting style takes precedence.
3.  What is the basic structure of a CSS rule?
  A CSS rule consists of a selector that and declarations.
  h1 {
    font-family: Arial;
    color: yellow;
  }
4.  How do you link a CSS stylesheet to your HTML document?
  You link a stylesheet to an HTML page with the link element.
  <link href="css/styles.css" type="text/css" rel="stylesheet" />
5.  When is it useful to use external stylesheets as opposed to using interal CSS?
  Using external stylesheets is useful for multipage websites where one style can apply to multiple elements and that style for a larger group of elements can be easily changed. An external stylesheet also keeps the content separate from the styles so it's less cluttered.
6.  Describe what a color hex code is.
  A hex code is a set of three hexadecimal values that represent the amount of red, green and blue a color is made of
7.  What are the three parts of an HSL color property?
  Hue, saturation and Lightness
8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  Serif has details at the end of each stroke while Sans-Serif has straight ends to letters. Every letter in Monospace has the same width.
9.  When specifiying font-size, what are the main three units used?
  pixels, percentage and ems which is equivalent to the width of an m.
