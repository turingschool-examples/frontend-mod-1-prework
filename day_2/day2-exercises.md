1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

Ordered- Each individual item on the list is assigned to a number, aka a numbered list. This is helpful for making a list in which you need to dictate a sequence of events (as in creating a list for steps to bake a cake).
Unordered- Lists that begin with bullet point, in this case the order in which you assemble the items isn't as important. Just as long as each ingredient is added.
Definition- Similar to this list explaining the answer. Ordered, unordered, and definition are the terms, and each term has a description for each element.

2. What is the basic structure of an element used to link to another website?

```<a href="example website url">Title of website</a>```

3. What attribute should you include in a link to open a new tab when the link is clicked?

href= " ". Inserting the url within the quotation marks will send the user to the website specified when clicked.

4. How do you link to a specific part of the same page?

To link to a specific part of the page <b>(that is already defined)</b>, you can just use the relative url. For example, if you have a page (http://www.example.org) with multiple files located within (.../example1.html, example2.html, example3.html) you can simply type ```<a href="example2.html"></a>``` in the code to navigate to an exact part of the page when clicked.

5. What is the purpose of CSS?

CSS adds personality to a website. By using CSS a coder can change font types, text and background colors, and much more!

6. What does CSS stand for? What does cascading mean in this case?

Cascading Style Sheets. Cascading means how and in what order the defined rules are applied. The last specified rule, the most specific, and rules notated as important influence how a code will be read when there are potentially overlapping codes.

7. What is the basic structure of a CSS rule?

A CSS rule will have 2 basic elements: A selector, which is a defined element you will be applying a rule to, and a declaration, which is what you will be doing to the element (change size, color, font, etc.).

8. How do you link a CSS stylesheet to your HTML document?

By using the ```<link>``` command. An example of a linked CSS stylesheet could look like ```<link href="css/styles.css" type="text/css" rel="stylesheet" />```. This has 3 parts; the href tells where to grab the information from, type describes the category that is being linked, and rel defines how HTML interacts with the link.

9. When is it useful to use external stylesheets as opposed to using interal CSS?

External stylesheets are ultimately more efficient. You can use a single definition across multiple pages instead of defining them individually, visually it looks better in the code by clearly separating the code, then if you need to make slight alterations internal CSS can always be inserted on its own. This can make it easier to visually notice individual changes in code.

10. Describe what a color hex code is.

Begins with a #, this 6 digit code defines the amount of red, green, and blue the desired color should incorporate. By combining different elements, and strengths of the elements, coders can create a whole spectrum of colors.

11. What are the three parts of an HSL color property?

Hue- The specified color selected from a color circle. You can define the color by selecting a number between 0 and 360, the return value of the color will be the degree on the circle.

Saturation- How much gray is incorporated in a color, described as a percentage between 0 and 100.

Lightness- How much white or black is incorporated, described as a percentage between 0 (darkest) and 100 (lightest).

12. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

Serif- Very common font (think Times New Roman) characterized by their extra details. Most books have this type of font since it is easier to read.

Sans-Serif- Similar to serif without the extra details (hence the name), easier to read on lower resolutions or smaller screens.

Monospace- Each individual character has the same width. The text that I am typing this in atom would be a monospace font.

13. When specifiying font-size, what are the main three units used?

Pixels- Specifying exactly how large or small a a font should be when appearing on a browser.

Percentages- Size of font based on the default size of 16px. For example, if you defined the size as 50%, it would alter the font size to 8px.

EMS- Amending font size by using the width of the letter 'm' as the template.
