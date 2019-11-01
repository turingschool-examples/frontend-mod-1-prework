1. On a website, what is the purpose of HTML code?

HTML describes the structure of pages.


2. What is the difference between an element and a tag?

An element comprises the opening tag, closing tag, and any content that lies between them. A tag by itself is not an element. When using the term tag, therefore, one may be referring to only the opening tag or only the closing tag or both. Tags act like containers and typically convey some information about the type of content contained between the opening and closing tags.


3. Why do we use attributes in HTML elements?

Attributes provide additional information about the contents of an element. Attributes are always specified in the opening tag and consist of an attribute name and an attribute value. Attributes are used to configure or adjust element behavior.


4. Describe the purpose of the head, title, and body HTML elements.

<head> An element that contains information about the page that is not displayed within a browser's main viewport. Types of information include the page title, links to CSS or other items, and other metadata.

<title> An element that is nested within the head element and is required in all HTML documents. The title element is metadata that represents the title of the overall HTML document. This metadata is used in various ways, such as appearing near the top of the browser, typically above the URL, or on the tab for that page. The title may also be used when bookmarking a page, as the suggested bookmark name, as well as in search-engine results.

<html> An element, sometimes referred to as the root element, that indicates that anything between its opening and closing tags is HTML code. This element wraps all the content on the entire page.


5. In your browser (Chrome), how do you view the source of a website?

The keyboard shortcut is Ctrl+U however one may also view the page source by right clicking and using the context menu to select "View page source" or via the multiple methods of accessing the Developer tools pane.


6. List five different HTML elements and what they are used for. For example, <p></p> is a paragraph element, and it is used to represent a paragraph of text.

<div></div> A content division element, a generic, blocklevel container that can be used to define a section of the document.

<img> An image element that is used to embed an image into the document.

<a></a> An anchor element that is used to create a hyperlink to other web pages, files, locations within the document, email addresses, or other URL.

<input> An element that is used to specify an input field where the user can enter data.

<table></table> An element that allows for the representation of tabular data presented in a two-dimensional table.


7. What are empty elements?

An empty element is one that usually has only one tag and thus contains no nested elements. Using a closing tag on an empty element is usually invalid HTML. It is best practice to end an empty element tag with a space and forward slash character (e.g. <hr />).


8. What is semantic markup?

Semantic markup includes certain tags that add extra meaning to text. The purpose of semantic markup is to more accurately describe content on a page. The content of these elements is often displayed in a different way by browsers however this should not be the reason for their use. The extra information provided by these elements is used by screen readers and search engines.


9. What are three new semantic elements introduced in HTML 5? Use page 431 in the book to find more about these new elements.

<nav></nav> Used to contain the major navigational blocks on the site (e.g. primary site navigation).

<section></section> Groups related content together, typically each section has its own heading.

<aside></aside> When used outside of an <article> element, it acts as a container for content that is related to the entire page. When used inside an <article> element, it should contain information that is related to the article but not essential to the overall meaning.