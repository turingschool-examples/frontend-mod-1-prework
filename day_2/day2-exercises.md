
> 1. **HTML List Types**
> There are three basic types of lists in HTML.
>
> - **ordered lists** have numbers to indicate the order that an item occupies in the list. This could be useful for multi-step directions or to indicate that something has higher precedence.
> - **unordered lists** have bullet points or similar markings and are useful when the items in the list have no particular order, such as a list of tools needed for a task or a wishlist of some kind
> - **definition lists** are lists of words or terms followed by the meaning of each word or term

2. **Link Structure**
>The basic structure of a link includes an opening link tag using the `<a>` element with the 'href' attribute and the actual link to the page that the user will connect to, followed by some text to help the user understand what information they are accessing by using the link, and then ending with the closing link tag.

3. **Opening Links in a New Tab**
>A link can be set to open in a new window using the 'target' attribute in the opening `<a>` tag with the value specified as 'blank'.

4. **Linking to a Specific Part of the Same Page**
>Links can be created to specific parts of the same page to aid in navigation if unique id attributes have been assigned to those areas of the page. When creating the link the href element would then have a hashtag followed by the id attribute.

---

1. **The Purpose of CSS**
> CSS allows specific style choices to be employed within a webpage, such as all H1 text  being in a specific font, or for the page to have one color for the background, but other colors for certain areas of the page, the width, height and borders of those areas and so on.

2. **Defining CSS**
>CSS stands for 'Cascading Style Sheets'. Cascading Style sheets allow style attributes to be assigned to multiple parts of a page, or to multiple pages that all connect to that CSS file. This allows html files to be smaller, since style attributes do not have to be repeated for each item using that style, and allows for changes to be made quickly and easily.
*Cascading* refers to how changes to properties are governed and prioritized. CSS assigns differing degrees of importance based on the order that changes were made, the specificity of those changes and other factors.

3. **Basic Structure of  CSS rules**
>CSS rules contain two parts. The *selector* indicates which element (or elements) the rule is going to apply to, which  will be followed by curly braces containing the *declaration*. The Declaration will contain a property/value pair separated by a colon. The property refers to the part of the element that will be changed, such as color or height and a value indicates how the property will be affected by the rule.

4. **Linking a CSS Stylesheet to an HTML Document**
>When using external CSS, a link between the CSS Stylesheet and the HTML document is embedded in the 'head' of the HTML document. In this case, the 'link' element will include the filepath to the CSS document. If more than one CSS style sheet is being used to style different elements of the page, multiple links can be included.

>For internal CSS, the CSS rules themselves are contained within a 'style' element, usually in the 'head' of the HTML document.

5. **Using External Stylesheets**
> External stylesheets are used when more than one webpage will be governed by the rules of the CSS stylesheet, but it seems to be considered best practice to use external stylesheets for most purposes.

6. **Color Hex Code**
>Hex Code uses a six digit code to represent the precise amount of each of the three colors (red, blue, green) to be used to produce a specific color.

7. **HSL Color Property Aspects**

>The three properties of HSL aspects are *hue, saturation,* and *lightness*.

>Hue is a spectrum of available colors, and is frequently expressed as a circle or ring. When using HSL colors, the hue is represented as an angle, showing the position of the color on the ring or circle
>Saturation is the amount of gray within the color, which will be expressed as a percentage, with 0% being a gray color and 100% being full saturation of the selected color.
>Lightness indicates the amount of black or white within the color, and will also be shown as a percentage. 0% lightness will be black, 50% will be a normal color, and 100% will show as white.

8. **Typeface Differences.**
>The primary classifications of typefaces are *serif*, *san serif* and *monospace*.
>Serif fonts have additional marks at the ends of each stroke. Many people find that serifs aid in readability, so these fonts are often used in books and long passages of text
>San Serif are fonts without the additional marks at the ends of the main strokes, leaving the letters smooth and uncluttered
>Monospace fonts have the same width area for each letter, this allows letters to align nicely and is commonly used for writing code.

9. **Font Size**
> Font size is measured in one of three ways; pixels, percentages or ems.
> *Pixels* is an indication of how many pixels the letters will take up. This is a precise way of indicating the size and will be likely to show up the way it was intended regardless of the screen resolution, which can be changed by the user. Pixel sizes are represented by a number followed by 'px'.
> *Percentages* allow the text size to be altered in relation to the default font size, which is 32px. So a font size of 50% would change the text to be only 16px. This will allow the text to show to scale, even if the default size is changed.
> *Ems* bases the size of the letters on the width of the letter 'M' in the text. This is typically 16px, so you can use that as general rule when using ems. If the user changes the default size in their browser, this method can yield unpredictable results. This method is represented by an integer or float followed by 'em'.
