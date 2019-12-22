### Chapters 3 and 4:
## There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
**Ordered** lists are lists that use numeric numbers like this:
1. First item
2. Second item
3. Third item

**Unordered** lists are lists that don't use a number, but rather bullet points:
* First item
* Second item
* Third item

**Definition** lists are lists that use definitions to accompany each item.
## What is the basic structure of an element used to link to another website?
`<a href="http://www.genericurl.com">Generic URL</a>`

##  What attribute should you include in a link to open a new tab when the link is clicked?
If I wanted the pervious link to be opened in a new tag, I would use the `target` attribute:
`<a href="http://www.genericurl.com" target="_blank">
Generic URL <a/>`
## How do you link to a specific part of the same page?
If I wanted to include a "Take me to the top of this page" link on the bottom of my page, I would add an id attribute to the line of code nearest the top of my page:
`<h1 id="top">Generic Header</h1>`
Then, I would need a corresponding element and the bottom of the page which returns the user to the first line with the id attribute:
`<p><a href=""#top">Top</a></p>`

### Chapters 10, 11, and 12:
##  What is the purpose of CSS?
CSS allows us to create rules for how our content should be displayed.
## What does CSS stand for? What does cascading mean in this case?
_CSS_ stands for __Cascading Style Sheet__. _Cascading_ here means that the different style fall from one style sheet to another, allowing us to use multiple style sheets on one HTML document.
## What is the basic structure of a CSS rule?
A basic CSS rule contains a _Selector_ (indicates which element the rule applies to), and a _Declaration_ (indicates how the indicated elements should be styled).

```css
h1 {
    font-family: times new roman;}
```
## How do you link a CSS stylesheet to your HTML document?
In the `<head>` element, you can use the `link` element to tell the browser where to find the CSS file used to style the page:
```
<head>
  <title>How to Link CSS Style</title>
  <link href="css/styles.css" type="text/CSS"
    rel="stylesheet" />
```
## When is it useful to use external stylesheets as opposed to using internal CSS?
Using an external stylesheet is useful when you are building a site with more than one page, because you can:
* use the same style rules on all pages
* it keeps the content separate from how the page looks
* it allows you to make changes to all pages by altering just one file

## Describe what a color hex code is.
A color hex code is a 6 digit codes preceded by a pound sign _#_ that represents the amount of red, green and blue in a color.
## What are the three parts of an HSL color property?
1. __Hue__
* "The colloquial idea of color." It is represented by a value between 0-360
2. **Saturation**
* The amount of grey in a color, represented as a percentage. 100% is full saturation and 0% is a shade of gray.
3. **Lightness**
* The amount of white or black in a color. It is represented as a percentage. 0% lightness is black, 100% lightness is white, and 50% lightness is referred to as _luminosity_.
## In the world of typeface, what are the three main categories of fonts? What are the differences between them?
1. __Serif__
* These fonts have extra details on the end of the main strokes of the letters. (Georgia, Times and Times New Roman are all _serif_ fonts)
2. __Sans-Serif__
* These fonts have straight ends to letters and provide a clean design. (Ariel, Verdana and Helvetica are examples of _sans-serif_ fonts)
3. __Monospace__
* Every letter in these fonts are the same width. (Courier and Courier New are common examples of _monospace_ fonts)
## When specifying font-size, what are the main three units used?
1. __Pixels__
* Pixels are used when a designer wants precise control over how much space their text takes up. (identified by a number followed by '_px_')
2. __Percentages__
* Used to specify how big you want your font relative to the 16px standard used by browsers (200% = 32px, 50% = 8px, etc.)
3. __EMS__
* Changes the size of text relative to the size of the text in the parent element.
