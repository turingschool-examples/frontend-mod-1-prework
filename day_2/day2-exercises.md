<b>There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?</b>

Ordered lists are structured with numbers, letters, roman numerals, etc. (although style should be done with CSS), which are used for things that need to be ordered sequentially, while unordered lists are simply bullet points or dashes, which may be used for ingredients that don't need to be introduced in a specific order. Definition lists are used for lists of terms and their definitions.

<b>What is the basic structure of an element used to link to another website?</b>

An &lt;a&gt; tag is used with a href="" attribute. The content between the "" should be the URL for the page you want the link to access and between the beginning and ending &lt;a&gt; tags should be a description which will display on your webpage as a clickable link.

<b>What attribute should you include in a link to open a new tab when the link is clicked?</b>

You would use a target_blank attribute to open a new window after the href="" attribute within an &lt;a&gt; tag. (I could not figure out how to style this without it editing the rest of the file, thats why the attribute is written like that)

<b>How do you link to a specific part of the same page?</b>

If you are linking to a part of the same page you must use an id attribute to name the part of the page you want to link to and start the href attribute within the &lt;a&gt; tag with a # preceding the name you gave in the id attribute.

<b>What is the purpose of CSS?</b>

CSS allows you to beautify your webpage by making rules.

<b>What does CSS stand for? What does cascading mean in this case?</b>

Cascading stylesheets. Cascading refers to being able to have a rule take precedence over another by cascading down. The more specific rule overrides other rules.

<b>What is the basic structure of a CSS rule?</b>

A selector tells which part of the html code to target, for example p for paragraphs or h1 for main headings. it is followed by an opening brace and the declaration of how you want the selector to be effected, for example you could change font size or color. If you want to do both separate each declaration with a semicolon and start a new line. When finished close with an ending brace.

<b>How do you link a CSS stylesheet to your HTML document?</b>

You use a &lt;link&gt; tag which contains a href attribute with the link to a stylesheet, a type="", attribute which should be a value of text/css, and a rel="" attribute equal to a value of stylesheet.

<b>When is it useful to use external stylesheets as opposed to using internal CSS?</b>

An external stylesheet is useful when you are building a site with more than one page because you can alter the CSS on all pages by editing one file of code if they have similar properties.

<b>Describe what a color hex code is.</b>

A hexadecimal code describes, respectively, the amount of red, green, and blue needed to make a certain color with two characters per color, either a letter or a number, with the whole code preceded by a #.

<b>What are the three parts of an HSL color property?</b>

Hue, saturation, and lightness are, respectively, the actual color, based on a circle or line, defined by the angle (0-360) of a circle, the amount of gray in a color with 100% saturation being none and 0% being a shade of gray, and the amount of white or black in a color with 0% lightness being black and 100% being white.

<b>In the world of typeface, what are the three main categories of fonts? What are the differences between them?</b>

Serif, which has extra details on the letters, sans-serif which have straight ends to the letters, and monospace, which, unlike the others, has all letters set to the same width and is useful when aligning code.

<b>When specifiying font-size, what are the main three units used?</b>

Pixels, percentages, and ems.

<b><a href="https://codepen.io/pjanks/pen/WNeJEwX">Link to CodePen</a></b>
