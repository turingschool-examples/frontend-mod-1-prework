## Read Chapters 3 and 4 on Lists and Links from HTML and CSS: Design and Build Websites
### Answer these questions about the reading:
<br />


1. #### There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?<br />
    **Ordered lists** are when a list must follow a specific order, the list is numbered 1, 2, 3(can use letter or roman numerals with an added type attribute).
    **Unordered lists** are marked with bullet points because the order it comes in isn't critical, it can be random order. Can also change bullet point style with an added type attribute. **Definition lists** is when you have terms(dt) and definitions(dd) of those terms that you want to list. These are shown by indentation rather than bullet or numbered list.  

2. #### What is the basic structure of an element used to link to another website?<br />

    Links are created using the "a" element with correct brackets of course.


3. #### What attribute should you include in a link to open a new tab when the link is clicked?<br />
    The href attribute.

4. #### How do you link to a specific part of the same page?<br />

    When one wants to link to a part of the same page it usually indicates that it may well be a very long page with many different sections to it.
    And to avoid too much scrolling for the reader you could create links back to the top or middle of the page by first identifying the areas of the page that the link will go to and then using the id attribute often in *heading* elements, followed by the **a** element and the **href** element but starting with the **#** symbol inside the quotation marked link/s of the opening tag.





## Read Chapters 10, 11, and 12 on What is CSS, Color, and Text from HTML and CSS: Design and Build Websites
### Answer these questions about the reading:
<br />

1. #### What is the purpose of CSS?<br />
CSS allows you to create rules that determine how the content of different elements should appear. By associating CSS style rules with HTML elements, you can control how text, page etc is displayed. Selector indicates chosen element, a paragraph, a header and the declaration(inside of curly brackets) says how it should be styled. This is shown in detail thru the property and value markers which can indicate a host of things: color, font, size, etc.

2. #### What does CSS stand for? What does cascading mean in this case?<br />
Cascading Style Sheets, used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages.<br />
Cascading is how rules will take precedence when there is more than one rule that applies to the same element.  

3. #### What is the basic structure of a CSS rule?<br />
The basic structure of a CSS rule is two parts, a **selector** and a **declaration**. A selector is any and all HTML elements and the declaration(inside curly brackets) declares how any given element should be styled. Inside the declaration are the property and value.

4. #### How do you link a CSS stylesheet to your HTML document?<br />
By using a link element inside of your HTML document in order to tell the browser where to find the CSS file used to style the page you are working on. **Link** is an empty element and it lives inside the **head** element. For example one link element using href= type= and rel= for using external CSS.

5. #### When is it useful to use external stylesheets as opposed to using internal CSS?<br />
External CSS allows authors of a webpage to use one css file for multiple web pages. This way you are not repeating code for every page, on each HTML page you can use the link element to get to the same CSS document.   Internal CSS is when you use a **style** element within an HTML page which usually sits inside the **head** element as well and tells that page what rules you want applied to which elements. This is better if you are just creating a single page.   

6. #### Describe what a color hex code is.<br />
It's a 6 digit code that represents the amount of red, green and blue in a color. When written it is preceded by a pound or hash sign(#) followed by six digits.


7. #### What are the three parts of an HSL color property?<br />
   **Hue:** expressed as an angle between 0 and 360<br />
   **Saturation:** expressed as a percentage<br />
   **Lightness:** expressed as a percentage 0% being white, 50% being normal and 100% being black


8. #### In the world of typeface, what are the three main     categories of fonts?<br />
   Serif, Sans-Serif, and Monospace
   #### What are the differences between them?
   **Serif** typeface has details on ends of main strokes, used in long passages of text cause it was considered easier to read.**Sans-serif** have straight ends on letter which is considered much cleaner design and clearer to read.**Monospace** letters have fixed widths, and are commonly used for coding because they are considered to align nicely.

9. #### When specifying font-size, what are the main three units used?<br />

  **Pixels,** give very precise control, number of pixels followed by px (12px).
  **Percentages,** for example font-size: 200%;<br />
  **EMS,** an em is equivalent to the letter m.
  <hr />
  CODEPEN UPDATE: https://codepen.io/stephlsohns/pen/ZEYeXEq
