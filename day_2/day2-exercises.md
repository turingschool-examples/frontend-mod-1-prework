## Read Chapters 3 and 4 on Lists and Links from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

  Answer these questions about the reading in your `day2-exercises.md` file:

  1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

    - Unordered are a list of points that do not require an order.  
    - Ordered either have one point that must be done before the next can begin, or every point has a particular linear position to occupy.
    - Definitions are lists made up of words along with their corresponding meaning or value.

  2.  What is the basic structure of an element used to link to another website?

    ```HTML
    <a href="url">clickable visible text</a>
    ```

  3.  What attribute should you include in a link to open a new tab when the link is clicked?

    - The <target> attribute on the opening <a> tag with a value of "_underscore_ blank"

    ``` HTML
    <a href="url" target="_blank">clickable viewable text</a> (opens in new window)
    ```
  4.  How do you link to a specific part of the same page?

    1. Identify points in the page the link will go to using the id attribute along with a unique value starting with a letter or underscore (can not be identical top another id attribute value on that same page)

    ```HTML
    <element id="top">GLOSSARY</element>
    <h1 id="top">GLOSSARY</h1>
    ```

    2. Link to that element's id attribute with the <href> attribute on the opening <a> tag with a value that begins with the # symbol followed by the value of the element's id attribute for the desired link

    ```HTML
    <a href="#top">return to top</a>
    ```


## Read Chapters 10, 11, and 12 on What is CSS, Color, and Text from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Answer these questions about the reading in your `day2-exercises.md`:

1.  What is the purpose of CSS?

  - creates rules that determine how contents of an element should appear

2.  What does CSS stand for? What does cascading mean in this case?

  - CSS = Cascading Style Sheets
  - Cascading means that CSS rules have a hierarchy that determines precedence when there are multiple rules applied to the same element.
    - Generic rules that apply to all, then overriding specific elements with rules of higher precedence, allows for simpler style sheets.

3.  What is the basic structure of a CSS rule?

  - A CSS rule has two main parts, a selector and a declaration
    1. the selector determines the element to which the rule applies
    2. the declaration consists of two parts, separated by a colon, which determine how the selector element should be styled
      1. a property
      2. a value


4.  How do you link a CSS stylesheet to your HTML document?

  - Three attributes, <href>, <type>, and <rel>, on an empty <link> element are used within the HTML document to tell the browser where to find the CSS file
    - The <href> attribute contains the file path to the CSS document
    - The <type> attribute contains the CSS file type of the document
    - The <rel> attribute contains the relationship between the HTML and the file it is linked to

  ```HTML
  <link href="css/styles.css" type="text/css" rel="stylesheet" />
  ```


5.  When is it useful to use external stylesheets as opposed to using interal CSS?

  - When a site consists of more than one page, external stylesheets become more efficient because rules can be assigned across an entire site
  - Style rules stated internally apply to a specific element on a specific page, requiring repetition if that element spans multiple pages
  - Change the style applied to entire site by editing only one file
  - Benefits the overall organization by separating the style from the content

6.  Describe what a color hex code is.

  - A pound, or hash sign, followed by a six-digit code, consisting of three separate two-digit codes which represent the amount of red, green and blue in any given color

7.  What are the three parts of an HSL color property?

  - Hue value (degree of angle or value 0-360)
  - Saturation value (%)
  - Lightness (aka Luminosity) value (%)

8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?

    - Serif fonts will have an accent on their characters or extra details at the end of the strokes.
    - Sans-Serif will have no such detail added and will thus have a cleaner, more modern look.
    - Monospace fonts will have characters that are all the same width.

9.  When specifiying font-size, what are the main three units used?

  - Pixels
  - Percentages
  - EMS
