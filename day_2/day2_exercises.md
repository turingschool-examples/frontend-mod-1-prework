## Lists and Links

### 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

* An **ordered list** typically is a numbered list of items. It's created with the `<ol>` element. Each item in the list is placed between an opening `<li>` tag and a closing `</li>` tag. The _li_ stands for list item.

* An **unordered list** typically is a bulleted list of items. It's created with the `<ul>` element. Each item in the list is placed between an opening `<li>` tag and a closing `</li>` tag. The _li_ stands for list item.

* A **definition list** commonly consists of a series of terms and their definitions. It's created with the `<dl>` element. Inside the `<dl>` element you will usually see pairs of `<dt>` and `<dd>` elements.
  * The `<dt>` element is used to contain the term being defined.
  * The `<dd>` element is used to contain the definition.

### 2. What is the basic structure of an element used to link to another website?

Links are created using the `<a>` element. You specify which page you want to link to using the href attribute.

  `<a href="https://turing.io">Turing</a>`

  **OPENING LINK TAG** `<a href="https://turing.io">`

  **CLOSING LINK TAG** `</a>`

  * **https://turing.io** is the page the link takes you to

  * **Turing** is the text the user clicks on

### 3. What attribute should you include in a link to open a new tab when the link is clicked?

To open a new tab (or window, if that's the user's preference) you would use the **target** attribute on the opening `<a>` tag. The value of this attribute should be  **_blank**.

`<a href="https://turing.io" target="_blank">Turing</a>`

**OPENING TAG** `<a href="https://turing.io" target="_blank">`

### 4. How do you link to a specific part of the same page?

First, identify the points in the page that the link will go to. This is done by using the id attribute.

`<h1 id="top">TAKE ME TO THE TOP OF THE PAGE</h1>`

To link to an element that uses an id attribute you use the `<a>` element again

The value of the href attribute starts with the `#` symbol, followed by the value of the id attribute of the element you want to link to

`<a href="#top">TAKE ME TO THE TOP OF THE PAGE</a>`


## What is CSS, Color, and Text

### 1. What is the purpose of CSS?

CSS provides developers with a standard way to define, apply, and manage sets of style characteristics. These characteristics include colors, layout, and fonts. With CSS you can control the design of your web pages and create rules that specify how the content of an element should appear.

### 2. What does CSS stand for? What does cascading mean in this case?

**C**ascading **S**tyle **S**heet


### 3. What is the basic structure of a CSS rule?

SELECTOR {DECLARATION}

* **Selectors** indicate which element the rule applies to.
* **Declarations** indicate how the elements referred to in the selector should be styled. Declarations are split into two parts.
    * **Properties** indicate the aspects of the element you want to change.

        **color**: yellow

        **font-family**: Ariel

    * **Values** specify the settings you want to use for the chosen properties.

        color: **yellow**

        font-family: **Ariel**

### 4. How do you link a CSS stylesheet to your HTML document?


### 5. When is it useful to use external stylesheets as opposed to using internal CSS?


### 6. Describe what a color hex code is.


### 7. What are the three parts of an HSL color property?


### 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?


### 9. When specifying font-size, what are the main three units used?

  [CodePen](https://codepen.io/madisonrandle/pen/yLBEmYz)
