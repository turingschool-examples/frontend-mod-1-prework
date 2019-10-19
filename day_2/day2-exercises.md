1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
In HTML, an ordered list is a list using either numbers, letters, or roman numerals to indicate list position (first item, second item, third item, etc.). An unordered list is a list with bullet points instead of numbers, letters, or roman numerals. A definition list is a list of terms and definitions. There are no bullets, numbers, letters, or roman numerals at the beginning of each line to indicate a new list item.

2.  What is the basic structure of an element used to link to another website?
To link to another website, you use the element of `<a> </a>` to make the user able to click anything between the two tags. You use the `href="..."` attribute in the opening tag to specify the url you want the user to be directed to when they click the link. In between the opening tag and closing tag is the text the user clicks on.

3.  What attribute should you include in a link to open a new tab when the link is clicked?
To have a link open in a new window or tab, you should include the target attribute in the opening tag with a value of `_blank`

4.  How do you link to a specific part of the same page?
To link to specific parts of the same page, you must first add an id attribute to the part of the page you want to link to. For example, if you wanted to link to a specific paragraph with contact information you could write the following: `<p id="contact"> ... </p>`. The id value should start with a letter or underscore. To link back to this paragraph, you would use the same `<a>` element again. For the href attribute, start with the `#` symbol and the id attribute value you assigned to the paragraph. To link to my contact information paragraph, I could write:
`<a href="#contact"> Click here for contact information </a>`.

<br><br>

1.  What is the purpose of CSS?
    CSS is used to modify the design of a webpage through assigning rules and properties to the content of various elements.
2.  What does CSS stand for? What does cascading mean in this case?
    CSS stands for "cascading style sheet." In CSS, cascading refers to how rules are prioritized when applied to elements. For example, the more specific selector takes precedence over a less specific selector and any property marked `!important` will take precendence over other rules applied to the same element.
3.  What is the basic structure of a CSS rule?
    A CSS rule contains a selector and a declaration. The selector tells you which element(s) will be affected by the declaration. The declaration contains the property and value. The property is followed by a colon and each value is followed by a semicolon. For example: `p {color: green;}`

4.  How do you link a CSS stylesheet to your HTML document?
    To link an external CSS stylsheet to your HTML document, you can use the `<link>` element inside the `<head>` element. Within the `<link>` element you should include href (the path to the CSS file), type (the type of document being linked to - value is text/css), and rel (the relationship between the HTML page and the file - value is stylesheet).

5.  When is it useful to use external stylesheets as opposed to using internal CSS?
    It is advantageous to use external stylesheets because it reduces repeated code in the HTML page and keeps HTML pages smaller. This also helps the pages load faster for the user because they only have to download the CSS stylesheet once. Additionally, changes in the CSS are easier to make if you link to an external stylesheet because you only have to make the change to the one stylesheet instead of going through and updating the CSS on each page individually.

6.  Describe what a color hex code is.
    Color hex codes are 6-digit codes that communicate an exact color. The code represents the amounts of red, green, and blue in the specified color. Hex codes always start with a `#`.

7.  What are the three parts of an HSL color property?
    The three parts of an HSL color property are hue, saturation, and lightness. Hue is an angle between 0 and 360 degrees. Saturation is a percentage. Lightness is also a percentage (0% is white, 50% is normal, and 100% is black).

8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
    * Serif: Serifs on the ends of the main strokes of letters
    * Sans-Serif: No serifs on the ends for a cleaner more modern look
    * Monospace: Every letter in the font is the same width

9.  When specifying font-size, what are the main three units used?
    If you want to control exactly how large text is, you can use pixels to specify font-size. You can also use percentages (where 16px is 100% by default) or EMS (where text is changed in proportion to the font-size in the parent element). EMS and percentages can be less precise because users can change their default text size, which skews percentages (they will still be the same proportions assigned but the actual size will vary based on the user's settings).
