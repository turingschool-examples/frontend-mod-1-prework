### There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
<b>Ordered lists</b> `<ol></ol>` are following a specific order, steps that cannot be done randomly they must be followed in their given order. <b>Ordered lists</b> use numbers to show this.

<i>Unordered lists</i> `<ul></ul>` are just that, they are not in any particular order, they are listed but the order is not essential as it is in an ordered list. Unordered lists use bullets.

<strong>Definition lists</strong> `<dl></dl>` are used to define terms. There is the actual term being defined `<dt></dt>` and then there is the actual given definition `<dd></dd>` for that term.

### What is the basic structure of an element used to link to another website?

The basic structure is that of the `<a>` element. Whatever website address you put between the opening `<a>` tag and the closing `<a>`tag, links the user to that site. This is known as link text. See just below for more explanation in the next answer.


### What attribute should you include in a link to open a new tab when the link is clicked?

The <strong>href</strong> attribute. This attribute goes inside the opening `<a>` tag, <a href=website name in quotes, >site name</a. For example '<a href="http://turing.io">turing</a>'


### How do you link to a specific part of the same page?

By using the id attribute which is used to identify specific elements from other elements on the page. Every HTML element can carry the id attribute. One must first identify the points within the page that the link will go to and then enter the id attribute accordingly.
### Add to your Pen from Day 1: <strong>DONE</STRONG>
Two lists: ordered and unordered.

A link to your GitHub account.

A link to the Turing website.

### What is CSS, Color, and Text from HTML and CSS: Design and Build Websites
Answer these questions about the reading in your day2-exercises.md:

<i>What is the purpose of CSS?</i> <strong>Greater Freedom & Creativity</strong> It allows you to play with text content, background, etc. It associates style rules with all HTML elements.

<i>What does CSS stand for?</i> <b>Cascading Style Sheets</b> <br />
<i>What does cascading mean in this case?</i> <br />
I believe this is when there are 2 or more rules applying to the same element, and which one will take precedence. (I think)



<i>What is the basic structure of a CSS rule?</i> <br >
A CSS rule contains two parts: a <strong>selector</strong> and a <strong>declaration</strong>.

<i>How do you link a CSS stylesheet to your HTML document?</i> Inside the head element, first with the title element specifying that you are introducing a CSS stylesheet, then use the `<link>` element with href and name of file that way when its clicked on it will open to that information.

<i>When is it useful to use external stylesheets as opposed to using interal CSS?</i> <br />
So that your web pages can share the same style sheet resulting in less code and smaller HTML pages.

<i>Describe what a color hex code is.</i> <br />
These are 6 digit codes that represent the amount of red, green and blue in a color. The code itself is preceded by a pound or hash sign.

<i>What are the three parts of an HSL color property?</i> <br />
Hue, Saturation, and Lightness. HSL was introduced as an alternative way to specify colors.

<i>In the world of typeface, what are the three main categories of fonts? What are the differences between them?</i> <br />
FONT-FAMILY: users computer needs typeface installed. <br />
FONT-FACE: CSS specifies where a font can be downloaded from if it is not installed in the computer already. <br />
SERVICE-BASED FONT-FACE: Commercial services give users access to a wider range of fonts.

<i>When specifiying font-size, what are the main three units used?</i> <br />
Pixels, Percentages, and Ems.
