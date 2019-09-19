# Part One #

## There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences? ##
  **Ordered Lists**  `<ol></ol>` are lists where each item in the list is numbered. For example a set of steps in a recipe that must be performed in the proper order. Another example would be a daily routine, where events happen sequentially.
 
**Unordered Lists** `<ul></ul>` are lists that begin with a bullet point. For example a table of contents or a grocery food list. 

**Definition Lists** `<dl></dl>` are made up of a set of terms along with the definitions for each of those terms. An example would be a dictionary list of terms, or a glossary. Both ordered and unordered lists will also use the notation tag `<li></li>` for each item listed. Definition lists will use the tag `<dt></dt>` to conttain the term being defined, and `<dd></dd>` to contain the definition.

## What is the basic structure of an element used to link to another website? ##
  `<a href-"http://www.turing.io">Turing</a>` Is a basic link element. The text between the opening and closing <a> tag, *Turing* is the link text. This is what the user reads on the page. This text should be used to inform the user where the link will take them. The text, "http://www.turing.io" is the page the link takes you to. The "a href" is simply the opening link tag structure.

## What attribute should you include in a link to open a new tab when the link is clicked? ##
  If you want the link to open in a new window/tab, you should use the target attribute on the opening <a> tag. The value of this attribute should be _ _blank_.
  `<a href="http://www.turing.io" target="_blank">Turing</a>`. It's good practice to inform the user the link will open on a new page when using this attribute.

## How do you link to a specific part of the same page? ##
  Using the id attribute you can link to different parts of a page. You set up your webpage with the id tags giving them specific names, so later you can reference those names and the webpage knows where you want to end up. For example:
  `<h1 id="top"></h1>` `<h2 id="Introduction"></h2>` `<h3 id="YouTube"></h3>`
  When jumping to a certain part of the page with the id tag one must reference the names given.
  `<a href="#top"></a>` `<a href="#Introduction"></a>` `<a href="#YouTube"></a>`
  The id tag should always start with a letter or an underscore, not a number.

# Part Two #

## What is the purpose of CSS? ##
  Cascading Style Sheets, or CSS, allow you to create rules that control the way each individual element is displayed and presented. If HTML was the skeleton of a webpage, CSS would be everything else that makes it human. A CSS rule contains two parts: a selector and a declaration.

## What does CSS stand for? What does cascading mean in this case? ##
  Cascading Style Sheets. "Cascading in this context means that because more than one stylesheet rule could apply to a particular piece of HTML, there has to be a known way of determining which specific stylesheet rule applies to which piece of HTML. The rule used is chosen by cascading down from the more general rules to the specific rule required. The most specific rule is chosen." [Source](https://stackoverflow.com/questions/1043001/what-is-the-meaning-of-cascading-in-css)
  If two selectors are identical, the latter of the two will take precedence.

## What is the basic structure of a CSS rule? ##
  CSS consists of two parts; a selector and a declaration. *Selectors* indicate which element the rule applies to. The same rule can apply to more than one element if you separate the element names with commas. *Declarations* indicate how the elements referred to in the selector should be styled. Declarations are split into two parts; a property and a value. *Properties* indicate the aspects of the element you want to change. *Values* specify the setting you want to use for the chosen properties.

## How do you link a CSS stylesheet to your HTML document? ##
  `<link href="css/my_style.css" type="text/css" rel="stylesheet" />` will link to an external CSS sheet.

  ```<style type="text/css>"
        body {
          font family: arial;
          background-color: rgb(185, 131, 176); }
        h1
          color: rgb(255, 255, 255);
        }
      </style>
  ```
  This is internal CSS, where you build the code within the same page.

## When is it useful to use external stylesheets as opposed to using internal CSS? ##
  External is recommended when building more than one webpage that would use the same CSS. This saves you the time of typing it out more than once, and allows you to edit one sheet for all pages, instead of editing each one individually. It also allows you to link more than one CSS to a page.
  
  Internal is good for when you are specifically editing one web page, separate from the others. It allows you to build the style rules directly into the page.
## Describe what a color hex code is. ##
  A six digit code that represents the amount of red, green, and blue in a color, proceeded by a hash or pound sign. `color: #ee3e80`

## What are the three parts of an HSL color property? ##
  **Hue, Saturation, & Lightness**
  Hue is color. Hue is often represented as a color wheel, or a slider bar from 0 to 360.
  
  Saturation is the amount of gray in a color. Saturation is represented as a percentage of zero 0% to full 100%.
  
  Lightness is the amount of white or black in a color. Lightness is also represented as a percentage with white 100% and black 0%.

## In the world of typeface, what are the three main categories of fonts? What are the differences between them? ##
  **Serif, Sans-Serif, & Monospace**
  Serif fonts have extra details on the ends of the main strokes of the letters. These details, or tails, are known as serifs.
  
  Alternatively Sans-Serif means without serif. Sans-serif fonts have straight ends, and therefore have a cleaner design.
  
  Monospace font keeps every letter the same width. Monospace fonts are commonly used for code because they align nicely.

## When specifying font-size, what are the main three units used? ##
  **Pixels, Percentages, & EMS**
  Pixels are commonly used because they allow web designers very precise control over how much space their text takes up. The number refers to actual pixel size.
  Percentages refer to standard pixel size of 16px. Percentages tell the browser a percentage to multiply times 16.
  An EM is equivalent to the width of a letter m. For example `font size: 1.3em`
