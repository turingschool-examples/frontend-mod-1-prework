## Chapter 3 - 4 Lists and Links

### 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
Ordered lists `<ol></ol>` are displayed by a numbered list starting at 0 and incrementing for each list item. List items are wrapped with `<li></li>` tags.
Unordered lists `<ul></ul>` are displayed by a bulleted list. List items are wrapped with `<li></li>` tags.
Definition Lists `<dl></dl>` are lists of definitions. The defined content is wrapped in `<dt></dt>` tags. The definitions of the terms are wrapped in `<dd></dd>` tags.

### 2. What is the basic structure of an element used to link to another website?
`<a href="#url">Anchor Text</a>` An anchor tag is used to link to another website. It starts with an opening anchor tag `<a href="">`. This includes the opening anchor tag followed by an "href" attribute. Next you put the text you want the link to display. and finish it off with a closing anchor tag `</a>`.

### 3. What attribute should you include in a link to open a new tab when the link is clicked?
To open a link in a new window you include the `target="_blank"` attribute. This tells the browser to open the link in a new tab.

### 4. How do you link to a specific part of the same page?
To link to a specific part of a new page you use a hash value and an id from the target element. Say the contact section has an id of "contact" `<div id="ContactSection">`. The anchor tag would look like this: `<a href="#ContactSection">Contact Us</a>`.
