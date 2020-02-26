<html>
  <body>
<h3>There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?</h3>
  <p>Ordered lists are the same as numbered lists. They might be used for instruction purposes. Uses ol element and then the tag li around each of the numbered elements.<br />Unordered lists are not ordered by numbers but instead bullet points. Uses ul element and then the open and closing tags li /li around each of the bullet points. CCS can be used to customize the type of bullet points. You can also puts lists in lists by using the ol or ul elements again inside the main element.<br />Definition lists are used for terms and definitions of those terms. Uses d1 element and then the open and closing tags dt /dt around each of the terms being defined. And open and closing tags dd /dd for each fo the definitions for the terms.</p>

<h3>What is the basic structure of an element used to link to another website?</h3>
  <p>It uses an opening link tag <a> that includes the web address, so <a href="...Web Address....">. Then between those tags the text that is able to be viewed and clicked on by the user and last the closing tag </a></p>

<h3>What attribute should you include in a link to open a new tab when the link is clicked?</h3>
  <p>I would use the same structure as before but right after the url add the target tag, which is still in the opening (or anchor) tag. I would assign the target attribute the value of "_ blank" (with no space in between the underscore and blank). This tells the web to open up a blank tab or window. Most browser systems will open a new tag instead of a window. On Slack Overflow I saw comments talking about assigning target to _ tag (with no space) instead of blank but others said that value doesn't exist</p>

<h3>How do you link to a specific part of the same page?</h3>
  <p>In the anchor tag I would add the id attribute which will link to certain points of the page. The attribute is assigned a value of the idenfified sections on that page. Values might be top, internude, prologue.</p>
