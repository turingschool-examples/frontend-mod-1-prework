HTML

1. Ordered lists number the items. This is helpful when you are listing steps in a process or something else chronological. Unordered lists use bullet points. This is helpful when you are creating a list that doesn't necessarily require a certain order. Definition lists show words and their definitions indented below them. This is helpful when providing descriptions of different terms.
2. Links use the <a></a> element. They have an href attribute name and url attribute value.
3. <target="_ blank" (omit the space) opens a link in a new window or tab.
4. The part of the page that you are hoping to link to should have a unique id, for example id="paragraph2". The link should then use a hash symbol to refer to that id, (<a href="#paragraph2"></a>). If you click on the link, it will take you to that section of the page.

CSS

1. CSS changes how your webpage looks. It allows you to style your page. You can impact the size, color, font, and more. CSS references HTML elements so the browser knows which pieces of the page to modify.
2. Cascading Style Sheets. "Cascading" refers to the order in which rules are applied. Certain styles take precedence over others. For example, the last rule applied to an element is the one that sticks. The more specific rule will hold as well (for example, if there's an <em> element within a <p> element, the <em> styling will take precedence over the <p>). If you mark a property as !important, it will take precedence (but somebody told me you should generally avoid doing this because it can make your code messy).
3. You have a CSS selector (like #intro, h1, or .quote), opening curly brace, property: value (repeat), closing curly brace.
ex:
 p.summary {
   font-family: Arial;
   color: red;
 }
4. <link href="css/styles.css" type="text/css" re="stylesheet" />
5. You should almost always use external CSS sheets. They allow you to have various styles, and you can further organize yourself by using different sheets for different groupings of elements. Older websites sometimes use internal CSS.
6. Hex code used a hexadecimal code to specify the value of red, green, and blue in a color. For example, true red has a value of #FF0000 because it has the the maximum amount of red (FF), no green (00), and no blue (00).
7. HSL stands for hue, saturation, and lightness. The hue is the value that represents the color. It is between 0 and 360. The saturation is the percentage of gray in a color. Lightness is a percentage representing how light (100%) or dark (0%) a color is.
8. The three types of fonts are serif, sans-serif, and monospace. Serif fonts have extra details and flourishes (serifs) off of the main strokes of the letters. Sans-serif fonts have no such flourishes. They are straight and tidy. Monospace fonts have letters that are all the same width (unlike the other two in which an m might be wider than an i, for example).
9. You can specify font-size using pixels, percentages, or ems. Pixels and ems are fixed sizes whereas percentages are relative.  
