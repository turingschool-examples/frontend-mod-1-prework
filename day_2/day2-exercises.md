#### Chapters 3 and 4 on Lists and Links questions;

1. The differences between ordered, unordered, and definition lists are ordered lists are lists where each item in the list is numbered and need to be completed starting with number one and ending with the last number. Unordered lists are lists that begin with a bullet point and do not need to be performed in any kind of order, hence the "unordered". Definition lists are made up of terms along with their definitions, think about vocabulary lists.

2. The basic structure of an element used to link to another website starts off with the ``<a>`` element. You should be able to click on anything in between these tags, using the opening and closing tags of course. So, you start off with <a, then you specify the link of the page by using the href attribute, an equal sign, and then the link to the page in quotes, end this with a > symbol, then write text in which the users will see and be able to click on, lastly write the closing tag with the ``</a>`` element.

3. The attribute that you need to include in a link to open a new tab is the href attribute. The value of this attribute is the page that you want people to go to when clicking on the link.

4. You link to a specific part of that same page by using an absolute URL. An absolute URL will start with the domain name for the site and will be followed by the path of the specific page you want your user to go too.

#### Chapters 10, 11, 12 on what is CSS, Color and Text questions;

1. The purpose of CSS is to allow you to create rules. This is specific to how the content of an element should appear on the page, i.e. Presentation and Layout.

2. CSS stands for Cascading Style Sheet. Cascading means you can write simpler style sheets. This means that you can create generic rules to most elements, but then override when you need to change/edit individual elements. This causes the HTML code to be easier to read and manage. A good example is changing the style of every h1 element by altering one CSS style sheet causing the rule to be changed on every page that has the CSS rule.

3. The basic structure of CSS rules are; if you are creating a single page you could decide to put the rules in the same file, to keep everything in one place, or if you have one page that requires extra rules (not used by the whole site) you might use CSS in the same page. You might also consider to keep all CSS rules in a separate file for better practice. Some examples of rules would look like this; ``h3 {font-family: Times new Roman;}`` h3 being the selectors indicating which part of the document this rule applies to, so the paragraph, and the declaration is what is in the brackets, this indicates the style of the selector. Another example would be adding color as well, so ``p {font-family: Times new Roman; color: purple;}`` the color being the property, this indicates the element you want to change, of course, and values, the value specifies the property causing the color to be purple.

4. How you link a CSS stylesheet to a HTML document is simple. In the head of your HTML document you add a separate ``<link>`` element to locate where the CSS stylesheet is, you than must specify the path by using the `href` and the .css document, you than must have the `type` attribute that specifies the text, and than the `rel` that specifies the relationship between the HTML page and the file that we are linking. Simple.

5. It is useful to use external stylesheets opposed to using internal CSS only when you are building a site with more then one page, because this allows all pages to have the same style rules, instead of repeating yourself, external also keeps the content separate, and you can change the styles used across all pages by altering just one file, instead of doing it individually.

6. Color hex codes are the six digit codes that represent the amount of red, green, and blue in a color with a pound sign in front if this six digit code.

7. The three parts if an HSL color property are hue, saturation, and lightness. Hue is the colloquial idea of color, saturation is the amount of gray in a color, and lightness is the amount of white (lightness) or black (darkness) in color.

8. The three main categories of fonts in the world of typeface are serif, sans-serif, and monospace. The differences of these fonts are, serif fonts have extra details on the ends of the main strokes of their letters (making it easier to read through long paragraphs), sans-serif fonts have straight ends to letters (you should use this font if you have small text), monospace fonts have every letter in a fixed width (commonly used for coding).

9. The main three units used for specifying font-size are weight, style, and stretch.
