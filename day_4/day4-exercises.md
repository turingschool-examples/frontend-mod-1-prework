###In an image element, why is the alt attribute important?
The `alt` attribute describes the content of the image, in case the viewer cannot see it.

###What determines if an image element is inline or block?
The element that follows it. For example, if the element after the `<img />` element is inline, it will flow around the image. If the element that follows is a block element, it will be placed on a newline.

###What are the benefits of jpg or png image file formats?
JPEGs are best suited for images that have a lot of different colors in them- it will preserve the colors. PNG images are better for images with only a few colors, such as logos or diagrams.

###What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
If you are using the same images in multiple parts of your site (such as a logo,) it is better to specify the width and height in the CSS, so you won't have to repeat it over and over again.

###What is an image sprite, and why is it useful?
An image sprite is a collection of different images on the same file. Some examples include having multiple states for a button (inactive, hover, pressed.) They are useful because the browser will only need to load one image for an element (or multiple elements) vs. having to load multiple images for the same element.
