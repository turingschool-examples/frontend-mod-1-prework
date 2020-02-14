# Day 4: HTML, CSS, and JavaScript

## Open your local copy of frontend-module-0-capstone in Atom

In the day_4 directory, create another file called `day4-exercises.md`. This is where you'll put your answers to the following questions.

## Read Chapter 5 on Images HTML from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Answer these questions about the reading in your `day4-exercises.md` file:

1.  In an image element, why is the `alt` attribute important?
the alt attribute acts as a substitute if the original photo fails to load. It's usually a very short description of the photo.
2.  What determines if an image element is inline or block?
It depends on where it is in relation to the elements that it is next to. If an image is followed by a block element like <p>, it will act as a block element and start on a new line. However, if it is located *inside* a block element, it will act as though it were an inline and appear within the same line as wand inbetween the words of which it was placed similar to using <em>.
3.  What are the benefits of `jpg` or `png` image file formats?
Websites will often use these formats the most. This assures that the page will load faster than it would if a different, less common format has been used and will also appear sharper than it would otherwise.

## Read Chapter 16 on Images CSS from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

Answer these questions about the reading in your `day4-exercises.md` file:

1.  What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
It allows you to categorize different sizes of images, for example, small, medium, large and control them easily from CSS. Because these classes and the sizes of your pictures have been properly classified and organized in CSS, your page loads more quickly as opposed to loading each individual image's height and width which would take longer.

2.  What is an image sprite, and why is it useful?
An image sprite is a single image that is used in other parts of the user interface. It is useful because the browser only needs to download the image once for it to be used on the page which minimizes the amount of files the browser needs to download thus making load times much faster.


Continue working with the page you created in CodePen, and add a couple relevant images to your paragraph text.

## Read the Introduction and Chapter 1 from [JavaScript & jQuery: Interactive Front-End Web Development](https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_5?ie=UTF8&qid=1541447422&sr=8-5&keywords=duckett)

When you're done reading the Introduction chapter, watch [this short video](https://www.youtube.com/watch?v=JzZFccCEgGA) about the Chrome Developer Tools. We'll be using the console to write some JavaScript code on Day 5 and Day 6.

## Save your day 4 file in git and push to GitHub

Using the commit message: `Add day 4`, add, commit, and push your changes to GitHub!
