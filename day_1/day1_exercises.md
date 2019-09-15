## Structure and Text
### 1. On a website, what is the purpose of HTML code?

HTML, the Hypertext Markup Language, is like the skeleton that gives a webpage structure. Without HTML, a browser would not know how to display text. _Developers use HTML code to instruct an Internet browser application how to properly format and display its content._ HTML supports many features including text and multimedia and is traditionally learned along with CSS and JavaScript.

### 2. What is the difference between an **element** and a **tag**?

An element and a tag both refer to the markup used to write HTML. While they are often used interchangeably, there is a slight difference between the two. An **element** is an individual component of HTML and generally consists of an opening tag, content, and an end tag. **Tags** act like containers, used to mark up the start and end of an element. Tags usually come in pairs.

### 3. Why do we use attributes in HTML elements?

Attributes provide additional information about the contents of an element. An attribute is a characteristic of a page element, such as font size or color. They are used to supplement a tag. Attributes appear in the opening tag and are presented in name/value pairs such as: name=value. The attribute **name** indicates what kind of extra information you're supplying about the elements content. The **value** is the information or setting for the attribute.

### 4. Describe the purpose of the head, title, and body HTML elements.

HTML code reflects a hierarchy of HTML elements. The **head element** contains information about the page. The head element comes before the body element and will usually contain a title element. The **title element** is either shown in the top of the browser, above the URL, or on the tab for that page. The **body element** is used to store everything displayed inside the main browser window, or the text and images that you see when visiting a Web page.

### 5. In your browser (Chrome), how do you view the source of a website?

To view the source of a website, first you'll want to make sure Chrome is open as the current program. In the "View" menu, hover over the option "Developer". Select "View Source" in the side menu that appears. Another way to do this is by using the shortcut option + command + U.

### 6. List five different HTML elements and what they are used for.

1. `<body>This is a body element. Everything inside this element is shown inside the main browser window.</body>`
1. ###### `<h6>This is a Level 6 Heading Element, used for the smallest size subheading.</h6>`

1. `<p>This element is used to create a paragraph.</p>`

    `<p>By default, a browser will show each paragraph on a new line with some space between it and any subsequent paragraph.</p>`

1. **`<b>This element is used to make characters appear bold.</b>`**
1. _`<i>This element is used to make characters appear italic</i>`_

### 7. What are empty elements?

_Empty elements_ do not have any words between an opening and closing tag. They usually only have one tag. Before the closing bracket of an empty element there will often be a space and a forward slash character. For example, when typing a poem that has multiple line breaks in the middle of a paragraph, you would use the line break tag &lt;br /&gt;

### 8. What is semantic markup?

_Semantic markup_ Introduces meaning/information to a page. It's not intended to affect the presentation of a web page. The reason for semantic elements is so that other programs, such as screen readers or search engines, can use the information. For example, the voice of a screen reader may add emphasis to the words inside the &lt;em&gt; element (the &lt;em&gt; element indicates where emphasis should be placed on selected words).

### 9. What are three new semantic elements introduced in HTML 5?

1. **`<article>`**

    The `<article>` element acts as a container for any section of a page that could stand alone. This could be an individual blog post, a newspaper article or any other independent piece of content.

1. **`<aside>`**

    The `<aside>` element defines some content _aside_ from the content it is place in (like a sidebar). When used inside an `<article>` element, its content should be related to the article but it's not essential to its overall meaning. When used outside of an `<article>` element, its like a container for content that's related to the entire page.

1. **`<section>`**

    The `<section>` element groups related content together. For example, on a homepage there may be several `<section>` elements to contain different sections of the page, such as latest news or top products. It may can contain several distinct `<article>` elements that have a common theme or purpose.

  [CodePen](https://codepen.io/madisonrandle/pen/yLBEmYz)
