1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

    The three main type of lists are: ordered, unordered, and definition.
    An ordered list is is where each item is numbered. This set of questions would be an ordered list. I need to answer question 1 then 2 and so on. An unordered list is represented by bullet points, as there isn't really an order to them. I think of my grocery list app here. Lastly we have the definition list where we have terms listed and accompanied by their definition. I think of a glossary or important terms along side an article.

2.  What is the basic structure of an element used to link to another website?

    To link to another website a link needs to have an opening link tag followed by the text the user will click on and finally the closing link tag.

    <a href="http://www.pageaddressforlink.com">Example Link Structure</a>

    It is important to write quality link text, so people know where they are navigating to and folks using screen readers have a good experience as well.

3.  What attribute should you include in a link to open a new tab when the link is clicked?

    Sometimes I love this feature and sometimes it is the most annoying thing about browsing a site like Etsy.

    To have a link open a new tag you need to have the same structure as above but with the target attribute on the opening <a> tag. The target will be assigned to \_blank.

    //The forward slash is only there to prevent Atom from reading that underscore.

    <a href="http://www.pageaddressforlink.com" target="\_blank">Example Link Structure</a>

4.  How do you link to a specific part of the same page?

    You need to add a unique id attribute to your elements that you wish to link to.
    Then in the link reference tag you need use # and a value assigned to the id attribute. Just a simple example below.

    <h1 id="top">Welcome to the Top of the Page</h1>
    <a href="#top"> Top</a>

Questions in relation to chapters 10,11, and 12.

1.  What is the purpose of CSS?

    CSS dictates how something will look inside the HTML structure. CSS makes it pretty and have personality!

2.  What does CSS stand for? What does cascading mean in this case?

    CSS stands for Cascading Style Sheets. This use of cascading means that each of the rules that apply to an element can change based on the precedence. This makes it easy to have simpler style sheets that have generic rules for elements.

    I want to say that the cascading styles also are able to define the rules for the page based on the browser the person is using.

3.  What is the basic structure of a CSS rule?

    A CSS rule is comprised of two parts. A selector and a declaration. The selector assigns the element that the declaration will apply to. The declaration is made up of a property and a value. There can be multiple properties assigned to an element and different values for each.

4.  How do you link a CSS stylesheet to your HTML document?

    You can use the <link> element within the head tag to tell the browser where to find the CSS style sheet.

5.  When is it useful to use external stylesheets as opposed to using internal CSS?

    When you have a site with more than one page it is a good idea to have an external CSS style sheet. This allows all pages to use the same rules and cuts down on repetition of code. It allows the page content to be separated out and load faster. It also saves on work time. To change the look of the site you only need to edit one file.

6.  Describe what a color hex code is.

    A hex code is a six-digit code that specify the amount of red, green and blue in a color. They are preceded by a #.

7.  What are the three parts of an HSL color property?

    Hue, saturation and lightness.

    Hue is color essentially while saturation is the amount of gray in that color. Lightness is the amount of white or black in a color and is sometimes referred to as luminosity.

8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?

    Serif, sans-serif, and monospace.

    Serif typefaces that have extra details on the ends of the main strokes of the letter. The traditional and historical typeface. Next we have sans-serif letters, these have straight ends to the letters and are considered to be "cleaner". In this digital age with all our screens, we tend to use sans-serif fonts to make things easier to read. Finally the monospace type where every letter is the same width. These fonts align nicely and make the text easy to follow.

9.  When specifying font-size, what are the main three units used?

    Pixels, percentages and EMS.
