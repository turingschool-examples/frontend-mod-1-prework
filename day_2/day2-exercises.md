# Chapter 3/4 Answers

1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
      * Ordered lists are numbered (with the `<ol>` element)
      * Unordered lists are bullet points (with the `<ul>` element)
      * Definition lists are a set of terms with definitions for each term (with the `<dl>` element)

2.  What is the basic structure of an element used to link to another website?
      * `<a href="LINK">LINK TEXT</a>`

      * When you link to a different website the value of the *href* attribute will be an **absolute** URL
        * An absolute URL will be the full web address for the site
      * When you link to other pages within the same site, you can use a **relative** URL
        * With a relative URL, you do not need to specify the domain name/If pages of the site are in the same folder, then the *href* value is just the name of the file

3.  What attribute should you include in a link to open a new tab when the link is clicked?
      * Use the target attribute on the opening `<a>` tag. The value of the attribute should be `_blank`.
        * `<a href="LINK" target="_blank">LINK TEXT</a>`

4.  How do you link to a specific part of the same page?
      * You can identify the points of a page that you may want to link back to using the *id* attribute, which can be used on every HTML element
        * The value of the *id* attribute should start with a letter or an underscore (not a number or any other character)
        * No two *id* attributes should have the same value
      * Then, to link to an element that have an *id* attribute, you would use `<a href="#(id value)"`

# Chapter 10/11/12 Answers

1.  What is the purpose of CSS?
      * CSS allows you to create rules that specifies how the content of an element should appear

2.  What does CSS stand for? What does cascading mean in this case?
      * Cascading Style Sheets
        * The "cascading" in CSS means that there is a hierarchy to CSS, and rules "cascade" down from various sources. Styles of a higher precedence overwrite rules of lower precedence. For example, id's are the most specific selector in CSS, followed by classes, and finally, tags.

3.  What is the basic structure of a CSS rule?
      * A CSS rule contains two parts: a selector and a declaration
        * Selectors indicate which element the rule applies to (sam rule can apply to multiple elements, just need to separate the element names with commas)
        * Declarations indicate how the elements in the selector should be styled (a property: a value)
          * Property: aspects of the element you want to change (color, font, width, height, border)
          * Value: the settings you want to use for the chosen properties
      ```
      h1, h2, h3 {
        font-family: Arial;
        color: yellow;
      }
      ```

4.  How do you link a CSS stylesheet to your HTML document?
    * Use a `<link>` element in the HTML document to tell your browser where to find the CSS file used to style your page/this is an empty element that doesn't need a closing tag and lives inside the `<head>` element
      * *href* specifies that path to the CSS file
      * *type* specifies the type of document (value should be *text/css*)
      * *rel* specifies the relationship between the HTML page and the file it is linked to (value should be *stylesheet*)
    ```
    <link href="css/styles.css" type="text/css" rel="stylesheet" />
    ```

5.  When is it useful to use external stylesheets as opposed to using internal CSS?
    * You should use an external stylesheet when building a website with more than one page.
      * Allows all pages to use the same style rules (eliminates repeating in each page)
      * Keeps content and style separate
      * Allows you to change styles used across all pages by altering just one file

5.  Describe what a color hex code is.
    * Hex codes are six-digit codes that represent the amount of red, green, and blue in a color, preceded by a # sign/represent values for red, green, and blue in hexadecimal code
      * Ex: #66cdaa (The value of the red, 102, is expressed as 66 in hexadecimal code. The 205 of the green is expressed as cd and the 170 of the blue equates to aa)

6.  What are the three parts of an HSL color property?
    * Hue (colloquial idea of color, expressed as an angle between 0 and 360 degrees)
    * Saturation (the amount of gray in a color, represented as a percentage/maximum saturation means no gray (100%)/minimum saturation means mostly gray(0%))
    * Lightness (amount of white (lightness) or black (darkness) in a color, represented as a percentage/0% lightness is black/100% lightness is white/50% lightness is normal/sometimes referred to as luminosity)
      * Different than brightness - brightness only adds black/lightness offers both white and black

7.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
    * Serif (extra details on the ends of the main strokes of the letters, known as serifs)
    * Sans-Serif (straight ends to letters/much cleaner design)
    * Monospace (every letter is the same width)

8.  When specifying font-size, what are the main three units used?
    * Pixels
    * Percentages
    * Ems
