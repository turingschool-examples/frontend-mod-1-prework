**1.  There are three main types of lists in HTML: ordered, unordered and definition.  What are their differences?**


- In an ordered list each item in the list is numbered.  It is created with the ordered list element and appears as ol and /ol inside of brackets.

- Unordered lists begin with a bullet point and don't require order.  It is created with the unordered list
element and appears as ul and /ul inside of brackets.

- Definition lists are made up of a set of terms along with the definitions for each of those terms.  It is created with the definition list element and appears as dl and /dl inside of brackets.  Inside of the definition list element you will usually see pairs of dt and /dt inside of brackets as well as dd and /dd inside of brackets.  The dt element is used to contain the term being defined.  The dd element is used to contain the definition.


**2.  What is the basic structure of an element used to link to another website?**

  href="the page the link takes you to">THETEXTTHEUSERCLICKSON, which appears inside of a and /a surrounded by brackets

  Links are created using the a and /a element which has an attribute named href.  The value of the href attribute is the page that you want people to go to when they click on the link.  Users can click on anything between the a opening and closing tags.  From there they will be taken to the page in the href attribute.  All of the text between the opening and closing a tag is called link text.  After the link you want to clearly describe where the user will be going if they click on the link.  

**3.  What attribute should you include in a link to open a new tab when the link is clicked?**

  Use the target attribute on the opening a tag if you want a link to open in a new tab or window.  The value of this attribute should be "blank" with an underscore immediately proceeding it.

  For example: `<a href="http://www.cnn.com" target="_blank"CNN</a>`

**4.  How do you link to a specific part of the same page?**

  First, identify the spot in the page where the link should go.  Then accomplish this using the id attribute.  The value of the id attribute should start with a letter or underscore.  When on a single page no two id attributes should share the same value.  Use the a element again to link to an element that uses an id attribute.  The value of the href attribute starts with a #.  It is followed by the value of the id attribute of the element you want to link to.  

  For example:  

      <h1 id="top">Stores in the Mall</h1>
      <p><a href="#top">Top</a></p>


**1.  What is the purpose of CSS?**

  CSS allows for the creation of rules that determine how the content of an element should appear including colors and fonts.  It works by associating style rules with HTML elements.  CSS properties determine how elements are displayed.

**2.  What does CSS stand for?  What does cascading mean in this case?**

  CSS stands for Cascading Style Sheet.  Cascading, in terms of defining what CSS stands for, means that styling rules can cascade from one style sheet to another allowing multiple style sheets to be used on one HTML document.

**3.  What is the basic structure of a CSS rule?**

  A CSS rule contains a selector and a declaration.  Selectors determine which element the rule applies to.  Declarations determine how the elements mentioned in the selector should be styled.  Declarations are then split into two parts: a property and a value which are separated by a colon.  Properties determine the parts of the element you want to change.  Values identify the settings you want to use for the given properties.

  For example:

  p  {
    font-family: Georgia;
  }

  h1, h2, h3 {
              font-family:  Georgia;
              color: red}

**4.  How do you link a CSS stylesheet to your HTML document?**

  Use the link element in an HTML document to tell the browser where to find the CSS file used to style the page.  It is an empty element and lives inside the head element.  It uses three attributes.  The href attribute specifies the path to the CSS file identifies the path to the CSS file.  The type attribute identifies the type of document being linked to.  The rel attribute identifies the relationship between the HTML pages and the file it is linked to.  

  It is also possible to link a CSS stylesheet to your HTML document by placing it inside a style element inside the head element of the page.  Make sure the style element uses the type attribute to indicate that the styles are specified in CSS.

**5.  When is it useful to use external stylesheets as opposed to using internal CSS?**

  When building a website with more than one page, use an external CSS style sheet.  It allows all pages to use the same style rules, keeps the content separate from how the page looks and allows you to change the styles used across all pages by altering just one file.  An internal stylesheet is used when a single HTML page has a unique style.

**6.  Describe what a color hex code is.**

  A color hex code is a six-digit code that represents the amount of red, green and blue in a color.  It can specify background and foreground colors and is preceded by a # symbol.

  For example:  #66cdaa

**7.  What are the three parts of an HSL color property?**

  HUE, SATURATION, LIGHTNESS

- Hue is often represented as a color circle where the angle represents the color.  It may also be shown as a slider with values from 0 to 360.
- Saturation refers to the amount of gray in a color.  It is expressed as a percentage where 100% is full saturation and 0% is a shade of gray.
- Lightness is the amount of white (lightness) or black (darkness) in a color.  Lightness is represented as a percentage where 0% lightness is black, 100% lightness is white and 50% lightness is normal.  It is sometimes referred to as luminosity.  It is important to note that lightness is different than brightness.  Brightness only adds black whereas lightness can add both white and black.

**8.  In the world of typeface, what are the three main categories of fonts?  What are the differences between them?**     

  SERIF, SANS-SERIF, MONOSPACE

- Serif fonts have extra details on the ends of the main strokes of the letters.  These details are known as serifs.  Serif fonts have traditionally been used in print for long passages of text because they were considered easier to read.  
- Sans-serif fonts have straight ends to letters making for a much cleaner design.  If the text is small sans-serif can be more clear to read.
- In a monospace font every letter is the same width.  Monospace fonts are commonly used for code because the align nicely, making text easier to follow.  

**9.  When specifying font-size, what are the main three units used?**

  PIXELS, PERCENTAGES, EMS

- Pixels allow web designers very precise control over how much space their text takes up.  The default size of text in a browser is 16 pixels. Setting font size in pixels is the best way to ensure that the type appears at the size you desired.
- Percentages are utilized by presenting a percentage of the default size of the text in the browser.
      For example:
        -Default size for text in browsers is 16px
        -75% would be the equivalent of 12px
        -200% would be the equivalent of 32px
- An em is equal to the width of a letter m.  They allow you to change the size of text relative to the size of the text in the parent element.  
