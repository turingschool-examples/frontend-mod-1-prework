## Read Chapter 5 on Images HTML from [HTML and CSS: Design and Build Websites]

Answer these questions about the reading:

1.  In an image element, why is the `alt` attribute important?
- the `alt` attribute provides a text description of the image (if you cannot see it)
- the `alt` text needs to be an accurate description for search engine optimization and screen reader tech.

2.  What determines if an image element is inline or block?
- The placement of the `<img>` determines  whether or not it is a block or inline element; were an image is placed in the code will change how it is diplayed:

  - `Block Element` BEFORE A PARAGRAPH - the paragraph starts on a new line after the image.
  - `Inline Element` INSIDE THE START OF A PARAGRAPH - the first row of text aligns with the bottom of the image
  - `Inline Element` IN THE MIDDLE OF THE PARAGRAPH - the image is placed between the words of the paragraph that it appears in.

3.  What are the benefits of `jpg` or `png` image file formats?
- `JPEGs` should be used for colorful images
- `PNGs` should be used when saving images with few colors or large areas of the same color
- `PNGs` can be used to save images with transparency, or drop shadows that, where the transparent section is not completely vertically or horizontally aligned.

## Read Chapter 16 on Images CSS from [HTML and CSS: Design and Build Websites]

Answer these questions about the reading:

1.  What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
- One benefit of specifying image dimensions in CSS, is that any HTML element that employs a class that a CSS selector calls out,
will be resized. This allows the resizing of multiple elements at one time with only 1 CSS declaration. If the resizing code were
added to the HTML document, each element needing to be resized would have to have resizing code added to it.
2.  What is an image sprite, and why is it useful?
- An image `SPRITE` changes the appearance of a button when the user rolls over it, and again when the button is clicked on.
  - The button has 3 states then:
  - `NORMAL` - the button has not been rolled over or clicked
  - `ROLL OVER` - the button has been rolled over
  - `CLICKED` - the button has been clicked on by user
- images sprites are useful, because they can reveal different choices, moves or clicks made by a user.
- the benefit of an image sprite from a technical standpoint is: a web browser only needs to request one image (rather than many images) which can make the page load faster.

[√] Continue working with the page you created in CodePen, and add a couple relevant images to your paragraph text.
