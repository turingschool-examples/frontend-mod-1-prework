## What is the purpose of HTML code? ##
  HTML is used to direct the appearance and characteristics of a web page. *Each HTML element tells the browser something about the information that sits between its opening and closing tags.* Each HTML tag is paired with a corresponding behavior that lies between the paired tags.
##  What is the difference between an element and a tag? ##
  An element is directed by tags. An element could be the body text, a heading, a border, a color, etc.; while the tag **brackets** on either side of the element data determine the behavior or appearance of the element. *The HTML code is made up of characters that live inside angled brackets called elements. Elements are usually made up of two tags: an opening tag and a closing tag.*
##  Why do we use attributes in HTML elements? ##
  *Attributes provide additional information about the contents of an element.* An attribute allows us to pair more detailed information to an element. It tells the browser how to better read your code, your instructions. Attributes require a name and a value.
##  Describe the purpose of the head, title, and body HTML elements. ##
  The head *contains information about the page.* It does not appear on a web page without directly viewing the source code. It is used in one regard, for search engines to distinguish web pages. A head tag usually contains a title element. 
  
  The body is everything we do see on the web page. *Everything inside the element is shown on the main browser window.* The title element lives usually within the head tags. 
  
  Anything written between the title tags appears in the title bar at the top of the web page, above the url.
##  In your browser (Chrome), how do you view the source of a website? ##
  Right click + view page source. Another source is in the url, which should show the directory path.
##  List five different HTML elements and what they are used for. For example, `<p></p>` is a paragraph element, and it is used to represent a paragraph of text. ##
  1. `<h1></h1> <h1></h2> <h3></h3>` Heading tags distinguish text as headings. There are 6 levels of heading tags, each with its own character weight and size.
  2. `<b></b>` Refers to bold tags, which simply make the text within these tags bold. `<i></i>` Italic tags that simply italicize the text. Neither of these affect the character size, font, or color.
  3. `<br />` Break tags tell the browser where to split a line of text to the next line down. Works well within the body of a text, for example when writing poetry. This tag does not require an opener and closer, just the one instance works.
  4. `<hr />` Horizontal rules are similar to breaks, that just one instance is needed. It adds a line between the directed bodies of text. Would be useful for s chapter change.
  5. `<ul></ul>` Unordered lists are marked by bullets. `<ol></ol>` Ordered lists are marked by numbers in ascending order. Lists are simple tools for webpage design, such as a table of contents.
##  What are empty elements? ##
  Elements that do not have pairs of tags, and therefor do not require word elements between tags. They are instructions to the web browser, such as `<br />` snd `<hr />`.
##  What is semantic markup? ##
  Semantic markup is a method of telling the web browser more information about your page. It can control the look of a page, but more importantly semantic markup stores information for the user. For example it contains abbreviation tags, which the browser can store the full abbreviation spelled out, display the shortened word, and share the information with the user when asked.
##  What are three new semantic elements introduced in HTML 5? Use page 431 in the book to find more about these new elements. ##
  2. `<acronym></acronym>` An abbreviation tag stores the un abbreviated name, as mentioned above. While the webpage may show 'NASA' on the web page, the browser is storing the information 'National Aeronautics and Space Administration' for the user to use if needed.
  1. `<dfn></dfn>` A definition tag will tell the web browser the stored word is defined later. This is good for search engines when trying to look up a definition for a word. Though it does nothing to change appearance on the page, it would help to get more search hits on your site.
  3. `<address></address>` The address tag is used specifically as a storage of contact information. Once again it does not appear on the page, but the user can find it in the stored web page element.

## Link to Pen ##
https://codepen.io/vladd-png/pen/VwZXoJW
