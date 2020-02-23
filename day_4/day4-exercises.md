#Chapter 5 Questions#

1. In and image element, why is the alt attribute important?

- The `alt` attribute will give a text description incase the viewer cannot see the image. This will be important for users with vision impairments that are using a screen reader. This will also be important for the user who's browser might not support the image. This could also be nice for another developer searching through code.

2. What determines if an image element is inline or block?

- A **block** image element will always appear on a new line. Block level element examples include heading and paragraph elements. An **inline** image element will sit in a block level element and will not start a new line. The image will be part of the flow of the text.

3. What are the benefits of jpg or png image file formats?

- A `jpg` image file format should be used for saving pictures that have rich and complex colors or many different colors in general. The `jpg` format advantages include: high resolution, a small file size, and adjustable compression (good for modification). A `png` image file format should be used to save images with simple or few colors, or when there are large areas with the same color (flat color). The `png` format advantages include: supports opacity or transparency and uses lossless compression (which is better for saving, restoring, and re-saving repeatedly).

#Chapter 16 questions#

1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

- Since the HTML and CSS code can load at different speeds, specifying height and width in CSS tell the browser how much space is needed so the page can load more smoothly. Since the CSS code can be controlled from one area it allows the developer to make changes across multiple web pages at once. Since many websites use consistent sizing across many pages image size can be quickly changed across the site. This is done by adding selectors for the class name, then using CSS width and height properties.

2. What is an image sprite. and why is it useful?

- A sprite refers to an image that is used repeatedly for many different parts of an interface. These images could include logos or buttons. The sprite is used so the web browser requests only one image. This can help the webpage load faster.
