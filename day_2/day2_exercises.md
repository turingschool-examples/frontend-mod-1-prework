## There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences? ##
  **Ordered Lists**  `<ol></ol>` are lists where each item in the list is numbered. For example a set of steps in a recipe that must be performed in the proper order. Another example would be a daily routine, where events happen sequentially. **Unordered Lists** `<ul></ul>` are lists that begin with a bullet point. For example a table of contents or a grocery food list. **Definition Lists** `<dl></dl>` are made up of a set of terms along with the definitions for each of those terms. An example would be a dictionary list of terms, or a glossary. Both ordered and unordered lists will also use the notation tag `<li></li>` for each item listed. Definition lists will use the tag `<dt></dt>` to conttain the term being defined, and `<dd></dd>` to contain the definition.

## What is the basic structure of an element used to link to another website? ##
  `<a href-"http://www.turing.io">Turing</a>` Is a basic link element. The text between the opening and closing <a> tag, *Turing* is the link text. This is what the user reads on the page. This text should be used to inform the user where the link will take them. The text, "http://www.turing.io" is the page the link takes you to. The "a href" is simply the opening link tag structure.

## What attribute should you include in a link to open a new tab when the link is clicked? ##
  If you want the link to open in a new window/tab, you should use the target attribute on the opening <a> tag. The value of this attribute should be _ _blank_.
  `<a href="http://www.turing.io" target="_blank">Turing</a>`. It's good practice to inform the user the link will open on a new page when using this attribute.

## How do you link to a specific part of the same page? ##
  Using the id attribute you can link to different parts of a page. You set up your webpage with the id tags giving them specific names, so later you can reference those names and the webpage knows where you want to end up. For example:
  `<h1 id="top"></h1>` `<h2 id="Introduction"></h2>` `<h3 id="YouTube"></h3>`
  When jumping to a certain part of the page with the id tag one must reference the names given.
  `<a href="#top"></a>` `<a href="#Introduction"></a>` `<a href="#YouTube"></a>`
  The id tag should always start with a letter or an underscore, not a number. 
