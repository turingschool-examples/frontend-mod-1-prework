Day 2 Exercises

Chapter 3 & 4

## There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
Ordered list – A list where each item in the list is numbered. For example, a set of steps for a recipe that must be performed in order, or a legal contract where each point needs to be identified by a section number

Unordered list – A list that begins with a bullet point.

Definition list – Made up of a set of terms along with the definitions for each of those terms.

## What is the basic structure of an element used to link to another website?
<a href=”http://www.linkhere.com”>Link Here</a>

## What attribute should you include in a link to open a new tab when the link is clicked?
The target attribute.

## How do you link to a specific part of the same page?
Before you can link to a specific part of a page, you need to identify the points in the page that the link will go to. You do this using the ‘id’ attribute.

The value of the id attribute should start with a letter or underscore (not a number or any other character) and, on a single page, no two id attributes should have the same value.

To link to an element that uses an id attribute, you use the <a> element again, but the value of the href attribute starts with the # symbol, followed by the value of the id attribute of the element you want to link to.

## Chapter 10, 11, & 12

## What is the purpose of CSS?
CSS allows you to create rules that specify how the content of an element should appear.
For example, you can specify that the background of a page is cream, all paragraphs should appear in gray using the Arial typeface, or that all level one headings should be in a blue, italic, Times typeface.

## What does CSS stand for? What does cascading mean in this case?
CSS stands for Cascading Style Sheets. Cascading means that styles can fall (or cascade) from one style sheet to another, enabling multiple style sheets to be used on one HTML document.

## What is the basic structure of a CSS rule?
A CSS rule contains two parts: a selector and a declaration.

## How do you link a CSS stylesheet to your HTML document?
The <link> element can be used in an HTML document to tell the browser where to find the CSS file used to style the page. It is an empty element (meaning it does not need a closing tag), and it lives inside the <head> element. It uses three attributes: href, type, and rel. Example below:
<link href=”css/style.css” type=”text/css” rel=”stylesheet” />

## When is it useful to use external stylesheets as opposed to using internal CSS?
When building a site with more than one page, you should use an external CSS style sheet.

## Describe what a color hex code is.
A hex code is a six-digit code that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. For example: #ee3e80.

## What are the three parts of an HSL color property?
Hue, Saturation, and Lightness
## In the world of typeface, what are the three main categories of fonts? What are the differences between them?
Serif - Serif fonts have extra details on the ends of the main strokes of the letters. These details are known as serifs. In print, serif fonts were traditionally used for long passages of text because they were considered easier to read.
Sans-Serif – Sans-serif fonts have straight ends to letters, and therefore have a much cleaner design. Screens have a lower resolution than print. So, if the text is small, sans-serif fonts can be clearer.
Monospace – Every letter in a monospace (or fixed-width) font is the same width. Non-monospace fonts have different widths. Monospace fonts are commonly used for code because they align nicely, making the text easier to follow.

## When specifying font-size, what are the main three units used?
Pixels, Percentages, and EMs.
