> 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

Unordered list — Used to create a list of related items, in no particular order. Ordered list — Used to create a list of related items, in a specific order. Definition list - used to create a list of terms and descriptions.

> 2. What is the basic structure of an element used to link to another website?

<a href="">link text</a>.

> 3. What attribute should you include in a link to open a new tab when the link is clicked?

target=" blank".

> 4. How do you link to a specific part of the same page?

By adding href="#name" attribute to link. Element you're linking to need attribute id="name" with matching value, in this case 'name'.



> 1. What is the purpose of CSS?

To describe presentation of Web pages.

> 2. What does CSS stand for? What does cascading mean in this case?

Cascade Style Sheets.

> 3. What is the basic structure of a CSS rule?

selector → declaration (property : value)
e.g.  p {
  font-family: Arial;
}

> 4. How do you link a CSS stylesheet to your HTML document?

Placing <link> element in <head> section after <title>
<head>
 <title></title>
 <link href="css/styles.css" type="text/css"
 rel="stylesheet" />
</head>

> 5. When is it useful to use external stylesheets as opposed to using interal CSS?

It's always better to use external stylesheets, because code looks cleaner, easier to maintain and you can reuse it for many pages. If website is very simple and short, only one page, you can use internal CSS.

> 6. Describe what a color hex code is.

Three byte hexadecimal numbers #rrggbb representing intensity of red, green and blue in the color. Hex code byte values range from 00, which is the lowest intensity of a color, to FF which represents the highest intensity.

> 7. What are the three parts of an HSL color property?

HSL stands for hue(0° to 360°), saturation(0% means a shade of gray and 100% is the full color), and lightness(0% is black, 100% is white).

> 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

serif - has extra details on the end of the main strokes; sans-serif - letters have straight ends; monospace - all letters have the same width.


> 9. When specifiying font-size, what are the main three units used?

px, %, em (An em is equivalent to the width
of a letter m).

https://codepen.io/edignot/pen/WNboErE
