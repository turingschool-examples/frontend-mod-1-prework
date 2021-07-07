# Day 4 Exercises

## Chapter 5 Questions
1) In an image element, why is the ```alt``` attribute important?
  * The ```alt``` attribute is important with an image element because provides a text description of the image. This is necessary for someone who is visually impaired, as the computer's screen reader software will read this description of the image on the page to them. This is also useful when it comes to search engines being able to understand what an image on a website is (SEO purposes).


2) What determines if an image element is inline or block?
  * If the ```<img>``` is followed by a block level element (i.e. ```<h1>``` or ```<p>``` elements) then the block level element will sit on a new line after the image.
  * Inline elements sit within a block level element and do not start on a new line. So if ```<img>``` (an inline element) is inside a block level element, any text will flow around it.


3) What are the benefits of ```jpg``` or ```png``` image file formats?
  * ```jpg``` image file formats are best for pictures (photographs) with many different colors.
  * ```png``` image file formats are best for images with few colors or large areas of the same color, such as illustrations or logos using flat colors.


## Chapter 16 Questions
1) What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
  * It's better to keep the rules that impact the presentation and display of a webpage in CSS and out of your HTML. This helps when making edits to images, as well as having better consistency.
  * You can also assign a class attribute to the ```<img>``` element in HTML and have a few select images sizes that you refer to in HTML, and then in CSS you can add selectors to specify the height and width properties there to control the dimensions for all images with that class attribute. 


2) What is an image sprite, and why is it useful?
  * An image sprite is when a single image is used for several different parts of an interface.
  * This is useful because the web browser only needs to request one image, rather than many images, so your web page will load faster.


## Prep for Day 5 and Day 6
- [ ] Read the Introduction and Chapter 1 from JavaScript & jQuery
- [ ] Watch this video: https://www.youtube.com/watch?v=JzZFccCEgGA


## CodePen
  * Link: https://codepen.io/rnthomas/pen/PowRypE
