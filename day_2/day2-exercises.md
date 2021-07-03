1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
    * Ordered lists are lists that need to be numbered or in a certain order like a recipe.  Unordered lists don't need to be in a certain order and usually begin with a bullet point.  Definition lists consist of a set of terms along with those terms' definitions.  They also look like entries in a dictionary.

2. What is the basic structure of an element used to link to another website?

    * `< a href = url> text you want linked </a>`

3. What attribute should you include in a link to open a new tab when the link is clicked?

  * The target attribute and set it to `"_blank"`

4. How do you link to a specific part of the same page?

    * You use the id attribute inside the `<a>` attribute uisng a `#` symbol.

    * If the id inside an element is labeled top then your code would look like:

    ```
    <a href = "#top"> text you want linked </a>
    ```
___

1. What is the purpose of CSS?
    * Lets you create rules that specify how the content of an element should look.

2. What does CSS stand for? What does cascading mean in this case?
    * CSS - Cascading Style Sheet
    * The styles can fall from one style sheet to another
    * It lets you write simpler style sheets because you can apply generic rules to most elements then override the properties on certain elements that need to appear differently.

3. What is the basic structure of a CSS rule?
    * `selector {declaration}`
      * EX: `h1 {font-weight: bold;}` - this will turn
    * The selector allows you to give CSS rules to different elements
    * The declarations let you know what the element should look like (color, size, weight, etc.)

4. How do you link a CSS stylesheet to your HTML document?
    * There are two ways to add CSS to a HTML document
    1. External CSS
        * Within the `head` element add a `link` element to tell the browser where to find the CSS file
        * The link element has 3 parts
          1. `href` - the path to the CSS file
          2. `type` - type of document being linked to. In this case it's `text/css`
          3. `rel` - the relationship between the HTML page and the file.  For CSS the rel is `stylesheet`

    2. Internal CSS
        * CSS rules within the HTML page
        * Place the CSS rules inside a `style` element that is placed within the `head` element of the HTML page
        * The style element should have an attribute of `text/css`

5. When is it useful to use external stylesheets as opposed to using internal CSS?
  * You use an external stylesheet when you're building a site with more than one page so that all pages can use the same style rules.  
  * It also makes editing easier since you just have to edit the rule in one spot vs 10 spots.

6. Describe what a color hex code is.
  * It's six digit code that represents how much of red, green, and blue are in a color
  * Hex codes start with a pound symbol

7. What are the three parts of an HSL color property?
  * Hue - the idea of color
  * Saturation - the amount of gray in a color and is represented by a percentage
  * Lightness - the amount of white or black in a color and is represented by a percentage

8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  * Serif - have extra details on the ends of the main strokes. Usually used for long passages of text
  * Sans-Serif - have straight ends to letters. Usually used for screens, especially when the text is small
  * Monospace - every letter is the same width.   Usually used for code since it aligns nicely.

9. When specifying font-size, what are the main three units used?
  * Pixels - number of pixels followed by the letters px `16px`
  * Percentages - the percentages are in relation to the default pixel size of browsers - 16px
  * EMS - em is equivalent to the width of a letter m
