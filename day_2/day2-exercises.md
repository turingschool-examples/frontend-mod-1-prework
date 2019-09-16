There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
Ordered lists are lists where each item is numbered.  This could be used to write out steps for a recipe
Unordered lists begin with a bullet point rather than anything that shows it should be ordered like numbers.
Definition lists are a set of terms with definitions for those terms.

What is the basic structure of an element used to link to another website?
Links use the <a></a> tags with an href attribute in the opening tag that has the link in it.  The text in between tags would be what text the user clicks on.  

What attribute should you include in a link to open a new tab when the link is clicked?
You'll want to include the target attribute and make it target="blank" to open a new tab when the link is clicked.

How do you link to a specific part of the same page?
First, you would identify points in the page using the id attribute.  After that, you will create a link with the href attribute referencing the id with # coming before the id you would like to go to.

--

What is the purpose of CSS?
CSS allows you to make decisions on the appearance and design of content.  

What does CSS stand for? What does cascading mean in this case?
CSS stands for Cascading Style Sheet.  Cascading is the way the rules function regarding what takes precedence.  The rule used will cascade down from the general selectors to more specific ones.  

What is the basic structure of a CSS rule?
You start with a selector which is the element you would like to be affected.  This is followed by content in curly braces {} called the declaration.  The Declaration has two parts(property and value).  The property is the aspect of the element you would like to change and the value is the specific setting for said property.

How do you link a CSS stylesheet to your HTML document?
To link a CSS stylesheet, you'll need to use the <link> element typically it the head.  Inside your link element, you'll need 3 attributes: href, type, and rel.

When is it useful to use external stylesheets as opposed to using internal CSS?
You should use external stylesheets when building a site with more than one page.  If styling internally, you would have to alter the code on each individual page rather than just one.

Describe what a color hex code is.
Hex values give specific values for the red, green, and blue and are put into a 6 character code.

What are the three parts of an HSL color property?
The three parts of HSL are Hue, Saturation, and Lightness.

In the world of typeface, what are the three main categories of fonts? What are the differences between them?
Serif, Sans-Serif, and Monospace.  Serif has extra detail and were traditionally used in print.  Sans-Serif lack the extra detail at the end and with screens having lower resolution, this can be easier to read.  Monospace gives each character a consistent width making it easier to read coding due to it aligning well.

When specifying font-size, what are the main three units used?
The main units when specifying font size would be pixels, percentages, and ems. 
