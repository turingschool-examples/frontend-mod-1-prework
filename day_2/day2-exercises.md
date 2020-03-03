## Chapters 3 and 4 on Lists and Links

### There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
Ordered lists are numbers, while unordered lists use bullet points. A definition list is most often a series of terms and their definitions.

### What is the basic structure of an element used to link to another website?
A link element uses the <a> tag and has an attribute called href. This attribute is the web address of the site that you want the user to reach when they click the link. Text can follow this opening tag containing the href attribute, and that text will appear instead of the full url. The user can click anything between the opening and closing tags. Example: `<a href ="https://turing.io">Turing</a>`

### What attribute should you include in a link to open a new tab when the link is clicked?
To open a new tab you can include the `target-"_blank"` attribute. Example: `<a href ="https://turing.io" target-"_blank">Turing</a>`

### How do you link to a specific part of the same page?
The first step would be identifying the places you wanted the links to access, and then adding the `id` attribute to the HTML element at that location. If you had a list of steps for solving a puzzle in a video game, you could give each heading element of the various steps and id of "Step One" or "wheel_puzzle." After the elements have the id attribute, you can use give the href attribute in your link element a value of "#wheel_puzzle" Example `<a href="#wheel_puzzle">Wheel Puzzle</a>`

## Chapters 10, 11, and 12 on What is CSS, Color, and Text

### What is the purpose of CSS?
CSS is used to create rules that dictate how elements will appear on the web page. It's the primary thing that tells the page how it is supposed to look. When you think about a website you are probably thinking mostly about its design, which is handled in the .css file.

### What does CSS stand for? What does cascading mean in this case?
CSS stands for cascading style sheet. Cascading refers to the way that rules are prioritized within the code. If two css rules have the same selector, the one lower down in the code will the one applied. More specific rules will be prioritized over more general rules. Understanding how the rules cascade can help developers make cleaner and more efficient code.

### What is the basic structure of a CSS rule?
A CSS rule consists of a selector and a declaration. The selector indicates which element the rule applies to, while the declaration indicate how the element should be styled.

### How do you link a CSS stylesheet to your HTML document?
A CSS stylesheet can be linked to an HTML document by putting a link element in the head of your document. The link element is an empty element that has an `href` attribute with a value of the file location for the css stylesheet. You must also add the attribute `type` which says what kind of document is being linked to, and a `rel` attribute to define the relationship between the HTML and linked document. More than one stylesheet can be linked to an HTML, but each needs their own link in the head. Example `<link href="mysite/styles.css" type="text/css" rel="stylesheet" />`

### When is it useful to use external stylesheets as opposed to using internal CSS?
It is useful to use an external stylesheet when you are only building one page, or if you are using specific style rules for individual pages, as opposed to all of the pages on a site. With an external stylesheet you can make changes to one document without having to change the code on each pages HTML file. This can be done by linking to the same stylesheet in the HTML which leads to smaller files and shorter code.

### Describe what a color hex code is.
A color hex code uses a six digit code to represent values of red, blue, and green. The balance of these different values equals a specific color. The hex code follows a `#`sign.

### What are the three parts of an HSL color property?
The three parts of an HSL color property are hue, saturation, and light. Hue is what we generally think of as color, and is usually depicted as a wheel. It is expressed as an angle on this wheel. Saturation is the amount of gray in a color and is written as a percentage of gray in the color from 0% to 100%. Light is the amount of white or black in a color and is also expressed as a percentage. 100% lightness would be white and 0% would be black, which means the 50% would be the normal color.

### In the world of typeface, what are the three main categories of fonts? What are the differences between them?
The three categories of fonts in the world of typeface are serif, sans-serif, and monospace. Serif fonts like Times New Roman and Georgia have extra details (serifs) on the ends of main strokes of letters. Sans-serif fonts like Arial and Verdanda have straight ends to letters and look cleaner. Monospace fonts like Courier and Courier New have letters that all have exactly the same width.  

### When specifying font-size, what are the main three units used?
The three main units used to specify font-size are pixels, percentages, and ems. Pixels are the most precise way to specify the size of your font, because they are relative to the size of the monitor. They won't change is a user changes the default size of text in a browser. Using percentages of the default size of font in a browser (16px) you can set font to a different size. If the user changes the default size of text in the browser, this styling will appear relative to that new default size. EMS will let you change the size relative to text in the parent element.
