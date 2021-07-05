#### On a website, what is the purpose of HTML code?
> HTML provides the structure for the contents of the page using *tags* or *elements* to provide information about the text contained within the tags.

#### What is the difference between an element and a tag?
> Although the terms seem to be used interchangeably by most people, it appears that there is a distinct difference in that an element contains both the tags and everything contained within those tags, including additional information about the tag  itself whereas a  tag is more basic, being just an opening or closing tag to define the contents. As an example, `<p>` is a tag, whereas `<p class = turtle> some text about turtles </p>` is an element.

#### Why do we use attributes in HTML elements?

>Attributes allow us to add additional information, either to change the appearance of the text, such as changing the color of certain words, or to add information to indicate what portions of the text might have special importance, such as providing the definition of a term or acronym, or citing a source or reference. It seems to me that this where we begin to create a working document rather than just having text on a page.

#### Describe the purpose of the head, title, and body HTML elements.

>Information in the head is not shown on the webpage, it is information *about* the page, but not intended for the reader to see.
>The title will display in the title bar on the browser, and can be seen by the user, but it will also not display on the webpage itself. If the user has more than one tab open, this will be important to help them navigate back to the proper tab.
>The body is what shows in the main browser window and is what the user is reading and interacting with.

#### In your browser (Chrome), how do you view the source of a website?

On the mac, I can click on option, command and 'u' simultaneously and it will open a new tab with the source code. I can also go to the 'view' tab on my browser menu, open 'developer' and from there I can open 'view source'.

#### List five different HTML elements and what they are used for. For example, `<p></p>` is a paragraph element, and it is used to represent a paragraph of text.

1. `<b> </b>` is a **bold** element. It is used to make text within the element thicker and darker than standard text.
2. `<strong> </strong>` is a **strong** element. This is usually visually represented as being 'bold' text, but they should not be used interchangeably. The 'strong' element indicates that this is particularly important text and is treated differently, for example, if someone is using a text reader, a 'strong' word might be pronounced with added emphasis.
3. `<sup> </sup>` is a superscript element used to indicate that letters should be smaller and higher than other numbers. This is used for exponents or to to change 2nd to 2<sup>nd</sup> for readability.
4. `<h1> </h1>` is the Header 1 element, which is the largest of six header options used to provide a visual reference indicating importance of the text it contains. The headers decrease in size from Header 1 to Header 6, so that more important information can be placed in (or under) a larger header, and less important information using smaller headers.
5. `<i> </i>` is used to place text in *italics*. There are other elements that also show text as italics when placing emphasis on text, citing a source, etc., so this element should be used with due consideration for the appropriate purpose.

#### What are empty elements?

>Some elements do not require a closing tag; examples include the `<hr />` element, which creates a horizontal line across the page, or the `<br />` element, which creates a line break within a paragraph.

#### What is semantic markup?
>Semantic markup is a way to embed additional information that search engines or screen readers can access to make them more efficient and to deliver better results for your consumer. These include the strong element discussed above, definitions of acronyms, properly attributing quotes and many other functions.

#### What are three new semantic elements introduced in HTML 5? Use page 431 in the book to find more about these new elements.

1.  `<article>` is one of the new semantic elements. This allows a block of content that might be extracted to stand alone to be set in its own place so that it can be conveniently separated if desired. This might be useful in describing the results of someone's research that might be used on other websites, or a portion of text that a writer wants to use in a preview or sample.
2. `<section>` is an element that allows for grouping related content within a larger page. As an example, a website for an animal shelter could have different individual `sections` for dogs, cats, and goats. This would make it easier to place content specific information and links for each category.
3. `<aside>` is an element that allows for additional information that is useful, but not integral to the main text. This could be used for a glossary or for footnotes.
