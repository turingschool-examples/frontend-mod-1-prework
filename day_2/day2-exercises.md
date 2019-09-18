# Day 2: HTML and CSS

# Chapters 3 and 4

# 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
**Answer:**
Ordered lists are lists where each item on the list is numbered, like a set of steps to follow (i.e. `1. 2. 3.`). Unordered lists are lists where each item is given a bullet point or hash mark to signify the start of a new item. Definition lists are lists made up of a set of terms each paired with the definition of their term.

# 2. What is the basic structure of an element used to link to another website?
**Answer:**
Here is an example of a link in HTML: `<a href="http://www.yahoo.com">YAHOO!</a>`. The information within quotes is the source. It can be a website, but it could also be a specific part of the same page. The information following that is the link name (the words that the user will click on to select that link.)

# 3. What attribute should you include in a link to open a new tab when the link is clicked?
**Answer:**
To make a link that opens in a new tab or window (depending on your web browser settings), you can use `target="_blank"`. This should be placed immediately after the closing quotes for a web address in a hyperlink. Example: ``<a href="http://www.yahoo.com" target="_blank">YAHOO!</a>``

# 4. How do you link to a specific part of the same page?
**Answer:**
To link to a specific part of the same page you must first assign a value to that area in the page using the `id="top"` attribute which can be used within any HTML element. Once you have assigned a value to your `id=` you can then create a link using `<a href="#top">Top</a>` where the `#` is followed by the `id=` value to the corresponding part of the page that was assigned earlier.

# Chapters 10, 11, 12

# 1. What is the purpose of CSS?
**Answer:**
CSS is the language for describing the presentation of web pages, including colors, layout, and fonts. It allows one to adapt the presentation of a page to different types of devices with varying screen sizes.

# 2. What does CSS stand for? What does cascading mean in this case?
**Answer:**
CSS stands for Cascading Style Sheets. In this case, cascading means the individual file's style sheets can be "stacked" upon one another in order to utilize one CSS rule to style multiple HTML elements on multiple web pages. Also, multiple CSS files may be used to affect one web page.

# 3. What is the basic structure of a CSS rule?
**Answer:** <br>
Example: `p { font-family: Arial;}`<br>
Selector: `p` Indicates what element(s) the rule applies to <br>
Declaration: `{ font-family: Arial;}` Indicates how the elements in the selector should be styled  <br>
Property: `font-family:` Indicates the aspects of the element you want to change  <br>
Value: `Arial;` Specifies the setting you want to use for the chosen properties <br>

# 4. How do you link a CSS stylesheet to your HTML document?
**Answer:**
To link a CSS stylesheet to an HTML doc you use the empty element `<link>`. Within the `<link>` element there are 3 attributes that must exist. The `<href>` element specifies the path to the CSS file (which should be placed in a folder named "CSS" or "Styles"). The `type` element specifies the type of document being linked to. The value should be "text/css". The `rel` or relationship element specifies the relationship between the HTML page and the file it is liked to. The value should be "stylesheet" when linking to a CSS file.

# 5. When is it useful to use external stylesheets as opposed to using internal CSS?
**Answer:**
Sometimes it's convenient to have your CSS and HTML in the same file if it only applies to one web page. When a website consists of multiple pages, it is best to use an external CSS file. This has many benefits:
1. It allows all pages to use the same style rules, so you don't need to repeat code for each page.
2. It keeps the content separate from how the page looks.
3. It allows you to change the styles across multiple pages by only modifying one file.

# 6. Describe what a color hex code is.
**Answer:**
A color hex code is a six character code that represents the amount of red, green, and blue in a color. It begins with the `#` sign. Example: `#ee3e80`. The first two characters after the `#` represent the red value, the next two represent green, and the last two represent blue.

# 7. What are the three parts of an HSL color property?
**Answer:**
1. Hue: Represents the angle on a color circle between 0 and 360 degrees.
2. Saturation: The amount of grey in a color represented as a percentage of 0% to 100%.
3. Lightness: The amount of white or black in a color represented as a percentage of 0% to 100%.

# 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?
**Answer:**
1. Serif: Fonts with extra details on the ends of the main strokes of the letters. The details are known as serifs.
2. Sans-Serif: Fonts with straight ends to letters. They have a much cleaner design.
3. Monospace: Fonts where each character takes up the same amount of space. This is ideal for writing code.

# 9. When specifying font-size, what are the main three units used?
**Answer:**
1. Pixels: Pixels are common because they allow precise control over how much space the text takes up.
2. Percentages: The default text size in browsers is 16px, which would be 100%. Any defined percentage would be taken from the 16px default. So 50% would mean 8px sized letters.
3. EMS: A measurement equivalent to the letter "m".
