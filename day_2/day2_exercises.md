## 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
* Ordered `<ol></ol>` and unordered `<ul></ul>` list elements both house the list item element `<li></li>` vs definition list element `<dl></dl>`contains definition term and definition elements, respectively `<dt></dt> and <dd></dd>`
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
#Section 2

## 1. What is the purpose of CSS?
* CSS allows for the designer to add styling to their site by creating rules for displaying the elements on the site. To understand their purpose, it is helpful to know CSS rules are made of two parts: a `selector`, the element the rule should apply to, and a `declaration` which define how the selector should be styled. In addition, a declaration has two parts separated by a colon as such,  `{property: value;}`. A selector is any element in HTML that can be styled. Common property of declarations include `font-family` (font type), `color` (defines font color), `background-color` (background color), etc..., each having possible specified values. Once the basic structure is known, fluency in CSS comes from knowing the property and value pairs.

## 2. What does CSS stand for? What does cascading mean in this case?
* Cascading Style Sheets. CSS rules are followed in a cascading fashion: in a descending manner, step-wise. This is handy to know in three situations. First, if two rules contains identical elements, the latter of the two in the style document is displayed. Secondly, if one selector is more specific than another, the more specific rule is followed. Lastly, adding `!important` allows the browser to know that that rule should take precedence over other ones throughout the document.

## 3. What is the basic structure of a CSS rule?

```CSS
  selector {
    property: value;
    property: value; }
```
  The components displayed are defined above in question 1.

## 4. How do you link a CSS stylesheet to your HTML document?

  We use the empty element `<link />` along with three attributes `href, type, rel`. `href` informs the browser of the CSS file location, usually in a folder called `css` or `styles`. `type` specifies the type of file the link contains; `"text/css"` should be the value. `rel` defines the relationship between the HTML file and the file it is linked to. This value should read `stylesheet` when a CSS file is involved. The `<link />` element belongs within the `<head></head>` element. Here's an example borrowed from the text:

```HTML
<head>
  <title>Using External CSS</title>
  <link href="css/style.css" type="text/css" rel="stylesheet" />
</head>
```

## 5. When is it useful to use external stylesheets as opposed to using internal CSS?

  External stylesheets are the norm in the industry. They allow for style updates to load across the entire site rather than updating that code on every page within the site, in other words, repairs and maintenance can be done in a single document saving you tons of time. It also helps minimize the clutter in code documents. It helps keep load times down, because the code only has to be processed once. Internal code is useful when you wanna code-in exceptions to a single page across the website. However, since an HTML page can use more than one CSS style sheet, even this practice is discouraged. A good general rule to follow: keep site content separate from the rules that determine their appearance.

## 6. Describe what a color hex code is.

  A color hex code is one of three value types used with color properties in CSS. They are made up of six digit codes containing both letters and numbers, and preceded by a hash sign `#`. The digits represent the amount of red, green, and blue in each color. In `#80efc3`, for example, 80 would express the amount of red, "ef" the amount of green, "c3" and the amount of blue.

## 7. What are the three parts of an HSL color property?

  HSL stands for hue, saturation, and lightness. Hue is what we associate with color, often represented by a color circle where the angle represents the color. It may also be a slider with values from 0 - 360. Saturation is the amount of gray in a color. Saturation is represented as a percentage: 100% means full saturation 0% codes a shade of gray. Lightness, a.k.a. *luminosity* determines the amount of white or black in a color. Like saturation, it's also represented by a percentage, but slightly more complex in definition. In this case, 50% denotes normal color lightness, 100% lightness is white and 0% is black.     

## 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

  The main categories are serif, sans-serif, and monospace. Serif typeface has small details added to the end of the main strokes of letters, like the ornamentation in corinthian columns in ancient Greece and Rome. Times New Roman is a good example of this typeface. Sans means without in French, so without-serif means the extra ornamentation at the end of letters is not there making for cleaner design. Arial and Verdana are good examples. Lastly, there's monospace typeface. This typeface is often used in coding because each letter occupies the same width space so that text lines up nicely to facilitate reading. Courier is the best example.    

## 9. When specifying font-size, what are the main three units used?

  Font-size units include pixels, percentages, and EMS. Pixels is by far the most reliable unit because it directly correlates with the age-old point system for fonts. A point is 1/72 of an inch, and most computers displays have a resolution of 72 dots per inch. It is a fixed unit only affected by the resolution of a screen: lower resolutions make for bigger fonts, because each pixel would be bigger. The default size of text in a browser is 16 pixels. Both percentages and EMS are relative units based off of the default text size in a browser. Percentages seem self-explanatory, font size will be x% from the default size. An EMS is equivalent to the width of the letter m. An EMS unit is denoted by decimal deviations form the number 1, so that 2 means 200% from default size or .5 means 50%. Note, however, that the browser default size can be changed by the user hence the developer's desired look may not be achieved throughout the page. For example, a body text in two different browsers one is set to default the second to display body text at 12px. If you had the headings set to 200% of body text, one screen displays the text as 32px the other as 24px, which would be inconsistent with what the designer intended.     
