**CH 5**
1. In an image element, why is the `alt` attribute important?

    This attribute gives a text description of an image if it is not shown. This is helpful for developers if the URL of the image is no longer working. It's also helpful for individuals using screen reading software to understand the message the webpage is giving without being able to view the image itself.

2. What determines if an image element is inline or block?

    If an `<img>` element is before or after a block element (such as `<p>`) then it will be blocked, on a separate line.
    
    But if it is in the midst of a block level element, it stays inline (i.e. `<b>`, `<em>`, `<img>`)

3. What are the benefits of `jpg` or `png` image file formats?

    `png`/`gif` for images with few colors or large areas of the same color.
    
    `jpg` for images with many colors.

**CH 16**
1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

    Allows a webpage to load quicker and smoother. Helps make all images on a site consistent.

2. What is an image sprite, and why is it useful?

    An image sprite is when an image is used for several parts of an interface, this reduces the number of images the browser needs to load.
