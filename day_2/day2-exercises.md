1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
    1. ordered list is a list that will descend vertically per list item element. This list will display numbers. This kind of list is best used for things needed to be listed in a sequence.

    2. unordered list similar to the ordered list. The difference between the two is that an unordered list will be portrayed in bullet points instead of numbers.

    3. definition lists are used to have a term at the top. Then a dt element to contain the definition term. dd can be used if there are more than 1 definition. This will portray as such
        term
            definition Text
        term
            definition text



2.  What is the basic structure of an element used to link to another website?

< a href="https://google.com" > Google < /a >
    (Please note that i wouldn't add spaces before/after the a and " items)


3.  What attribute should you include in a link to open a new tab when the link is clicked?

    target="_ blank"
        (No spaces with the underscore. For some reason when i did it the correct way my entire text editor went to pink text)

4.  How do you link to a specific part of the same page

    First you must have an id attribute attached to an element. Once the id attribute is attached you may select it by using #name. < a href="#name">
    < element id="name >"



CSS questions

1.  What is the purpose of CSS?

    -CSS is what designs the website. It adds fonts, colors, borders, etc. It's what helps make the website look beautiful.

2.  What does CSS stand for? What does cascading mean in this case?

    -CSS stands for cascading style sheets. Cascading in this case means that the styles or code can fall from one style sheet to another, enabling multiple style sheets to be used on one HTML document.

3.  What is the basic structure of a CSS rule?

        nav{
          border: 1px solid black;
          font-size: 12px;
        }

4.  How do you link a CSS stylesheet to your HTML document?

      <link href="directory/filename.css" type="text/css"
      rel="stylesheet" />

5.  When is it useful to use external stylesheets as opposed to using interal CSS?
        -Always


6.  Describe what a color hex code is.

    Hex values represent values fo red, green, and blue in hexadecimal code.

    #66cdaa (This is an example of hex code)

    I like to find my hex code through the developer tools of chrome. I like to write the CSS code for colors and then play around with the colors in chrome and then copy and paste the hex code into my actual code.

7.  What are the three parts of an HSL color property?

      -Hue, Saturation, Lightness


8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?
      1. serif - Has extra details on the ends of the main strokes of the letters
      2. Sans-serif - Has straight ends to the letters, and therefore has a much cleaner design
      3. Monospace - Also knows as fixed-width font. Good for writing code. Every letter in this font family has the same width



9.  When specifying font-size, what are the main three units used?
      -Pixels, percentages, ems
