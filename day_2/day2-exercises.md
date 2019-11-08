## Day-2 Questions

### Chapters 3 & 4

#### There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

Ordered lists are lists that are numbered and that the sequence or ordering of that list holds some significance.  For example, an assembly instructions list for a piece of furniture could be an ordered list as the steps are usually numbered and require progression through an order to properly construct that furniture.  An unordered list is one where each item in the list begins with a bullet point.  The listed off items in this type of list can be ordered in any way which is why each item typically begins with the same symbol, usually a bullet point.  A definition list is one that has a collection of terms or particular vocabulary along with the proper definition of that vocabulary.

#### What is the basic structure of an element used to link to another website?

An element that is used to link to another website uses the tags <a></a> and the text between those two tags is the link text which is what the user will see as the blue underlined words.  In order to tell the webpage where that link text should bring the user to, you use an attribute tag after the 'a' in the opening tag and that attribute is 'href="link destination"'.

#### What attribute should you include in a link to open a new tab when the link is clicked?

In order to open a link in a new tab, you use the target attribute inside your '<a>' tag so it would be target="(underscore)blank".  This opens a link in either a new tab or a new window depending on what browser the user has.

#### How do you link to a specific part of the same page?

To link to a specific part of the same page, you first need to identify the different areas of the page using an 'id' attribute tag.  You can title the id attribute whatever you'd like to title that section and you include it inside the tag of the element where you want that area located at.  Once you have your sections titled, you can link to that section of the page by using the attribute tag href="#TitleOfSection".

### Chapters 10, 11, 12

#### What is the purpose of CSS?

CSS is used to design the layout, appearance, and style of your webpage by writing rules that alter your HTML code.  This can accomplish things such as determining the layout of your page, what font and sizing will be used in the various sections, how different levels of headings will be displayed, and much more.

#### What does CSS stand for? What does cascading mean in this case?

CSS stands for Cascading Style Sheet, and the cascading in this case refers to the cascading priority list that styling follows in this language which helps the browser determine which styling rule takes priority when there are conflicting or multiple rules used.

#### What is the basic structure of a CSS rule?

A CSS rule consists of a selector and a declaration.  A selector is where the rule determines which elements will be affected by the rules stated in the declaration.

#### How do you link a CSS stylesheet to your HTML document?

You link your HTML to a CSS stylesheet using a '<link>' element in the head of your html.  That link will include the href attribute which links to the location of the stylesheet and this is followed by type attribute which determines what kind of document is in the link and in this case the value will be 'text/css'.  Lastly, the rel attribute follows the type attribute and it is used to state the relationship that the linked file has with your HTML.  In this case, the value will be 'stylesheet'.

#### When is it useful to use external stylesheets as opposed to using internal CSS?

It's useful to use an external stylesheets rather than an internal CSS when the site you are creating has more than one page.  By doing this, you can separate where the content is located from how the style will make that content appear on the page.  Also, doing an external stylesheet will allow you to apply and edit the style rules across all the pages rather than just applying it to the page where it's located.

#### Describe what a color hex code is.

A color hex code is a code that specifies what color to use when defining a color property.  A hex code is given as a # sign followed by a six digit code.  This code specifies the amount of red, green, and blue to use which combine to create the color displayed.

#### What are the three parts of an HSL color property?

The HSL color property consists of hue, saturation, and lightness.  

#### In the world of typeface, what are the three main categories of fonts? What are the differences between them?

The three main categories of fonts are Serif, Sans-Serif, and Monospace.  Serif typefaces have additional details at the beginning and ending of the strokes on each letter.  Sans-Serif have no additional details at the beginning and ending of strokes, therefore the ends and beginning simply straight ends to them.  This category of font looks much simpler and cleaner when compared to Serif.  Monospace is the category of fonts in which the width of each individual letter is the same.  This is different from the other categories of font where each letter has its own designated width which comes from the shape of the letter.  Monospace is useful in coding because it helps to align all the text much more uniformally and that makes it easier to follow.  

#### When specifying font-size, what are the main three units used?

When it comes to font-sizes, the three main units used are pixels, percentages, and EMS.  Pixels specifically state how many pixels of the screen that a standard letter should take up.  Percentages state the size of text relative to having a standard pixel size of 16.  Therefore a 50% would produce 8 pixel size while 200% would produce 32 pixel size. EMS states the relative size of font based on having an 'm' with the specified width.
