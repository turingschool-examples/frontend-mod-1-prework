# Day 2 Exercises

## Chapter 3 & 4 Questions
1) There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  * Ordered lists ```<ol>``` are lists where each item is numbered. For example, a recipe with step by step instructions.
  * Unordered lists ```<ul> ``` are lists that begin with a bullet point, and the order isn't necessarily as important and with an ordered list.
  * Definition lists ```<dl>``` are made up of a set of terms along with the definitions for each of those terms.


2) What is the basic structure of an element used to link to another website?
  * The ```<a>``` element is the link element.
  * The structure is ``` <a href="the link for the page you want to go to">The text the user clicks on</a>```
  * The ```href``` attribute specifies the website address the link should take you to once clicked.
    * If you are linking to other sites, this should be an absolute URL.
    * If you are linking to other pages on the same site, you should use the relative URL.
  * Following the opening ```<a>``` tag is the link text. This is what the user sees and then clicks on. It should explains where visitors will be taken if they click on it (rather than just saying "click here").
  * Following the link text, you will close with the ```</a>``` tag.


3) What attribute should you include in a link to open a new tab when the link is clicked?
  * You use the target attribute.
  * You add this following the href attribute in the opening link tag  ```target="_blank"```


4) How do you link to a specific part of the same page?
  * First you want to identify points in the page that the link will go to.
    * This is called the id attribute.
    * TIPS:
      * The value of the id attribute should start with a letter or underscore (not a number nor any other character).
      * On a single page, no two id attributes should the same.
  * Then, to link to an element that has the id attribute identified, you use the ```<a>``` element, but the value of the href attribute is the # symbol followed by the value of the id attribute you want to link to.


## Chapter 10, 11 & 12 Questions
1) What's the purpose of CSS?
  * CSS associates rules with HTML elements, and these rules govern the way that the content elements should be displayed to users.


2) What does CSS stand for? What does cascading mean in this case?
  * Cascading Style Sheets
  * Cascading is referring to the fact that more than one rule or selector in CSS can be written for an HTML element, and this CSS code will "cascade" down in terms of prioritization.
    * Precedence rules:
      * Last Rule - if two selectors are identical, the latter of the two takes precedence
      * Specificity - if one selector is more specific than others, the more specific rule takes precedence over the more general ones.
      * Important - you can add ```!important``` after a property value to indicate that it should take precedence over other rules that apply to the same element.


3) What is the basic structure of a CSS rule?
  * A CSS rule contains two parts:
    * A selector which indicates which element the rule applies to
    * A declaration which indicates how the elements referred to in the selector should be styled
      * Declarations are made up of two parts (which are separated by a colon)
        * A property which indicates the aspects of the element you want to change
        * A value which specifies the settings you want to use for the chosen properties


4) How do you link a CSS stylesheet to your HTML document?
  * In your HTML document, under the ```<head>``` section you use the empty ```<link>``` element.
  * This follows the format of: ```<link href="path to the CSS file" type="type of document being linked to, text/css" rel="relationship between the HTML page and the file linked, stylesheet" />```


5) When is it useful to use external stylesheets as opposed to using internal CSS?
  * It is useful to use an external stylesheet when you have a website with more than one page. This is because it allows all pages to use the same style rules , which keeps the website looking uniform and consistent. This way if you want to change the style of the website, you only have to change one file versus each individual page (as long as each page is linked to the CSS stylesheet). This also makes the HTML code easier to read and edit since it doesn't have a lot of CSS rules.


6) Describe what a color hex code is.
  * A color hex code is a six-digit code that represents the amount of red, green and blue in a color. This code is made up of alpha and numeric characters, and begins with a #.


7) What are the three parts of an HSL color property?
  * Hue: the colloquial idea of color and is represented as a color circle. Since it's represented as a circle, the angle represents the color with values from 0 to 360.
  * Saturation: the amount of gray in a color, and is represented as a percentage with 0% being a shade of gray and 100% being full saturation of the color.
  * Lightness: the amount of white or black, and is represented as a percentage with 0% being black, 50% being normal, and 100% is white.
    * This is sometimes referred to as luminosity.


8) In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  * Serif: these have extra details on the ends of the main strokes of letters, and are typically used for long passages of text because they are easier to read.
  * Sans-serif: these have straight ends to letters and are often used when the text is small as it can be easier to read.
  * Monospace: these have a fixed-width between every letter and are commonly used for code because they align nicely and make the text easier to follow.


9) When specifying front-size, what are the main three units used?
  * Pixels
  * Percentages
  * Ems (an em is equivalent to the width of the letter m)



## CodePen
* Link: https://codepen.io/rnthomas/pen/PowRypE
