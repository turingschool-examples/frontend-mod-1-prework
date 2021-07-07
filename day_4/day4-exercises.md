### 1. In an image element, why is the alt attribute important?

The alt attribute provides a description of an image. This is important if the image is not displayed correctly or to assist individuals with visual impairment.

### 2. What determines if an image element is inline or block?

Where the image is placed determines whether it's inline or block. An img element *followed by* a block level element will make the image sit on a new line **above** the block level element. An img placed *within* a block level element would have the text flow **around** the img element.

### 3. What are the benefits of jpg or png image file formats?

* Jpg formats are best used when an image has many different colors.
* Png file formats are best used when you have an image with few colors or large areas of the same color.  Png is used for flat colors, such as logos illustrations and diagrams.



### 1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

When using consistently sized images across a site, you can use CSS to control the dimensions of the images instead of specifying the image size in the HTML.  Specifying the  size in CSS helps pages to load more smoothly because the HTML and CSS will often load before the images.  Pages will render without waiting for the image to download.

### 2. What is an image sprite, and why is it useful?

A spite is a single image used for several different parts of an interface. It's basically several images combined into one. Sprits are used rather than including separate image files as they are much more memory or bandwidth friendly. The advantage is requesting one image, vs requesting multiple images.
