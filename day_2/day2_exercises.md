## 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
    * Ordered `<ol></ol>` and unordered `<ul></ul>` list elements both house the list item element `<li></li>` vs definition list
      element `<dl></dl>`contains definition term and definition elements, respectively `<dt></dt> and <dd></dd>`
    * This is an unordered list since I have chosen not to number my entries. An ordered list is good for procedures, for example.
    * Ordered and unordered list can be nested. Though not impossible, I'm sure, nesting definition list doesn't seem conventional.
## 2. What is the basic structure of an element used to link to another website?
    * A link uses the `<a></a>` tags and the `href` attribute. As seen in this example:

    ```HTML
      <a href="http://www.linkedpage.com"> This displayed text contains the link </a>
    ```

## 3. What attribute should you include in a link to open a new tab when the link is clicked?
    * ` target='_blank' `

## 4. How do you link to a specific part of the same page?
    * It's done with a combination of elements and attributes. First, the navigation points have to be identified with the attribute ` id="linkTitle" ` usually paired with a heading element. Note on syntax, the id attribute begins with either an underscore or a lowercase letter, never a number or other sign.
    Once identified we can navigate back using the ` <a href="#linkTitle"> </a> `element attribute. Note that the number sign must be added within the quotation marks. Here's an example:

    ```HTML
        <h1 id=top> Parts of a Plant </h1>
        <a href="#leaves">Leaves </a>
        <a href="#stems">Stems </a>
        <a href="#roots">Roots </a>
        <h2 id="leaves"> Leaves </h2>
          <p>Leaves contain chloroplast which forms the backbone of Photosynthesis, the process by which plants create their own food. </p>
        <h2 id="Stems"> Stems </h2>
          <p>Effectively the plant's skeleton; It provides structure and a means of transporting nutrients and food between the leaves and roots. </p>
        <h2 id="roots"> Roots </h2>
          <p>Roots ground the plant to earth and are vital to acquiring minerals and other nutrients for the plant.</p>

        <p><a href="#top">Top of page.</a></p>

    ```
