# Day 4 Exercises

## Chapter 5(Images) Questions and Answers
1)  In an image element, why is the `alt` attribute important?
* Answer: The `alt` attribute is important on images because it describes the content of the image.  This is handy for screen readers and search engines to understand the image.

2)  What determines if an image element is inline or block?
* Answer: Where the image is placed determines if it will be an inline or a block.  If the image is placed inside of a paragraph, it will be an inline element because it's inside of another element.  If the image is placed before a block element (like before a paragraph or heading), then the image will not be in the element and will act as a block.

3)  What are the benefits of `jpg` or `png` image file formats?
* Answer:
  * `JPG`: Used for pictures with many different colors.
  * `PNG`: Used for pictures with few colors or with large areas of one color.

## Chapter 16 Questions and Answers
1)  What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
* Answer: The benefit to using CSS for image dimensions is that developers can reference that specified height and width for multiple images on the HTML Page.  They do not have to keep entering in the same dimensions on HTML.  All they need to do is reference the class for the image dimensions that is defined in CSS.  It also helps keep site image sizes more uniform.  Many sites like to use just a few different image sizes to keep the site clean.

2.  What is an image sprite, and why is it useful?
* Answer: An image sprite is a single image on a webpage used for several different parts of the interface. You can add logos, buttons, and other interface elements to the sprite. It's useful because the site only needs to load one image and then we can use CSS to change the image as needed.

[CodePen Website Link Day 4](https://codepen.io/nickstaylor/pen/jOEzXZa)
