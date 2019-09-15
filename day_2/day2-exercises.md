1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

Ordered lists are lists where each item is ordered by number.

Unordered lists are lists that begin with bullet points.

Definition lists are made up of a set of terms along with the definitions for each of the terms.

2. What is the basic structure of an element used to link to another website?
```
<a href="https://www.google.com">Google</a>
```

3. What attribute should you include in a link to open a new tab when the link is clicked?

```
"target="_blank"
```
as in
```
<a href="https://www.google.com"> "target="_ blank" Google</a>
```

4. How do you link to a specific part of the same page?

By adding an id such as
```
<h1 id="top">Tippity Top</h1>
```
attribute to the desired location on the page. Then use an <a> element with the href attribute and the same id word such as
```
<p><a href="#top>Go to top</a></p>
```
1. What is the purpose of CSS?

To add more design to a web page by adding rules that specify how each element should appear.

2. What does CSS stand for?

Cascading Style Sheet

  What does cascading mean in this case?

 Arrange in a series or sequence. Kind of like CSS is over top of HTML.

3. What is the basic structure of a CSS rule?

By using selectors and declarations. A selector indicates which HTML element it governing ex. "p". A deceleration indicates how the elements referred to by the selector should be styled ex. "font-family: Futura;".

p {
  font-family: Futura;
}

4. How do you link a CSS stylesheet to your HTML document?

Using external css: add <link href="css/styles.css" type="text/css" rel="stylesheet" /> into the <head>.

Using internal css: add <style type="text/css"> into the <head>.

5. When is it useful to use external stylesheets as opposed to using internal CSS?

External CSS is used to add an outside CSS file into your HTML.

Interal CSS is used inside the HTML document and can only govern that page instead of multiple.

6. Describe what a color hex code is.

It is a six digit color code used to represent the amount of red, green, and blue in a color proceeded by the pound sign #. ex. #ee3e80

7. What are the three parts of an HSL color property?

Hue, Saturation, and lightness.

8. In the world of typeface, what are the three main categories of fonts?
What are the differences between them?

Serif which have extra details on the ends of the main strokes called serifs.

Sans-serif which have straight ends to letters, and appear cleaner.

Monospace which consists of every letter having the same width.

9. When specifying font-size, what are the main three units used?

Weight, style, and stretch.
