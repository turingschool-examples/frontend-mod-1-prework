Chapter 3 + 4 questions

1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

A:
An ordered list is contained in between <ol></ol> elements. An ordered list uses numbers.

An unordered list is contained in between <ul></ul> elements. An unordered list uses bullet points.

A definition list is made using the <dl></dl> elements. A definition list is used to define terminology.


2.  What is the basic structure of an element used to link to another website?

 A:
 Anything in between the <a> and </a> elements will be part of the link.
 Use the href attribute name between the first 'a' and the '>' and assign a webpage with the address wrapped in quotes as the attribute value.
 In between the <a> and the </a> elements place the text that will show up on the web page. This is known as the link text.

3.  What attribute should you include in a link to open a new tab when the link is clicked?

A:
The target attribute name is used to create a new tab or window for clicking the link. The attribute value assigned to target should "blank" with an underscore before the 'b'. This attribute is between the 'href="www.xyz"' and the '>' of the opening '<a>'

4.  How do you link to a specific part of the same page?

A:
To link to a specific part of the same page use the id attribute. This can be used inside of an opening heading element to identify the section of a page. The value of the id attribute should only start with a letter or an underscore.
To link to the same page using an href attribute, use a '#' symbol before the value attribute. This is good to use to link back to the top of the page.

Chapter 10,11, + 12 questions

1. What is the purpose of CSS?

A:
CSS allows for control of the web site appearance. CSS uses rules to assign different properties that changes things such as color and typeface throughout the webpage. This allows for files that store style characteristics to be managed separately. This way changing one file can make changes on many pages of a website.

2. What does CSS stand for? What does cascading mean in this case?

A:
CSS stands of 'Cascading Style Sheet'. If more than one rule applies to the same element, the last rule will have the greatest precedence, hence the word 'cascade'. Cascading is useful to ensure that older browsers work on your webpage. If the browser cannot read the last rule, the earlier rule that can be read will be used.  

3. What is the basic structure of a CSS rule?

A:
The structure of a CSS rule should contain two parts, a selector and a declaration. The selector indicates HTML element(s) to which the rule is applied. The declaration indicates how the selector should be styled. example: p { color: yellow }

The declaration is made up of a property and a value. Properties are the aspect of the element that is changed. Values specify the settings for the properties.


4. How do you link a CSS stylesheet to your HTML document?

A:
Use the <link> element in HTML so the browser can find the CSS file. <link> is an empty element. It lives inside the head element.
Use 'href' to specify a path for the CSS file. The 'type' attribute indicates the type of document linked. The value should be 'text/css'. 'rel' is used to specify the relationship between the HTML and the linked file. For CSS the value should be set to 'stylesheet'.

5. When is it useful to use external stylesheets as opposed to using internal CSS?

A:
An external CSS style sheet is useful when building a website with more than one page. This way all pages can use the same style rules. The content is separated from the style. This way one file can be changed to make changes across all pages.

6. Describe what a color hex code is.

A:
A color hex code is a six-digit code. The six-digits are preceded by pound/hashtag sign. example: #66cdaa
The hex values represent values for red, blue, and blue in hexadecimal code. Each two digits represent the hexadecimal code for the corresponding RGB value which is expressed as a number.

7. What are the three parts of an HSL color property?

A:
The three parts of and HSL color property are hue, saturation, and lightness.
Hue represents the color or shade the viewer perceives. Hue is represented in a color wheel from 0 to 360, where the angle represents the color.
Saturation is the amount of grey in a color. Max saturation has no grey, minimum saturation is mostly grey.
Lightness is the amount of black or white in a color. 100% lightness is white, 0% lightness is black.

8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

A:
In typeface the three main categories of fonts are serif, sans-serif, and monospace.
Serif font has extra details at the beginning and endings of the main strokes of the letter. This style is typically thought of as easy to read.
Sans-serif straight and clean beginnings an endings. This is good for monitors with low resolution.
Monospace has letters that are all the same width. This is also known as fixed width. These fonts are good coding since the letters align well.

9. When specifying font-size, what are the main three units used?

A:
The main three units used to specify font size are pixels, percentages, and EMS.
Pixel unit modification can give precise control over the space taken up by the text. This is the best way to ensure that type appears at the intended size (other units are more likely to vary if the user changes the browser default font size).
Percentages modify font size by changing the font size to a percentage of the default size. The default size is 16 pixels in a web browser. This default size can be changed. This would change the size of things like headings in relation to the default change.
EMS allows the text size to be changed relative to the parent element. EMS uses the width of the letter 'm' as the standard for width. EMS is good to use for things like adjusting line height (space between lines) since it will adjust relative to the size of text selected.
