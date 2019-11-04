### Reading (Chapters 3 and 4 of HTML/CSS)

**1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?**

   1. `<ol></ol>` Ordered lists use numbers.
   
   2. `<ul></ul>` Unordered lists use bullets.
   
   3. `<dl></dl>` Definition lists are used to define terminology and usually consist of terms and their definitions.

<br />

**2. What is the basic structure of an element used to link to another website?**

Links are created using the `<a></a>` element. The text between the opening and closing tag is known as link text and is what is displayed on the page. The `href` attribute is used to specify the destination of the link. The `href` value specifies an absolute URL, relative URL or mailto value depending upon the desired outcome.

<br />

**3. What attribute should you include in a link to open a new tab when the link is clicked?**

The `target` attribute should be used with a value of `_blank`. The full syntax therefore appears as such: `<a href="URL" target="_blank">Link text</a>`.

<br />

**4. How do you link to a specific part of the same page?**

This is accomplished by selecting an element on the page that you wish to target with your link and assigning a value to its `id` attribute. Then, in the `<a></a>` element, appending # and the value of the `id` attribute to the end of the URL (absolute or relative) that is being targeted. For example, to target an element with `id="top"` we could use the following syntax: `<a href="URL/#top">Link text</a>`.

<br />
 
### Reading (Chapters 10, 11, and 12 of HTML/CSS)

**1. What is the purpose of CSS?**

CSS uses rules to apply style to HTML elements.

<br />
 
**2. What does CSS stand for? What does cascading mean in this case?**

Cascading Style Sheets. The word cascading refers to the way in which multiple CSS rules may apply to the same element and the specificity of the selector will determine which rule is applied. If two selectors have the same level of specificity, then the latter rule will be applied.

<br />
 
**3. What is the basic structure of a CSS rule?**

CSS rules contain a selector and a declaration. A property and value compose the declaration and there can be multiple declarations per selector. The basic syntax therefore may appear as follows: `selector {property: value;}`. The role of the selector is to indicate which element(s) the rule applies to. The declaration indicates how the elements specified by the selector should be styled.

<br />
 
**4. How do you link a CSS stylesheet to your HTML document?**

The `<link>` element allows us to link an external style sheet to our HTML document. The `<link>` element is an empty element and it is nested within the `<head></head>` element. It should use three attributes: `href` (the path to the CSS file), `type` (the type of document being linked to, e.g. "text/css"), and `rel` (the relationship, e.g. "stylesheet"). An HTML page can link to and use multiple CSS style sheets.

<br />
 
**5. When is it useful to use external stylesheets as opposed to using interal CSS?**

External stylesheets should almost always be used. Although it is not best practice, one may consider using internal CSS if they are creating a simple, single page site.

<br />
 
**6. Describe what a color hex code is.**

A six digit code that represents the amount of red, green, and blue in a color.

<br />
 
**7. What are the three parts of an HSL color property?**

   1. Hue - Typically thought of as the color itself.
   
   2. Saturation -  The amount of gray in a color.
   
   3. Lightness (or luminosity) -  The amount of white or black in a color.

<br />
 
**8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?**

   1. Serif - Serif fonts contain serifs, small lines attached to the end of letter strokes. They were traditionally considered easy to read and therefore used in long passages of text.
   
   2. Sans-serif - Sans-serif fonts do not contain serifs. Their appearance is therefore simple and clean due to the straight ends of the letter strokes. Sans-serif fonts are useful on lower resolution devices where their clean appearance may offer improved readability.
   
   3. Monospace - Monospace fonts, also referred to as fixed-width fonts, use characters of the same width. This is in direct opposition to proportionally spaced fonts, which have characters of differing widths. Monospace fonts align well, which can be useful in certain applications, such as coding.

<br />
 
**9. When specifiying font-size, what are the main three units used?**

   1. Pixels
   
   2. Percentages
   
   3. Ems

<br />
