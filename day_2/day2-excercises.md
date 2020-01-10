<a href="#TLDR">TLDR</a>

#### There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

 Ordered Lists are used for a numbered list,  much like directions for building something from ikea.  <ol>  
    <li> the element ol </li>
    <li> The element li </li>
    <li> are used for numbered lists.</li>
 </ol>

 unordered lists are bulleted
<ul>
  <li> ideas, thoughts </li>
  <li> key points </li>
      <ul> <li> or maybe even a dad joke</li> </ul>
  <li> you want to ensure are pointed out </li>
  <li> Using the ul and li elements.
</ul>

<dl>
  <dt>Definition Lists</dt>
  <dd>Are an effective way to show terms and definitions in an easy to read format.  Much like a dictionary!</dd>
  <dt>Element tags</dt>
  <dd>Are dl, dt and dd </dd>
</dl>

#### What is the basic structure of an element used to link to another website?

The a element is used for linking websites. <a href ="www.turing.io">turing.com</a>

#### What attribute should you include in a link to open a new tab when the link is clicked?

<a href="www.turing.io" target="_blank">turing.com</a>

<h4 id="TLDR"> How do you link to a specific part of the same page?</h4>

Adding ID tags, usually to the header of the labeled part of the page you'd like to directly go to.  
Let's say we want to go to TLDR part of the page.  In that header, would be an ID labeled "TLDR".  I would have a link at the top of the page <a href="#TLDR">Too Long Didn't read</a>



<a href="https://codepen.io/Melizzo/pen/jOEzZGd">Check out my Codepen!</a>

#### What is the purpose of CSS?

CSS allows you to control how your webpage looks.  You create boxes in which these stylings apply and are presented.   

#### What does CSS stand for? What does cascading mean in this case?

CSS stands for cascading style sheet.  The browser reads webpages from top to bottom.  When you add a CSS page to the website, it will jump to the CSS page, implement the stylings, from top to bottom, once at the bottom, it jumps back to the HTML page.

#### What is the basic structure of a CSS rule?
````Javascript
H2 {
  color:FFFF00;
}
````
#### How do you link a CSS stylesheet to your HTML document?

You add the stylesheet to the <head> portion of the HTML page.
`link href ="css/example.css" type="text/css" rel="stylesheet"`

#### When is it useful to use external stylesheets as opposed to using internal CSS?

External stylesheets are very useful for multiple reasons, some of which are:
<ul>
  <li>Organization - separate from HTML and a "cleaner" look.</li>
  <li>Good for webpages with multiple pages.</li>
  <li>Keeping the styles for all sheets on one page for easier access, and thus one file to make all those changes.</li>

#### Describe what a color hex code is.

Hex abbreviates the 3 letter code for red/blue/green into a 6 digit RRGGBB code.

#### What are the three parts of an HSL color property?
Hue, saturation and lightness

#### In the world of typeface, what are the three main categories of fonts? What are the differences between them?

Regular **Bold** & *Italic*

#### When specifying font-size, what are the main three units used?
pixels, percentages & EMS, oh my!
