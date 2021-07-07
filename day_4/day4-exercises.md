# Part One #
## In an image element, why is the `alt` attribute important? ##
  An alt tag provides a text description of the image if you cannot see it. Especially useful for computer users who are blind and need a voiceover to read them a webpage, or if a user has bad/no service, and cannot download the entire page with pictures. It is good practice to still use an alt tag even for images with no graphic meaning, such as a divider or spacer.

## What determines if an image element is inline or block? ##
  **Block Elements** always appear on a new line. If the image is followed by a block level element, such as a paragraph, then the element will sit on a new line.
  `<h1>` `<p>` `<ul>` `<li>` are examples of block level elements.
  **Inline Elements** sit within a block level element and do not start on a new line. If the image element is inside a block level element, any text will flow around the image.
  `<a>` `<b>` `<em>` `<img>` are examples of inline elements.

## What are the benefits of `jpg` or `png` image file formats? ##
  Whenever you have many different colors in a picture you should use **JPEG**.
  Use **PNG** or gif format when saving images with few colors or large areas of the same color.

# Part Two #
## What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML? ##
  Just like in HTML, specifying an image height and width in CSS allows the webpage to load around the image, while the image is being rendered. Particular useful because image files tend to be the largest, and therefor longest download time. A benefit to using CSS to determine your image height instead of directly in your HTML is once you have created a set size, you can name the template, and reuse the same size again on the webpage for consistency.

## What is an image sprite, and why is it useful? ##
  When a single image is used for several different parts of an interface, it is known as a **Sprite**. Breaking this down, a single image here means one image file is used. Visually that file has multiple sections to it. Functionally a sprite is set up to move the image file to show *only* what is needed per function in a window. As many as three functions can be saved in a sprite; nonactive, hover, and active.
