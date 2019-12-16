<h1>Day 2<h1>
<h2> 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?</h2>
Ordered lists will be numbered. Unordered lists will be bulleted. Definition lists contains both a term and a definition. They are not numbered or bulleted but the definition is indented.
<h2> 2. What is the basic structure of an element used to link to another website?</h2>
<a href=”http://www.google.com”>Google</a>
<a></a> is the element used, anchor. http://www.google.com is the link. Google is the text the user clicks on.
<h2> 3. What attribute should you include in a link to open a new tab when the link is clicked?</h2>
In the opening tag you should include, target=&quot_blank&quot.
<h2> 4. How do you link to a specific part of the same page? </h2>
	With the id attribute. For example, <h1 id=”news”>News</h1>...........<a href=”#news”>
<h2> 1 .What is the purpose of CSS?</h2>
With CSS you can create rules that specify how the content of an element should appear. CSS stylesheets can be used for several web pages, creating a consistent look and feel. It is also faster to use just one style sheet as it is less code for the browser to download. It also makes the HTML code easier to read and edit.
<h2> 2. What does CSS stand for? What does cascading mean in this case?</h2>
Cascading Style Sheets. Cascading means that if there are two or more rules that apply to the same element, one will take precedence. Properties can also be inherited. This allows simpler style sheets because generic rules can be created that apply to most elements and that can be overridden for individual elements.
<h2> 3. What is the basic structure of a CSS rule?</h2>
Body {
		Font-family: arial;
		Background color: blue; }
<h2> 4. How do you link a CSS stylesheet to your HTML document?<h2>
By linking the style sheet in the <head></head> element. <link href=”css/styles.css” type=”text/css” rel=”stylesheet” />
<h2> 5. When is it useful to use external stylesheets as opposed to using internal CSS?</h2>
External is usually best, especially if you are building a site with more than one page. Internal can be used for a single page.
<h2> 6. Describe what a color hex code is. </h2>
Hex code is represented by three values, red, green and blue in hexadecimal code. For example, #ff3322 or #112233.
<h2> 7. What are the three parts of an HSL color property?</h2>
Hue, saturation and lightness. Hue is the colloquial idea of color and often represented in a color wheel or with a slider from 0-360. Saturation is the amount of gray in a color represented as a percentage. Full saturation is 100% and 0% is a shade of gray. Lightness is the amount of white or black in a color. 0% lightness is black and 100% lightness is white. 50% lightness is normal.
<h2> 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?</h2>
Serif: have extra details on the ends of the main strokes known as serifs. Traditionally used in long passages.
Sans-serf: have straight ends to letters. A cleaner design that is easier to read in small text.
Monospace: every letter is the same width. Commonly used for code because they align nicely, making the text easier to follow
<h2> 9. When specifying font-size, what are the main three units used?</h2>
Pixels: allow precise control over how much space the text takes up. Pixels are the best way to ensure that the type appears at the size you intend. Ex 12px.
Percentages: the default size in a browser is 16px. 75% would be 12px and 200% would be 32px. Users can change the size of text in their browsers. With percentages the scale will stay the same. Ex 75%
Ems: an em is equivalent to the width of a letter m. They allow you to change the size of text relative to the size of the text in the parent element. Ex 1.5em
