Reading Response Chapters 3 and 4 on Lists and Links from HTML and CSS

1. Ordered lists are lists where each item in the list is numbered
Unordered lists begin with a bullet point
Definition lists are a set of terms and definitions

2. Links are created using the <a> element
Users click the content between the opening and closing <a> tag
i.e. <a href="http://www.google.com">Google</a>
User would click on Google to go to google.com

3. Include target="_blank" in the opening <a> tag to open link in a new window
i.e. <a href="http://www.google.com" target="_blank">Google</a>
Opens Google in a new window

4. When linking to other pages on the same site you can use shorthand known as relative URL 
rather than the full domain name
i.e. <a href-"home.html">Home</a> takes users to the homepage of a site

Reading Response Chapters 10, 11, 12 on What is CSS, Color, Text from HTML and class
1. The purpose of CSS is to control the design of your web pages and make them more attractive

2. CSS stands For Cascading Style Sheets
Cascading means that styles can fall or cascade from one style sheet to another
The last rule or the more specific rule will take precedence

3. The basic structure of a CSS rule is a selector and declaration
A declaration sits inside curly brackets and is made up of a property and value
i.e. p {font-family: Arial;}
p = selector, font-family = property, Arial = value

4. You link a CSS stylesheet to an HTML document by using the <link> element
The <link> tells the browser where to find the CSS file used to style the page
i.e. <link href="css/styles.css" type="text/css" rel="stylesheet" />
You can also include CSS rules into an HTML page by placing them inside a <style> element
i.e. <style type="text/css"> body {font-family: arial;} </style>

5. It is useful to use external stylesheets as opposed to using internal CSS when
building a site with more than one page so that all pages can use the same style rules,
content is separate from how the page looks, and you can change styles across all pages
by altering just one file

6. A color hex code is a six-digit code that represents the amount of red, green and blue in a color
It is written with a pound sign i.e. #ee3e80

7. The three parts of an HSL color property are Hue, Saturation and Lightness
HSLA also includes Alpha which means opacity

8. The three main categories of fonts are Serif, Sans-serif and Monospace
The differences are Serif fonts have extra details on the ends of the letters
Sans-serif have straight ends to the letters
Monospace fonts have a fixed width - this is a monospace font

9. The three main units for specifying font size are pixels, percentages and ems
