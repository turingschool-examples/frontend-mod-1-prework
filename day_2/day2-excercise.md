Answer these questions about the reading in your `day2-exercises.md` file:
  1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
Ordered lists(<ol></ol>) will create an ordered list starting from the number 1. Unordered lists (<ul></ul>) will create lists that are bulleted, and definition will consist of a term, and followed by a value such as a description of that item. It will appear as <dl></dl>. Inbetween, there will be <dt></dt> for the term itself, followed by <dd></dd> for the definition/
  2.  What is the basic structure of an element used to link to another website?
  <a href = "URL goes here">Content</a> where "a" is the starting and ending tag and href tells us where to go for the link.
  3.  What attribute should you include in a link to open a new tab when the link is clicked?
  href = "url goes here", where href is the attribute.
  4.  How do you link to a specific part of the same page?
  You first need to label your destination appropriately so the browser knows where to go. This can be done by going to the desired section, and making it the target by doing <a name = "target-link"> where "target-link". Then, we can make a normal link tag as we normally would, but instead of placing a url for our href, we put our destination name preceded by a hash. So <a href = "target-link">content</a>

  CSS: Design and Build Websites
Answer these questions about the reading in your day2-exercises.md:

##What is the purpose of CSS?
CSS (Cascading Style Sheets) is meant to show the descriptive elements of web pages and can be used to change things such as the font, color, and layout of the page. Additionally, CSS is used to adapt the page to whatever device you are using so everything fits. So for example, a site that is both viewable on a mobile device or a desktop computer.
##What does CSS stand for? What does cascading mean in this case?
CSS stands for Cascading stylesheet. Cascading refers to how it prioritizes different styles in a document such as when an element has conflicting or more than one rule.
##What is the basic structure of a CSS rule?
A CSS rule will consist of a Selector, and a Declaration. The selector will include any element that is located in the body and is the one being modified. An example would be <p> or <h2>. The declaration then follows and is separated by curly parenthesis. Contained in the parenthesis is the property and value, that is to say, what is being changed, and in what way it is being changed, followed by a semicolon. An example would be <h3 {color = red;}
##How do you link a CSS stylesheet to your HTML document?
In cases where the CSS stylesheet is its own document, you can link the .css file to the .html file by going to the <head> section of your HTML document and creating a <link> element to the file. As an example, it may look like the following: <link rel="stylesheet" type="text/css" href="cssfilename.css">. You can also use @import to import additional stylesheets.
##When is it useful to use external stylesheets as opposed to using interal CSS?
External CSS is useful when you want to have several pages have the same style/theme at once. Because the code for the css has already been established, you need only link it to the page to adopt the style. Internal CSS is useful for when you want to make  changes in the style of a particular page only.
##Describe what a color hex code is.
A Hex code is used to add a specific color to a property via css. When the setup is RGB, the code itself consists of 6 values (or 3 pairs of values) that indicate how much of red, green, and blue are needed. The hex code can also be put together either by decimal values ranging from 0 to 255 or from 0 to FF. Hex codes are always preceded by a # such as in #dcd8c0
##What are the three parts of an HSL color property?
HSL stands for Hue, Saturation, and Lightness. Hue input as a color wheel and as such, every degree of a circle represents a specific point on that color wheel. So for example, 0 would be red, 120 is green, and so on until you reach 360. Saturation and lightness will be input as a percentage.
##In the world of typeface, what are the three main categories of fonts? What are the differences between them?
Serif fonts will have an accent on their characters or extra details at the end of the strokes. Sans-Serif will have no such detail added and will thus have a cleaner, more modern look. And Monospace fonts will have characters that are all the same width.
##When specifiying font-size, what are the main three units used?
Pixels are used are input as a number followed by px. pixels are useful because they stay consistent relative to the size and resolution of the screen and look as intended. Percentages are also used by using a number followed by a %. If a user has changed the default size, font may look larger than intended. Ems is the last one and changes size based on the text of the parent element. Similar to using percentages, if a user has modified the size already, font could appear larger or smaller than intended.
