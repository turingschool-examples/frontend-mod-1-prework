## Images HTML

### 1. In an image element, why is the `alt` attribute important?

The **alt** attribute (often referred to as _alt text_) provides a text description of the image. It should give an accurate description of the image content so it can be understood by screen reader software and search engines. It's especially important for people with visual impairments.

### 2. What determines if an image element is inline or block?

When an `<img>` element is inside a block level element, you can determine that the image is _inline_ because any text or other inline elements will flow around the image. When an `<img>` element is _block_ the image is followed by a block level element. In other words there would not be text or inline element flowing around the image.

### 3. What are the benefits of `jpg` or `png` image file formats?

**JPG** (a synonym of JPEG) is beneficial when using a picture with many different shades or colors. Like snow, grass or the sky. It also has a small file size and is widely supported.

**PNG** is beneficial when saving images with few colors or large areas of the same color. When an area in a picture is filled with exactly the same color, it is know as flat color. Logos, illustrations, and diagrams are a few examples. Unlike JPG, there is no loss in quality when opened and saved again.

## Images CSS

### 1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

You would benefit using CSS to specify the dimensions whenever the images are consistently sized across a site. This will save time. Where the `<img>` elements appear in HTML, you can create names (for each image size), then assign them to values for the class attribute.

### 2. What is an image sprite, and why is it useful?

 An image **sprite** is a collection of images put into a single image, which is used for several different parts of an interface. In return means the browser only needs to request one image rather than many images helping to reduce the number of service requests and load the content faster. 
