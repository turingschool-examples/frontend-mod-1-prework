**Chapters 3 and 4**


1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

  * **Ordered** lists are a list where each item is numbered. **Unordered** lists begin with bullet point. **Definition** lists are made up of a set of terms along with its definition.

2. What is the basic structure of an element used to link to another website?

  * The structure used to link to another website is:
  <li><a (url link for site)>
  <Name of site></a></li>

3. What attribute should you include in a link to open a new tab when the link is clicked?

  * The attribute you would use is the *target* attribute. Which does have a value of *_blank*.

  In code it would look like:
  <a href="http://www.google.com" target="_ blank">


(I added a space between the underscore and the word "blank" because it kept italicizing everything, but there should not be a space in between.)


4. How do you link to a specific part of the same page?

  * In order to link to a specific part of the same page, you need to use the *id* attribute.
  For example, if you wanted to create a table of contents with links to its corresponding section, you would use:

  <a href="#prologue">Prologue</a><br />

  and then it would be followed with:

  <h2 id="prologue">Prologue</h2>

  Which would be the section that it is linked with.

**Chapters 10, 11, and 12**

1. What is the purpose of CSS?

  * The purpose of CSS is to create rules that specify how the content of an element should appear.

2. What does CSS stand for? What does cascading mean in this case?

  * CSS stands for cascading style sheets.
  * Cascading in this case means that you can write simpler style sheets because you can create generic rules that apply to most elements and then override the properties on individual elements that need to appear differently


3. What is the basic structure of a CSS rule?

  * The basic structure of a rule consists of two pars. the first is a selector and the second is a declaration.

  ex. <p>{font-family: Arial;}

  the <P> represents the selector and {font-family: Arial;} represents the declaration.

4. How do you link a CSS stylesheet to your HTML document?

  * In order to link a CSS stylesheet, you need to use the code:
      <link href="css/styes.css" type="text/css"
      rel="stylesheet" />
    And this code lives within the <head>

5. When is it useful to use external stylesheets as opposed to using interal CSS?

  * It is best to use *external* stylesheets when you are styling a large website. By using one file you can change the entire site at once where as with *internal* styling sheets you would have to change every page individually.

6. Describe what a color hex code is.

  * Color hex codes represent values for red, green, and blue in hexadecimal code.

7. What are the three parts of an HSL color property?

  * The three parts of an HSL are:
    **Hue**: expressed as an angle between 0 and 360 degrees.
    **Saturation**: expressed as a precentage
    **Lightness**: expressed as a percentage with 0% being white, 50% being normal, and 100% being black.

8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

  * The three main categories of fonts are: Serif, Sans-Serif, and Monospace.

  **Serifs**: have extra details on the ends of the main strokes of the letters. Easier to read for long passages of text.
  **Sans-Serif**: have straight ends to letters. Cleaner look. clearer to read for websites due to lower resolution on screens.
  **Monospace**: every letter is the same width. Used mostly for code because they align nicely.

9. When specifiying font-size, what are the main three units used?

  * When specifying font-size, the three main units used are pixels, percentages, and ems.
