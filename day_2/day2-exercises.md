1. **There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?**
- **Ordered lists** - are numbered lists and typically the steps must be done in order. The steps to make recipe would be a good example of an ordered list.
- **Unordered lists** - are marked by a dot or an asterisk. The steps do not typically need to be done in order. Gathering the ingredients for a recipe would be a good example of an unordered list.
- **Definition lists** - are a set of terms and the definition for those terms.

1. **What is the basic structure of an element used to link to another website?**
To link to another page you use an opening and closing `<a>` tag and set the `href` attribute to the value of the URL that you would like to link to. The information that you place between the opening and closing `<a>` will be the way the the link appears on the webpage.
`<a href= "https://www.nfl.com/">NFL website</a>`

1. **What attribute should you include in a link to open a new tab when the link is clicked?**
You would use the "target" attribute to open a new tab when the link is clicked. The target attribute is typically set to `"_blank"` and it is good practice to let the user know that a new tab will be opened.

1. **How do you link to a specific part of the same page?**
To link to a specific part of the same page you would use the `"*id*"` attribute to name the specific part of the page that you would like to link to. When it's time to create the actual link you assign the value of `"href"` hashtag (ID defined earlier).
`<a href= "#top">Back to Top</a>`

1. **What is the purpose of CSS?**
CSS allows you to create rules that will specify how the content of an element will be displayed on the page.


1. **What does CSS stand for? What does cascading mean in this case?**
CSS stands for *cascading style sheet*. Cascading in CSS refers to the idea that multiple style sheets can be used on an HTML document. It also seems to refer to the idea that more than one rule can apply to an HTML element and that the most specific declaration is the one that is chosen and displayed.

1. **What is the basic structure of a CSS rule?**
A CSS rule is made up of a *selector* and a *declaration*, the declaration is made up of a *property* and a *value*. `p {
  font-family: bold;
  }`

1. **How do you link a CSS stylesheet to your HTML document?**
In order to link a CSS stylesheet to an HTML document you place the `<link>` element inside of the `<head>` element in your HTML file. The `<link>` element will include:
- `href` attribute which specifies the path the the CSS file.
- `type` attribute which specifies the type of file being linked to the HTML file.
- `type` attribute which specifies the relationship between the HTML file and the page that it is linked to.
`<link href = "path/styles.css" type = "text/css" rel = "stylesheet">`

1. **When is it useful to use external stylesheets as opposed to using interal CSS?**
It's useful to use external style sheets when your site contains multiple HTML files because you can link all of your pages to the same stylesheet. This will mean that you will have to write less code and that the site will load faster. It is also easier to make changes to your site because you will only need to adjust one CSS file and your changes will apply to all of the HTML files. It also assures that all of your changes are uniform across all of the HTML files.

1. **Describe what a color hex code is.**
A color hex code has 6 spaces and uses numbers and letters to adjust the Red, green, and blue values of an element. Each color Red, Green, and Blue is assigned a 2 character hex code that adjusts that specific color. When the Three colors are combined they can make any number of colors.  

1. **What are the three parts of an HSL color property?**
The three parts of and HSL color property are:
- *Hue* selects the color. It is typically represented by a color wheel.
- *Saturation* which adjusts that amount of grey in a color from 0% to 100%.
- *Lightness* which adjust the amount of black or white in a color. 0% being black, 100% being white, and 50% being unaffected.

1. **In the world of typeface, what are the three main categories of fonts? What are the differences between them?**
The three main categories of fonts are :
- *serif* which has extra details on the ends of the main strokes of the letter.
- *sans-serif* which has which has strait ends to the letter and looks cleaner.
- *mono space* in this instance all of the letters have the same width so an l and an m take up the same amount of space.


1. **When specifying font-size, what are the main three units used?**
When specifying font size the main units that are used are:
- *Pixels* pixels allow you precise control over the font size.
- *Percentages* will adjust the size of the font based on the percentage of the default size.
- *ems* adjust the size of the font based on the width of the letter m.
