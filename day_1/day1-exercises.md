1.  On a website, what is the purpose of HTML code?

A: The HTML code is used to create the basic framework/structure of a website. HTML describes the structure of a webpage. HTML code can set the headings, paragraphs, and line breaks. HTML can also create abbreviations, quotes, and can also describe content for search engines.

2.  What is the difference between an element and a tag?

A: Tags open and close the information contained in the element. Tags can be thought of as containers. Tags are made up of left and right angle bracket with a character in between. A closing tag will often times have a forward slash included between the left bracket and the character(s).
An element is an opening tag, a closing tag, and all information contained within.


3.  Why do we use attributes in HTML elements?

A: Attributes are used in HTML to provide additional information about the contents of an element. Attributes in HTML are used in the opening tag of an element. They are comprised of an attribute name and an attribute value. For example, the attribute name `lang` can be used to assign a language value such as French `fr` or English- United States `en-us`.

4.  Describe the purpose of the head, title, and body HTML elements.

A: The `head` is the element that contains information about the page, not just what appears in the browser. This can include the `title` element.
The `title` element contains page title information displayed at the top of the webpage above the browser bar or on the tab for the page.
All of the information contained in the `body` elements appear inside the main browser window.

5.  In your browser (Chrome), how do you view the source of a website?

A: Open the browser and navigate to the desired website. Right-click on the web page and select `view page source`. After the option is selected, the source code for the website will appear on the browser page.

6.  List five different HTML elements and what they are used for. For example, `<p></p>` is a paragraph element, and it is used to represent a paragraph of text.

A:
  - `<h1></h1>` is a heading element. It is used to represent a heading of text. There are 6 levels, h1-h6. h2-h6 are used for subheadings.

  - `<b></b>` is a bold element. It is used to make the contained characters appear <b>bold</b>. No additional meaning is implied.

  - `<i></i>` is an italic element. It is used to to make the enclosed characters appear <i>italic</i>. It represents text that would be said differently form the surrounding text.

  - `<sup></sup>` is a superscript element. It is used to write things like math powers and date suffixes. Example: 2<sup>2</sup>=4 will show the equation mathematically stating '2 to the 2nd power equals 4'.

  - `<sub></sub>` is a subscript element. It is used to write subscript elements that appear in subjects like chemistry. Example: H<sub>2</sub>O will show the chemical formula for water.

7.  What are empty elements?

A: Empty elements are elements that do not have characters in between an opening and closing tag. These elements are written differently. Empty elements usually have only one tag. This tag is written using a space and a forward slash between the character(s) and the closing right angle bracket.

8.  What is semantic markup?

A: Semantic markup represents elements that are not intended to affect the structure of the web page but instead add extra information to the pages. Even though semantic markup is not intended to alter the web page display, some elements will result in appearance changes. The extra information contained in semantic markup can be used by screen readers or search engines.
example: Using the emphasis element `<em>` will cause the contained characters to appear <i>italic</i>, but a screen reader will add voice emphasis to the words.

9.  What are three new semantic elements introduced in HTML 5? Use page 431 in the book to find more about these new elements.

A:
  - `<header></header>` is a header semantic element. It is used to contain the main header information that appears at the top of the webpage. It can also contain a header for a section within a page.

  - `<figure></figure>` is an element used to contain content that is referenced in the main article. It should only be used when the referenced content is not necessary for the <i>flow</i> of the article.

  - `<section></section>` element groups together related content. Usually each section will have its own heading. It should not be used to wrap the entire page in most cases. To wrap the entire page, use the <div> element.

  CodePen Exercises Link: https://codepen.io/BigBike/pen/bGdwQKK.html
