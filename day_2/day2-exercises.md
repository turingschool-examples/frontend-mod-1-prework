<html>
  <body>
<h2>Section 1:</h2>

<h3>There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?</h3>
  <p>Ordered lists are the same as numbered lists. They might be used for instruction purposes. Uses ol element and then the tag li around each of the numbered elements.<br />Unordered lists are not ordered by numbers but instead bullet points. Uses ul element and then the open and closing tags li /li around each of the bullet points. CCS can be used to customize the type of bullet points. You can also puts lists in lists by using the ol or ul elements again inside the main element.<br />Definition lists are used for terms and definitions of those terms. Uses d1 element and then the open and closing tags dt /dt around each of the terms being defined. And open and closing tags dd /dd for each fo the definitions for the terms.</p>

<h3>What is the basic structure of an element used to link to another website?</h3>
  <p>It uses an opening link tag <a> that includes the web address, so <a href="...Web Address....">. Then between those tags the text that is able to be viewed and clicked on by the user and last the closing tag </a></p>

<h3>What attribute should you include in a link to open a new tab when the link is clicked?</h3>
  <p>I would use the same structure as before but right after the url add the target tag, which is still in the opening (or anchor) tag. I would assign the target attribute the value of "_ blank" (with no space in between the underscore and blank). This tells the web to open up a blank tab or window. Most browser systems will open a new tag instead of a window. On Slack Overflow I saw comments talking about assigning target to _ tag (with no space) instead of blank but others said that value doesn't exist</p>

<h3>How do you link to a specific part of the same page?</h3>
  <p>In the anchor tag I would add the id attribute which will link to certain points of the page. The attribute is assigned a value of the idenfified sections on that page. Values might be top, internude, prologue.</p>

<h2>Section 2</h2>

<h3>What is the purpose of CSS?</h3>
  <p>CSS allows web pages look more appealing. Programmers can create rules that specify how the content of an element should appear on the page. This includes color, style and many other things too.</p>

<h3>What does CSS stand for? What does cascading mean in this case?</h3>
  <p>CSS stands for Cascading Style Sheets. The cascading part means that an html document can have multiple style sheets cascading in it.</p>

<h3>What is the basic structure of a CSS rule?</h3>
  <p>A CSS rule includes two parts: a <i>selector</i> and a <i>declaration.</i> The selector will tell the computer which element the CSS rule applies to. The declaration tells how the element in the selector will be styled. The declaration have two parts separated by a colon; a property (aspect of the element that should be changed) and a value (setting used for the property). CSS selectors are put first, then the declaration is put inside curly brackets.</p>

<h3>How do you link a CSS stylesheet to your HTML document?<h3>
  <p>The CSS stylesheet is linked to the html doc by the link element. The link element is empty and tells the browser where to find the CSS file if it's used externally. The stylesheet is applied to the html doc by the selector. The selector will tell the computer which element the CSS rule applies to.</p>

<h3>When is it useful to use external stylesheets as opposed to using interal CSS?</h3>
  <p>The external stylesheets are better anytime I'm building a site with more than on page (which I would assume is almost always the case). This will allow me to save time because the changes I make in an external CSS file will reflect on all pages. Rather then having to change them separately. All pages can use the same style rules as well as keep the content separate from how it looks on the page. All my webpages will be able to use the same stylesheet.</p>

<h3>Describe what a color hex code is.</h3>
  <p>The color hex code is a 6-digit code that tells the amount of red, green and blue in a color.</p>

<h3>What are the three parts of an HSL color property?</h3>
  <p>The three main parts of a HSL color is hue, saturation, and lightness.</p>

<h3>In the world of typeface, what are the three main categories of fonts? What are the differences between them?</h3>
  <p>The three main categories of fronts are serif, sans-serif, and monospace.</p>
  <p>Serif fonts have small extra detail on the ends of each stoke of a letter.</p>
  <p>The sans-serif front do not have details like serif fronts do. They have straight ends and look cleaner to read, especially with small text.</p>
  <p>The monospace front is each letter displayed with the same width (this is often the type of font used when writing code).</p>

<h3>When specifying font-size, what are the main three units used?</h3>
  <p>The three main units used are pixels, percentages, and ems.</p>
