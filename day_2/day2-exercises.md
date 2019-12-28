# Day 2 Exercises

## Chapters 3-4

## 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
+ Ordered lists are numbered.
+ Unordered lists have bullets rather than numbers (for when order does not matter).
+ Definition lists consist of a set of terms and their definitions.
## 2. What is the basic structure of an element used to link to another website?
Links are created using the `<a>` element with the `href` attribute.
+ For example: `<a href="http://www.example.com">Example</a>`
## 3. What attribute should you include in a link to open a new tab when the link is clicked?
You can use the target attribute on the opening `<a>` tag, and the value of this attribute should be `_blank`.
+ For example: `<a href="http://www.example.com" target="_blank">Example</a>`
## 4. How do you link to a specific part of the same page?
First, you need to identify the element where the link will go using the `id` attribute. Then, using the `a` element, set the link source to `#` followed by the `id` name.
+ For example: `<a href="#prologue">Prologue</a>`

## Chapters 10-12

## 1. What is the purpose of CSS?
CSS allows you to create a set of rules to change the appearance of elements. It's used to decorate your page in a sense.
## 2. What does CSS stand for? What does cascading mean in this case?
CSS stands for Cascading Style Sheets. Since more than one style sheet declaration could apply to a particular piece of HTML, the rule used is chosen by cascading down from the more general declaration to the most specific (which is the declaration chosen).
## 3. What is the basic structure of a CSS rule?
A CSS rule is made up of a selector (which indicates which element the rule applies to) and a declaration (which indicates how the selector will be styled).
## 4. How do you link a CSS stylesheet to your HTML document?
For an external CSS sheet, you use the `<link>` element in an HTML document, which lives inside the `<head>` element, to tell the browser where the CSS file is located. It should use the `href`, `type` and `rel` attributes.

For internal CSS, you use the `<style>` element, which is usually placed inside the `<head>` element. It should use the `type` attribute, which should be set to text/css (which is the same as the external method).
## 5. When is it useful to use external stylesheets as opposed to using interal CSS?
You should use an external stylesheet when building a site with more than one page. It allows all the pages to use the same style rules, it keeps the content separate from the styling, and it allows you to change styles used across all pages.
## 6. Describe what a color hex code is.
A hex code is a six-digit code that represents the amount of red, green and blue in a color preceded by a pound sign.
## 7. What are the three parts of an HSL color property?
Hue, Saturation and Lightness.
## 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?
Serif fonts have extra details on the ends of the main strokes. Sans-serif fonts have a clean design without the extra details. Monospace fonts are made up of letters that each have the same width.
## 9. When specifiying font-size, what are the main three units used?
There are pixels (px), percentages and ems (equivalent to the width of a letter m).
