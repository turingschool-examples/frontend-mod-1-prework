Chapters 3 & 4
1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
-Ordered - An ordered list is a numbered list. This type of list could be used for somethings listing instructions that must be followed in a certain order, a list stating importance of the items, or even a document needing to be notated by numbered sections. The element for this list is <ol></ol>
-Unordered - An unordered list uses bullet points to list the items in no certain order. A grocery list would be an example of an unordered list. The element for this list is <ul></ul>
-Definition - A definition list is a set of terms along with their definition. It is in no specific order. The element for this list is <dl></dl> followed by <dt> for the term defined and <dd> for the definition.

2. What is the basic structure of an element used to link to another website?
Links are created using the <a> element. In the opening tag you must include an href (hypertext reference) attribute followed by the web address you want to link. The address should be enclosed by double quotation marks. The text between the opening and closing tag will identify the page you have linked. To close the element use the tag </a>.

3. What attribute should you include in a link to open a new tab when the link is clicked? To open a new tab when a link is clicked you must first follow the same steps as the basic link structure. after placing the proper link and before closing the angled bracket add the attribute - target - the value of this attribute is an underscore followed by blank and enclosed in double quotations.

4. How do you link to a specific part of the same page?
In order to link to a specific part of the same page you must first identify different sections on the page using the id attribute. This can be used with any element. Id attributes must start with a letter or an underscore and all id's on the same page must have a different value. Id attributes are surrounded by double quotation marks. The <a> element is used to link to any elements including an id attribute. To do this the value for the href attribute in the <a> element will include a # followed by the value of the id attribute you wish to jump to all enclosed in double quotation marks.

Chapters 10,11, & 12
1. What is the purpose of CSS?
CSS indicate how you want the contents of an element to look. You can specify background color, font, font color, etc.

2. What does CSS stand for? What does cascading mean in this case?
CSS stands for cascading style sheet. Cascading in this sense means that if two rules are identical, the latter of the two will take precedence.

3. What is the basic structure of a CSS rule?
A CSS rule contains two parts. a Selector and a Declaration. A Selector indicates which element the rule applies to. A Declaration indicates how the elements referred to in the Selector should be styled. Declarations are split into two parts, a property and a value, these are separated by a colon. Declarations sit inside braces. You can use a semi colon when using multiple Declarations.

4. How do you link a CSS stylesheet to your HTML document?
The link will be placed in the head element. It must have three attributes. href - specifies the path to the CSS file. type - specifies the type of document being linked to. This will read "text/css" rel - specifies the relationship between the HT
ML page and the file it is linked to. Should be "stylesheet" when linking to a CSS file. <link href="css/styles.css" type="text/css" rel="stylesheet" />

5. When is it useful to use external stylesheets as opposed to using internal CSS?
You should use and external stylesheet when you are building a website with more than one page.

6. Describe what a color hex code is.
Hex codes are six digit coeds that represent the amount of red green and blue in a color. They begin with a pound sign.

7. What are the three parts of an HSL color property?
Hue - is the colloquial idea of color.
Saturation - the amount of gray in a color.
Lightness - the amount of white or black in a color.

8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?
Serif - this style has extra detail on the ends of the main strokes of the letters.
Sans-Serif - this style has straight ends to letters, creating a much cleaner design.
Monospace - Every letter of the font is the same width.

9. When specifying font-size, what are the main three units used?
Pixels - They allow web designers very precise control over how much space their text takes up.
Percentages - Allows you to set font size at a percentage of the default.
EMS - Equivalent to the width of a letter m
