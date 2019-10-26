1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
- ordered lists employ a hierarchal system where items are numbered 1.,2.,3… etc.
- unordered lists present items in a bulleted fashion
- definition lists contain a term and then the definition for that term is indented below

2.  What is the basic structure of an element used to link to another website?
-the basic structure is:
<a href="http://www.thewebsite.com">Text_the_user_sees</a>

3.  What attribute should you include in a link to open a new tab when the link is clicked?
-*target=_blank*
*/in this example: <a href=“http://www.imdb.com" target=“_blank”>Internet Movie Database</a>
-this will open IMDB in another window*

4.  How do you link to a specific part of the same page?
- first, to link to a part of the same page, you must use the id attribute <id> this will identify the portion of the page that you want the link to move to
- the value of the <id> attribute must begin with a letter or an underscore
- id attributes can be added to the <h1> <h2> etc. elements to distinguish which part of the content to move to.

With the page you created in CodePen on Day 1 (that included Structure and Text), add to it:

√   Two lists: ordered and unordered.
√   A link to your GitHub account.
√   A link to the Turing website.

1.  What is the purpose of CSS?
- CSS allows you to create rules that specify how the content of an element should appear.

2.  What does CSS stand for? What does cascading mean in this case?
- CSS stands for Cascading Style Sheets
- Cascading means that one style can be applied to all working pages of a website, and multiple rules can apply to the same element.

3.  What is the basic structure of a CSS rule?
- The basic structure of a CSS rule is that it contains two parts:
    p {
      font-family : Arial;
    }
  - where p is the selector
  - and font-family : Arial; is the declaration

4.  How do you link a CSS stylesheet to your HTML document?
- <head>
    <title>
      <link href="css/styles.css" type="text/css" rel="stylesheet" />
    </title>
  </head>
- the <link> element is used to tell the HTML file where to find the CSS file, it is an empty element (meaning it doesn't need a closing tag), and it is found in the <head> of the HTML doc.
- href- this specifies the path the the CSS file
- type- this attribute specifies the type of document being linked to. The VALUE SHOULD BE text/css!
- rel- this specifies the relationship between the HMTL page and the file linked to it. THE VALUE SHOULD BE stylesheet WHEN LINKED TO IT!
- multiple CSS files can be used to describe one HTML doc - for instance one CSS for font/colors and another for layout.

5.  When is it useful to use external stylesheets as opposed to using internal CSS?
- It is useful and necessary to use an external style sheet when styling a website that has multiple pages. But, if the site only has a single page it can be styled internally by adding the CSS code in the <head> of the HTML doc.

6.  Describe what a color hex code is.
- A hex code is a 6 digit code that denotes a color; the code represents how much red. green, and blue (RGB) are in a color.
- This is the format: #d93494

7.  What are the three parts of an HSL color property?
- Introduced in CSS3 / HSL stands for - HUE SATURATION LIGHTNESS
- HUE has values of 0-360 (think circular slider)
- SATURATION this is expressed as a 0-100%
- LIGHTNESS this is expressed as a percentage
  - 0% being white, 50% being normal, and 100% being black
- The syntax looks like this: background-color:{ hsl(0, 0%, 7.8%); }

8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
- Serif, San-serif, and monospace
  - serif letters include "feet" that seem to anchor them to the baseline
  - san-serif faces are more streamlined and smooth looking with no feet
  - every letter in a monospace face is the same width (no monospaced typefaces have different widths)

9.  When specifiying font-size, what are the main three units used?
- three main units of measure for defining a font-size are:
  1. pixels
    - a common used measurement so that designers know how much area their type is taking up pixels are defined as a: 9px a number followed by px
  2. percentages
    - the default size of type in a web browser is 16px; so 75% would be 12px, and 150% would be 24px
  3. ems (or the width of an 'm' or 'em dash')
    - { font-size: 1.3em; }

Add to the page you created in CodePen on Day 1:

√   Add a color to the text of all of your headings (using hex codes).
√   For your `h1` heading, add a background color.
√   Make your headings a serif font, and make the paragraph text a sans-serif font.
√   Change a snippet of paragraph text to be italic using the font-style property (do not use the `<i></i>` in this case).

LINK to my CODEPen work:
  https://codepen.io/infamouskeyduster/pen/MWWoaOG
