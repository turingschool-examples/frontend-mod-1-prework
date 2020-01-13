# Day 2: HTML and class

## Chapter 3 and 4 Questions

  1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?


  * Ordered lists: A list of items that are numbered.
  * Unordered list: A bulleted list of items
  * Definition: A list that formats words and their definitions in an easy-to-read format.

  2.  What is the basic structure of an element used to link to another website?


  ```
  <a href="Link to page">Clickable text here</a>
  ```

  3.  What attribute should you include in a link to open a new tab when the link is clicked?


  ```
  target = "_blank"
  ```


  4.  How do you link to a specific part of the same page?

  In the `<a>` element, the `href` attribute should be changed to `#IDNAME`. The `idname` is the id of the part of the page you want to bring the user.


  ```
  <a href="#hello">Greeting in English</a>
  <h2 id="hello">Hello!</h2>
  ```
  ## Chapter 10, 11, and 12 Questions

    Answer these questions about the reading in your `day2-exercises.md`:

    1.  What is the purpose of CSS?
CSS uses rules to specify how the content of an element should appear.

    2.  What does CSS stand for? What does cascading mean in this case?
CSS stands for 'Cascading Style Sheets.' Styles are are being applied to different elements in order of precedence. The rules cascade on top of each other, where the last rule is what is applied.

    3.  What is the basic structure of a CSS rule?

A CSS rule includes a selector and a declaration. The declaration includes a property and a value.

```
p {
  font-family: Arial;}
```


    4.  How do you link a CSS stylesheet to your HTML document?

You use a `<link>` element in the `head` section of your code.
```
<head>
  <link href="css/example.css" type="text/css"
  rel="stylesheet" />
</head>
```

    5.  When is it useful to use external stylesheets as opposed to using internal CSS?

External CSS is useful when you need to allow all pages to use the same style rules. It also keeps the content separate from how the page looks. You can also edit the style in one file and change it for everything.

    6.  Describe what a color hex code is.

Color hex codes are references to specific colors made up of red, green, and blue. Hexadecimal numbers fit more information in a smaller amount of space.

```
#66cdaa
#dd4422
#4432ae
```


    7.  What are the three parts of an HSL color property?


* Hue: The colloquial idea of color.
* Saturation: Amount of gray in a color. 0% is gray, 100% is the color.
* Lightness: Amount of white or black in a color. 50% is normal, 100% lightness is white, 0% lightness is black.


    8.  In the world of type face, what are the three main categories of fonts? What are the differences between them?

* Serif: Have extra details on the ends of the main strokes of the letters.
* Sans-Serif: Have straight ends to letters with a cleaner design.
* Monospace: Every letter is the same width, giving a type-writer-y look.



    9.  When specifiying font-size, what are the main three units used?

* Pixels
* Percentages
* Ems


    Add to the page you created in CodePen on Day 1:

    *   Add a color to the text of all of your headings (using hex codes).
    *   For your `h1` heading, add a background color.
    *   Make your headings a serif font, and make the paragraph text a sans-serif font.
    *   Change a snippet of paragraph text to be italic using the font-style property (do not use the `<i></i>` in this case).
