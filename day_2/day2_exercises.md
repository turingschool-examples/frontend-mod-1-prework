## There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
  1. Ordered lists: are lists where each item in the list is numbered. For example, the list might be a set of steps for a recipe that must be performed in order, or a legal contract where each point needs to be identified by a section number.
  2. Unordered list: are list that begin with a bullet point (rather than a character that indicate order)  
  3. Definition list: are set up with a set of terms along with definition for each terms.

  To show the differences between the three, I believe it is best to look at the structure of the elements. Let's begin!

*<ol>ordered_lists</ol>*

  <ol class="store_list">
      <li> Cut the bread </li>
      <li> Spread the yogurt </li>
      <li> Cook the pasta </li>
  </ol>


*<ul>unordered_lists</ul>*

  <ul class="cooking_measurements">
      <li> 12oz liquid smoke </li>
      <li> 5 onions </li>
      <li> 5lbs beef loin</li>
      <li> 6 garlic </li>
    </ul>


*<dl>definition_list</dl>*

  <dl class="favorite_sushi">
      <dt>Sashimi</dt>
      <dd>Sliced raw fish that would be served with condiments such as radish or ginger</dd>
      <dt>Nigiri</dt>
      <dd>Is a slice of raw fish over pressed vinegared rice.</dd>
    </dl>

## What is the basic structure of an element used to link to another website?
  ``<a href="http://www.facebook.com">facebook</a>``Within the first link elements we use an "href" to link to another page and place a name of the link within both link elements. I.E. facebook

## What attribute should you include in a link to open a new tab when the link is clicked?
  ``<a href="https://facebook.com" target="_blank">facebook</a>`` The `target="_blank` is what is added to open link on a new page.

## How do you link to a specific part of the same page?
  To link a specific part of a same page you must first identify the points on the page where the link will go to. We can do that with the 'id' attribute. Lets, get down to business! #MULAN

  - ``<header id="top" class="main_head"> BLAH BLAH BLAH </header>``
        -notice how we not only have a class but we also have the "id" attribute set to "top"?
  - ``<p id="mid" class="half_way"> BAH BAH BAH </p> ``
        -same here but a little different...
  - ``<footer id="end" class="last_thing"></footer>``
        -footer has an "id" of "end" for the end of the page, get it?

  - Now lets say that we are scrolled all the way to the bottom of a really really long web page you could put this link at the bottom to allow users to jump to the top of the page rather than scroll.
    `<footer>
      <a href="top"> Top </a>
    </footer>`

  - Just to note that we can also put this link at the top, nested in the <header>. So we can jump to the bottom. We would just need to change the href="" link value from "top" to the appropriate id, "end".
    `<header>
      <a href="End"> End </a>
    </header>`


## What is the purpose of CSS?
  CSS: Also known as Cascading Style Sheets allows us to create rules that specify how the content of an element should appear.
## What does CSS stand for? What does cascading mean in this case?
  Also known as Cascading Style Sheets, the cascading portion of the txt refers to style sheets from to another. Allowing multiple style sheets to be used on one HTML document.
## What is the basic structure of a CSS rule?
  In my opinion I think the best way describe something is to have an example of what it is we are looking at.

  CSS example 1-A: ```p {
                  color: black;
                  font-size: 1.5rem;
                  margin-left: 30px;
                  margin-right: 30px;
                  display: inline-block;
                }```

  ```1 CSS Rule
    1.1 Selector
      1.1.1 Selectors indicate what elements the rule applies to.
        1.1.1.1 Example 1-A: p is the selector. *p for paragraph <p>*
    1.2 Declarations indicate how the elements referred to in the selector should be styled. They are split into two parts Properties and Values.
      1.2.1 Properties
        1.2.1.1 Properties indicate the aspects of the element you want to change.
          1.2.1.1.1 Examples 1-A: Colors, font-size, margin-left, margin-right.
      1.2.2 Values
        1.2.2.1 Values specify the setting you want to use for the chosen properties.
          1.2.2.1.1 Example 1-A: black, 1.5rem, 30px, inline-block.
          ```

## How do you link a CSS stylesheet to your HTML document?
  *usually found in the head* ``<link href="css/style.css" type="text/css" rel="stylesheet" />``
## When is it useful to use external stylesheets as opposed to using interal CSS?
  It is important to know when to use each one and for what reason. So. Lets define when we are to use them. Yay!
    - external: We primarily want to use external for the fact that it is a general practice and it creates less code and smaller HTML pages. All by a simple link.
    - internal: We will tend to use this only if we are creating one page and we want to keep everything together and in the same file.
## Describe what a color hex code is.
  Color hex code is a six digit code that gives you the amount of red, green and blue are in a color preceded with a #. i.e. ``#ee3e80.``
## What are the three parts of an HSL color property?
  - Hue: expressed as an angle between 0 and 360 degrees.
  - Saturation: expressed as a percentage.
  - Lightness: expressed as a percentage with 0% being white, 50% being normal, 100% is black.
  Example: ```.p {
                background-color: #ee3e80;
                background-color: hsl(0,0%,68%)
              }```
## In the world of typeface, what are the three main categories of fonts? What are the differences between them?
  - Serif: Has extra detail on the end of the main strokes of letters.
  - sans-serif: Has straight ends to letters and therefore have much cleaner look.
  - monospace: Every letter has the same width.
## When specifiying font-size, what are the main three units used?
  - Pixels: Very precise control over how much space their txt take up.
  - Percentages: The percentage is based off of 16px browser. 75% = 12px or 200% = 32px.
  - EMS: is equivalent to the width of the letter m.
