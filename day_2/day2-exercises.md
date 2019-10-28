# Part One:

## 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

  Ordered: Lists where each step is numbered, each step matters the order in which they are performed, such as the steps taken to make a dish.
  Unordered: Lists that start with a bullet point, order does not necessarily matter, such as ingredients needed to make a dish.
  Definition: These are lists of words, followed by their definition, for example defining the tools that will be involved with making a new dish.

## 2. What is the basic structure of an element used to link to another website?

  You start by using the <a> element; followed by href= ; followed by the URL that will link the user to where they want to go; followed by the name of what the user clicked on to take them to the specific website; followed by the closing </a> element.
  For example, if I wanted to create a page talking about Github, I could add a link connecting them to the Github home page:
  I would have the button they'd click say "Github" in blue and the code would look like:
    <a href="http://www.Github.com">Github</a>

## 3. What attribute should you include in a link to open a new tab when the link is clicked?

  You still use the attribute <a> tag, but it would have a value of `_blank`. This will open your link in a new window.

## 4. How do you link to a specific part of the same page?

  You start by identifying the part in the page that the link will take you to, by using the attribute id. To link it, you again use the <a> attribute, but this time we put a # in front of the value that is followed by href.

# Part Two:

## 1. What is the purpose of CSS?

  The purpose of CSS is to help make your web page more attractive. It allows you to change the background colors, color of text and even edit the style of the text. You can also add boarders around and underline certain text using CSS.

## 2. What does CSS stand for? What does cascading mean in this case?

  CSS stands for Cascading Style Sheet. Cascading means that if there are multiple rules declared for each element, CSS will go by the precedence of each defined rule. It goes off of the last rule, which rule is more specific, and the importance of each rule. By understanding the cascading rule, it will allow me to write a simpler styling sheet with generic rules.

## 3. What is the basic structure of a CSS rule?

  You start with declaring the selector, this contains the element/elements that you want the rule to apply to. Next, inside of curly brackets, you have your declaration where you assign the property followed by the value. For example it may look like this:
  h1, h2 {
      font-family: Times New Roman :
      background-color: rgb(192,192,192) ;
      color: rgd(128,0,128)}


## 4. How do you link a CSS stylesheet to your HTML document?

  Using external CSS: You link a CSS stylesheet to your HTML document by using the <link> element in your <head> element. You do this with three attributes: href (specifies the path to the CSS file), type (specifies the type of document that is being linked), and rel (specifies the relationship between the file it's being linked to and the HTML page).

## 5. When is it useful to use external stylesheets as opposed to using internal CSS?

    It can be useful to use external stylesheets over internal in cases when you want to have more than one CSS page to stay organized better. Using external stylesheets allows you to easily link multiple sheets to your HTML page. Also all of your web browsers can share the same style sheet, which means the same code does not need to be repeated for each page, which will save a ton of time.

## 6. Describe what a color hex code is.

  A hex code is a 6 digit code that represents the amount of red, green, and blue in a color. The code leads with a # sign. It allows for you to reach a much larger scale of colors in code compared to using color names.

## 7. What are the three parts of an HSL color property?

  Hue: This is the "colloquial idea" of color. It is regularly represented as a color circle or as a slider with values ranging  from 0 to 360.
  Saturation: This is the amount of gray in a color and is represented as a percentage, full saturation being 100% and 0% is a shade of gray.
  Lightness: Lightness is the amount of lightness (white) and the amount of darkness (black) in a color. Also represented as a percentage, 0% lightness is the color black and 100% is white. lightness can also be referred to as luminosity.

## 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

  Serif: This font has an extra detail on the ends of the strokes of letters. The details are called serifs. This font has been considered easier to read and is used in any long passages.
  Sans-serif: This font has straight ends to the letters and is considered to have a much cleaner look. This font is often used for screen view.
  Monospace: Also called fixed-width, meaning ever character has the same width. It is commonly used for code because it aligns well, making it easier to follow.

## 9. When specifiying font-size, what are the main three units used?

  Pixels: Pixels are used because they allow the web designer extremely precise control how much space the text takes up, the number of pixels is followed by px.
  Percentages: Allows you to manipulate the standard pixel size of 12px, for example, 200% would change the font size to 32px.
  Ems: This is equivalent to the width of the letter m.
