Chapters 3 and 4
1. Ordered lists will be in a hierarchical order using numbers, roman numerals, or letters. Unordered lists use bullets or icons as line markers and are a collection that has no order or hierarchy. A definition is a term paired with a description. Multiple terms can be applied to one description, and vice versa.
1. <a href="file path or link">Visible hyperlink text</a>
1. target="_ blank" (but no space...was causing weird text formatting when I did it correctly...)
1. You add an id to the section of html you want to reference in the link, and then use that as the href destination.

ex. <body id="location"></body> could be referenced using <a href="#location">location</a>


Chapters 10-12
1. The purpose of CSS is to manipulate the visual presentation and style of the HTML document. IE. Make it pretty.
1. Cascading Style Sheets. The cascading part means that the CSS document is hierarchical, both in the way the HTML is written and in the position top-down of the order rules are written.
1. selector {declaration}, declaration has a property and value.
Ex: p {background-color: cyan;}
1. You link a stylesheet to an HTML document by creating a link tag in the head. This looks like:
<head>
  <title>CSS Link Example</title>
  <link href="css/styles.css" type="text/css" rel="stylesheet" />
</head>
1. External style sheets are useful when applying styles across an entire website. Each page can link to the same stylesheet which gives a consistent appearance to the site. It also makes making any style changes easier since they only need to be changed in one place.
1. The color hex code is a method of representing color in hexadecimal code. It is split into 3 pairs, and each pair represents a color part of RGB.
1. Hue, Saturation, Light
1. Serif, Sans Serif, Monospace. Serif has the little ends on each character, like Times New Roman. Sans-Serif is just that, without Serif like Arial or Helvetica. Monospace means that all characters take up the same width of space.
1. Pixels, Percentages, and EMs

Codepen Link: https://codepen.io/grayson-palmer/pen/RwbZBNL
