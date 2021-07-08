# 2: HTML and CSS

**1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?**  
Ordered lists are numbered; unordered lists are not ordered and begin with a bullet point; definition lists are a set of terms with their definitions.

**2. What is the basic structure of an element used to link to another website?**  
The link text is contained within `<a></a>` tags. Element contains an `href` attribute which specifies the destination of the link. In full, it would look like this: `<a href="http://www.turing.io">Turing School</a>`

**3. What attribute should you include in a link to open a new tab when the link is clicked?**  
You would include a "target" attribute like so:  `<a href="http://www.turing.io" target="_blank">Turing School (new tab)</a>`

**4. How do you link to a specific part of the same page?**  
First, you would identify the point on the page that the link would go to. To do this, you add an id attribute in the destination element. Then, you include a pound sign plus the name of the id attribute in the href attribute of the link.

**1. What is the purpose of CSS?**  
The purpose of CSS is to create rules that determine how content of an element should appear.

**2. What does CSS stand for? What does cascading mean in this case?**  
Cascading Style Sheets. Cascading means that, when there are multiple rules that apply to the same element, one style will take precedence over the others.

**3. What is the basic structure of a CSS rule?**  
Each rule has a selector, which indicates which element the rule should apply to. It also has a declaration, which indicates how the element in the selector should be styled. Within the declaration are the property and the value. The property includes the aspects of the element that you want to change. The value is the settings you want for the specified property.

**4. How do you link a CSS stylesheet to your HTML document?**  
You either use an external style sheet, and link to it using the `<link>` element, or use internal CSS by using the `<style>` tag inside the `<head>` of the document.

**5. When is it useful to use external stylesheets as opposed to using internal CSS?**  
When you want a lot of pages to follow the same style. Then you can change the external style once, instead of many times on each individual page.

**6. Describe what a color hex code is.**  
Hex codes specify amounts of red, green and blue in a hexidecimal code.

**7. In the world of typeface, what are the three main categories of fonts? What are the differences between them?**  
Serif, sans-serif and monospace. Serif fonts have extra details on the ends of the strokes. Sans-serif fonts have straight ends on the strokes. In monospace, every width of the characters is the same.

**8. When specifying font-size, what are the main three units used?**  
The three units are pixels, ems and percentage.
