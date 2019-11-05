# Mod 0 Capstone
***
## DAY 2
---

### Read Chapters 3 and 4

1. **There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?**
 * ordered:  numbered list by default, can be changed to letters upper and lower as well as roman numberals
 * unordered: bullet point list without numbering
 * definition: A list where every term has a seperate bullet point below each term
1. **What is the basic structure of an element used to link to another website?**
 * \<A href="url"\> <i>link text</i> \<a\>
1. **What attribute should you include in a link to open a new tab when the link is clicked?**
 * target="blank"
1. **How do you link to a specific part of the same page?**
 1. **add a id tag to an element on the same page that will be used in the reference in the link: id = "test"
 2. \<a href="#test"\> Link Text\<\/a\>



### Read Chapters 10,11 and 12

1. **What is the purpose of CSS?**
 * CSS allows for specific control of content appearance. This is a quicker way of adding styling to each element with a specific tag instead of specifying the same appearance at each use of a specific tag. Great timesaver.
1. **What does CSS stand for? What does cascading mean in this case?**
 * CSS, Cascading Style Sheet, cascading refers to the heirachy of what style is prioritized if more than one style rule applies to a particular element.
1. **What is the basic structure of a CSS rule?**
 ```CSS
 body /*Selector*/{
 /*Declaration*/
 ...}
 }
 h1 {
 color: rgb(255,255,255);
 /*property : value;*/
 }
 ```
1. **How do you link a CSS stylesheet to your HTML document?**
 * You would use a link with a type tag
 * \<link href="css/styles.css" type="text\/css"
rel="stylesheet" \/>
1. **When is it useful to use external stylesheets as opposed to using interal CSS?**
 * Larger websites with multiple pages can all link to the same css stylesheet, reducing loading times.
 * I think it is a cleaner way of organizing code in general. Even for a single page.
1. **Describe what a color hex code is.**
 * Instead of using RGB this is another way of representing color, just in hexidecimal.
1. **What are the three parts of an HSL color property?**
 * Hue
 * Saturation
 * Lightness
1. **In the world of typeface, what are the three main categories of fonts? What are the differences between them?**
 * Sarif : Extra details on the ends of the main strokes
 * Sans-Sarif: Straight ends to letters
 * Monospace: Every letter is a fixed width.
1. **When specifiying font-size, what are the main three units used?**
 * Pixels
 * Percentages
 * EMS: Allows for relative sizing based on the parent size.
