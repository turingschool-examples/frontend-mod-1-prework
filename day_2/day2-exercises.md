## Chapter 3 - 4 Lists and Links

### 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
Ordered lists `<ol></ol>` are displayed by a numbered list starting at 0 and incrementing for each list item. List items are wrapped with `<li></li>` tags.
Unordered lists `<ul></ul>` are displayed by a bulleted list. List items are wrapped with `<li></li>` tags.
Definition Lists `<dl></dl>` are lists of definitions. The defined content is wrapped in `<dt></dt>` tags. The definitions of the terms are wrapped in `<dd></dd>` tags.

### 2. What is the basic structure of an element used to link to another website?
`<a href="#url">Anchor Text</a>` An anchor tag is used to link to another website. It starts with an opening anchor tag `<a href="">`. This includes the opening anchor tag followed by an "href" attribute. Next you put the text you want the link to display. and finish it off with a closing anchor tag `</a>`.

### 3. What attribute should you include in a link to open a new tab when the link is clicked?
To open a link in a new window you include the `target="_blank"` attribute. This tells the browser to open the link in a new tab.

### 4. How do you link to a specific part of the same page?
To link to a specific part of a new page you use a hash value and an id from the target element. Say the contact section has an id of "contact" `<div id="ContactSection">`. The anchor tag would look like this: `<a href="#ContactSection">Contact Us</a>`.


## Chapter 10 - 12 What is CSS, Color, and Text

### What is the purpose of CSS?  
CSS adds styling to a webpage. It takes in selectors such as elements of attributes of html and creates rules for those selectors. CSS can style things such as color, fonts, padding, margin, position on the page. CSS can also style user events such as hover styles, active and linked styles.

### What does CSS stand for? What does cascading mean in this case?
CSS stands for Cascading Style Sheets. This means that CSS works on a hierarchy of rules. For example a p selector is not as specific as a p.intro selector. This means which ever style was declared by the p.intro selector would override a style set to just the p element.

### What is the basic structure of a CSS rule?
The basic structures looks like this:  
`nav {color:#fff;}`  
**nav** is the selector targeting the nav element. The styles are contained within a set of curly brackets. Everything inside of the curl
y brackets is called a declaration. Each declaration ends with a semi-colon. Within the declaration the property declares which style to affect, in this case the color property. Followed by a colon, then the value of the property. In this example the value is `#fff` which is a hexi-decimal value for the color white.

### How do you link a CSS stylesheet to your HTML document?
To link a CSS file to an HTML document you use a `<link>` element. The link element should be placed inside the `<head>` element. The `<link>` uses three attributes; href, type and rel. The href attributes indicates where the css files lives. The type attributes indicates what type of content you are linking. In our case it will be set to "text/css". The last is the rel attribute. This identifies the relationship between the HTML file and the file it is linked to. This will be set to stylesheet.  
`<link href="/styles/style.css" type="text/css" rel="stylesheet>`  

### When is it useful to use external stylesheets as opposed to using interal CSS?
It is useful to use an external stylesheet when your website has more than one page. This way you can link your stylesheet to each page instead of copying the styles to each page. This makes CSS easier to manage so that you only have to edit them in one place.  

### Describe what a color hex code is.
A hex color is a six digit value preceded by a hash sign. The number values represent amounts of red green and blue color. If all 6 characters are the same, you shorten the values to three for example: #ffffff is the same as #fff.  

### What are the three parts of an HSL color property?
The parts of the HSL color property are Hue, Saturation and Lightness. Hue represents a color circle with values ranging from 0 - 360. Saturation is the amount of gray in a color. Saturation is a percentage value where %100 is all gray and 0% is no gray. Lightness is the white and black in a color. This is represented by a percentage where 0% lightness all the way to 100% blackness, where 50% is normal. 

### In the world of typeface, what are the three main categories of fonts? What are the differences between them?
The three main categories of fonts include serif, sans-serif and monospace. Serif fonts have small ticks or strokes coming of the end of each character. Serif fonts are considered easier to read in large sections of text. Sans-serif fonts have straight letters and a cleaner design. Monospace fonts have a fixed character width. Every character is the same width as the m.

### When specifiying font-size, what are the main three units used?
The three main units for specifying font-size are pixels, ems and percentages. Pixels is the most explicit way to declare font sizes. Percentages will take the percentage of the parent font-size. Ems are equivalent to the width of the letter m.
