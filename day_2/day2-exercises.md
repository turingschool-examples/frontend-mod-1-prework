# Day 2 Exercises
## Chapter 3 & 4

### 1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  An ordered list allows you to place things in numerical order, an unordered list inversely just lists out the items with bullet points. A definition list allows for a simple sort of listing, where you present a term using `<dt>`  and then use an alternate tag `<dd>` to provide the definition to the term.

### 2.  What is the basic structure of an element used to link to another website?
  `<a href="https://yourwebsitelink.com"Text you want the link to display as</a>`

### 3.  What attribute should you include in a link to open a new tab when the link is clicked?
  `target=" _blank"`

### 4.  How do you link to a specific part of the same page?
  To link to a specific part of the page, you need to link the **id** element in the headings you want to jump to. You then set
  up links to them using the format:
  `<a href="#idTag">idTag</a>`

## Chapter 10, 11 & 12

### 1.  What is the purpose of CSS?
  CSS allows you to create boundaries and rules to specify how the content of a page displays.

### 2.  What does CSS stand for? What does cascading mean in this case?
  Cascading style sheets, they are cascading because certain rules can take priority over other rules depending on structure and layout.

### 3.  What is the basic structure of a CSS rule?
  The basic structure for CSS is to indicate a selector (HTML element), to specify rules for. You then define the rules between brackets in a declaration. The format of the declaration is to specify the property you want to set the value for, separated by a colon which you follow with the value.

### 4.  How do you link a CSS stylesheet to your HTML document?
  To link a CSS stylesheet, you utilize the <link> element, specifying the attribute type as "text/css" and the relationship as "stylesheet". You can utilize multiple link elements to link to multiple stylesheets.

### 5.  When is it useful to use external stylesheets as opposed to using internal CSS?
  Most of the time external stylesheets should be used. The exception would be if you were only building a site with only one page, or if you had pages which required a few extra rules that were not used by the rest of the site.  External sheets allow you to avoid repetition when implementing the same rules on multiple pages, it also requires less work should you want to make edits, as you only need to edit one central location. Furthermore it helps separate out the content from the styling of the page for a more clear delineation. External stylesheets also load faster as opposed to several internal ones.

### 6.  Describe what a color hex code is.
  A hex code is a six digit code that indicates the amount of red, green and blue in a color, the code starts with a # symbol.

### 7.  What are the three parts of an HSL color property?
 Hue: What color are you looking to use?, Saturation: How much grey do you want in the color? 100% being the richest color and 0% being the most grey, Lightness: How much white or black should be included in the color, 0% being black and 100% being black.

### 8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  The three main categories of typeface are Serif, Sans-Serif, and Monospace. Serif characters have flourishes on the ends of the main strokes (serifs) to make them easier to read. Sans-serif fonts are absent of these flourishes. Within Monospace fonts all characters are the same size.

### 9.  When specifying font-size, what are the main three units used?
  1. Pixels: Pixels allow for precise control that isn't as dependent on the size of the browser being utilized. Pixels do display relative to the resolution of the screen.

  1. Percentages: Percentages display relative to the browser scale. Depending on the flow of the CSS they can stack. Percentages are useful if you want to scale a whole page to a users browser size preferences.

  1. EMS: EMS allows for the change of text relative to the size of text in a parent element. This is useful to maintain relative sizing in nested elements.
