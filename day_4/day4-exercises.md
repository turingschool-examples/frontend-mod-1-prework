1.  In an image element, why is the `alt` attribute important?
The `alt` attribute in an image element is important because it provides a description of the image in case it cannot be displayed.

2.  What determines if an image element is in-line or block?
Where you place an image element in your code can change whether it displays as in-line or block. If you place the image before the opening `<p>` tag for a paragraph, the image will be a block element. If you place the image immediately after the opening `<p>` tag, the image will be in-line with the first row of text. If you place the image in between words in a paragraph, the image will display as in-line between those words.

3.  What are the benefits of `jpg` or `png` image file formats?
* The `png` image file format can have a transparent background and allows animation. They do well with images with flat colors.
* The `jpg` image file format is best for photographs and images with lots of different colors. `jpg` images capture and preserve slight differences in color well.

<br><br>
1.  What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
One huge benefit of specifying image height and width in CSS is simply keeping all of your code that affects the presentation of a page in one place instead of spread between HTML and CSS. This way, you can keep your code organized more cleanly and know where to find the image dimensions when you need them. You can also set image size categories using CSS and then use the size categories as name attributes in image elements to easily create consistently sized images.

2.  What is an image sprite, and why is it useful?
An image sprite is a combination of several images into a single image file. The idea is that the larger image only needs to be downloaded once, then the displayed area shifts around to show different parts and create the illusion of separate images without increasing load time. 
