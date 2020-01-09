**1.  In an image element, why is the alt attribute important?**


    When adding an image to your page you use the image element.  This element must carry two attributes: src and alt.  The src attribute tells the browser where to find the image file.  The alt attribute gives a text description of the image which describes the image when it cannot be seen.  The text used in the alt attribute is commonly referred to as alt text.  It should give an accurate description of the image content.  This is important so it can be understood by screen reader software and search engines.  If the image has no meaning and is just there to decorate a page then still use the alt attribute but leave the space between the quotes empty.  


**2.  What determines if an image element is inline or block?**


    Whether an element appears on a new line determines whether the image element is inline or block.

    Block elements always appear on a new line.  If an image element is followed by a block level element (h1, p) then the block level element will sit on a new line after the image.

    Inline elements sit within a block level element and do not start on a new line.  If an image element is inside a block level element, any text or other inline elements (b, em, img) will flow around the image.


**3.  What are the benefits of jpg or png image file formats?**


    When you have many different colors in a picture you should use a jpg format.  This format should be used for storing photographs and realistic images.  Jpg files also allow you to create a smaller file size than you could with a png format.  This is important because a smaller file size will allow the web page to load faster.  A jpg formats quality is significantly less than a pgn.

    When you are saving images with few colors or larger areas use a png format.  Png is a good choice when storing line drawings, text, images with few colors and iconic graphics with a small file size.  The image quality is the same before and after compression.  A large benefit of a png format is that it supports transparency.  This means you can have a transparent background for your image as opposed to a box outlining your file.  A pgn file also holds more information than a jpg.


**1.  What is the benefit of specifying the height and width of images in CSS compared to specifying in HTML?**


    Controlling the height and width of images in CSS keeps the rules that affect the presentation of your page in CSS and out of HTML markup.  It is also very helpful when you use same sized images on multiple pages of your site.


**2.  What is an image sprite, and why is it useful?**


    An image sprite is when a single image is used for several different parts of an interface.  You can add the logo and other interface elements, as well as buttons to the image.  An advantage of using sprites is that the browser only needs to request one image rather than multiple images.  This can allow a web page to load faster.  Sprites are commonly used in situations where a webpage has multiple images that have the same size.  For services that handle a very large number of users, reducing the number of requests is vital for increasing responsiveness.  
