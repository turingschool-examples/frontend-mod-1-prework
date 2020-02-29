1. In an image element, why is the alt attribute important?
    * It provides a text description of the image so it's important for screen readers used by individuals with visual impairments and for search engines.  Also, in case an image doesn't load.

2. What determines if an image element is inline or block?
    * Where you place the image.  
    * If an image is before a block level element, it will appear on it's own line.  If the image is inline, the text will wrap/flow around the image.

3. What are the benefits of jpg or png image file formats?
    * JPG for whenever you have a lot of colors like a photo
    * PNG for images with few colors or large areas of the same color like a logo

---


1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
    * It helps the page load more smoothly since the HTML and CSS code often loads before the images, so if the page knows how much space to leave for the image the rest of the page can continue to load
    * It can also be more efficient since a lot of sites use the same sized images across multiple pages

2. What is an image sprite, and why is it useful?
    * Sprite - when a single image is being used for different parts of an interface
    * It's useful because it's more efficient since the browser only needs to request one image and not multiple 
