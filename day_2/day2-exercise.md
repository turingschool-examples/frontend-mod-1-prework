1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
A: Ordered are lists where each item on the list is ordered. Unordered lists are lists that begin with bullet points and don't indicate order. And definition lists are made up of a set of terms and definitions for those terms.

2.  What is the basic structure of an element used to link to another website?
A: `<a href="page you want to link to">clickable text</a>`

3.  What attribute should you include in a link to open a new tab when the link is clicked?
A: In the opening `<a>` tag you use target and the value should be underscore blank.

4.  How do you link to a specific part of the same page?
A: In order to link to a specific part of the page you have to identify the points in the page that the link will go to with the id attribute. then you use `<a>` element to link the id attribute, the value of the href starts with # followed by the value of the id attribute of the element you want to link to.

1.  What is the purpose of CSS?
A: CSS allows you to make rules that specify how the content of an element should appear.

2.  What does CSS stand for? What does cascading mean in this case?

3.  What is the basic structure of a CSS rule?
A: Basic structure is made up of selectors and declarations. Selectors indicate witch element the rule is applied to and declarations indicate how the elements will be styled. The declaration is made up of property and values. Properties indicate the aspects you want to change and values specify how you want to change the chosen properties. It looks like:
`p {
  font-family: Arial;}
  }`

4.  How do you link a CSS stylesheet to your HTML document?
A: You link the CSS style sheet by using the `<link>` element inside the `<head>` element. It should have three elements href - specifies path, type - type of document being linked, rel - relationship between HTML and the file being linked. Looks like `<link href="css/styles.css" type="text/css" rel="stylesheet" />`

5.  When is it useful to use external stylesheets as opposed to using internal CSS?
A: External stylesheets are useful when you are building a site with more then one page.

6.  Describe what a color hex code is.
A: These are six digit codes that represent the amount of red, green, and blue in a color, preceded by a pound or hash sign.

7.  What are the three parts of an HSL color property?
A: The three parts are hue, saturation, lightness

8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
A: The three main categories of typeface are serif - extra details on the ends of the main strokes of the letters, sans-serif - have strait ends to letters, and monospace - every letter is the same width.
9.  When specifying font-size, what are the main three units used?
A: The three main units used are pixels, percentages, and EMS
