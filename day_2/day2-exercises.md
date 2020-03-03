*CH 3 & 4*


1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

    Ordered Lists: numbered, perhaps for a recipe or legal contract identifying section numbers.
    
    Unordered Lists: bullet points
    
    Definition Lists: term along with their definitions, such as this list here.

2. What is the basic structure of an element used to link to another website?

    `<a href="URL">shown text</a>`

3. What attribute should you include in a link to open a new tab when the link is clicked?

    `<a href="URL.com" target="_blank">words here</a>`

4. How do you link to a specific part of the same page?

    First, assign an id attribute to the element (ex: ``<h1 id="top">words</h1>``)
    
    Then, instead of using a URL, link to the section of the page with # (ex: ``<a href="#top">top</a>``)

*CH 10, 11 & 12*


1. What is the purpose of CSS?

    CSS gives the styling to the HTML structure of a webpage.

2. What does CSS stand for? What does cascading mean in this case?

    Cascading Style Sheets; cascading because the webpage loads from top to bottom

3. What is the basic structure of a CSS rule?

    `h1, h2, h3 {
                font-family: Arial;
                color: yellow;}`
                
                
    `selector (HTML element) {property: value}`

4. How do you link a CSS stylesheet to your HTML document?

    The link element is added to the head element of the HTML code. It has 3 attributes...
    
    `<link href="css/styles.css" type="text/css" rel="stylesheet" />`

5. When is it useful to use external stylesheets as opposed to using internal CSS?

    When there are multiple pages on your website, that way the code does not need to be repeated on multiples pages of code. Keeps the code simpler, the webpages load quicker, and it is easier/quicker to alter when needed.

6. Describe what a color hex code is.

    `#66cdaa` ; a 6 digit code for colors. Each 2 digits represents the RGB components respectively

7. What are the three parts of an HSL color property?

    Hue, Saturation, Lightness
    
    `p {
      background-color: hsl(0,0%,78%);}`

8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

    Serif: Extra details on the ends of the lettering
    
    Sans-Serif: Straight ends to the letters, cleaner designs
    
    Monospace: Every letter has the same width, making the text easier to follow

9. When specifying font-size, what are the main three units used?

    Pixels: Default browser puts text at 16px
    
    Percentages: 100% is default, 75% would be 12px, 200% would be 32px
    
    EMs: 1em is standard, 2em is double (16px, or 200%). So 1.5em is 150%, or 24px; and so on.
