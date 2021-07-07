1.  In an image element, why is the `alt` attribute important?

    The alt attribute is a text description of the image. This text will only display if the image cannot be displayed.


2.  What determines if an image element is inline or block?

    An image is a block element of it is outside of a block element (p, ol, ul, h1, h2). For example if the image is outside of a p element, then the image will be above the text.

    An image is an inline element if it is inside one of those block elements. So if the image is inside of a p element it will be inline. The image will also be inside of the text.



3.  What are the benefits of `jpg` or `png` image file formats?

    jpg is best when used with images that have many colors. jpg is best for smaller images

    png format is best used for images that are flat in color. png's are also best for transparent images that have diagonal or rounded edges. Or if you want a semi-opaque transparency or a drop shadow. png is a good choice for strong line drawings, text, and iconic graphics at a small file size.


1.  What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

    In HTML you can apply classes to images, such as, img_small. Since its best to have similar sized images throughout your webpage you can apply CSS as such to keep things consistent

          .img_medium{
            width: 500px;
            height: 500px;
          }

          In HTML you would have to type the code per image as attributes. The way in CSS is cleaner and more organized.



2.  What is an image sprite, and why is it useful?

        An image sprite is a collection of images put into a single image. A web page with may images can take a long time to load and generates multiple server requests. Using image sprites will reduce the number of server requests and save bandwidth.

        The images in a sprite could potentially include an image of a clickable image that changes to a different image when the user clicks on it or even hovers over it.
