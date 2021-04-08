### Reading (Chapter 5 of HTML/CSS)

**1. In an image element, why is the alt attribute important?**

Alt text is important because it describes the image if one cannot see it, either due to a broken or unavailable image or if a user is using screen reader software. Another important use of alt text is that it can be used by search engines.

<br />

**2. What determines if an image element is inline or block?**

The image element is an inline element however this can be modified using CSS. Image elements can also be placed within block level elements. If an image is placed before a block level element, the image will appear on its own line as the block level element will begin on a new line.

<br />

**3. What are the benefits of jpg or png image file formats?**

The benefits of each format depend largely upon the application to which they are applied.

JPEG can be a more useful format for displaying images with many gradations of color, such as a photograph, because the format uses lossy compression to achieve a smaller file size, benefitting load times. In this scenario, JPEG is superior to GIF, for example, because the JPEG format allows for more than 256 colors. If load times are a concern, then it might make sense to use JPEG over PNG due to the reduced file size. The JPEG format balances file size and image quality.

PNG is a lossless compression file format. This means file sizes tend to be larger compared to files saved using JPEG, although the PNG file will be of higher quality. With respect to web applications, the PNG format is largely relegated to line drawings, icons, logos, and illustrations with few colors so as to maintain image quality while keeping the file size small. PNG also support transparency.

<br />

### Reading (Chapter 16 of HTML/CSS)

**1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?**

It's more efficient to handle via CSS. An additional benefit to specifying image size via CSS is that it allows the page to load smoothly. Often, images will load after the HTML and CSS. If the page is rendered before the image(s) load and the page doesn't know how much space to leave for an image, then other elements on the page may shift as the image(s) load, which is detrimental to the user experience.

<br />

**2. What is an image sprite, and why is it useful?**

An image sprite is a single image (which often is comprised of multiple images in a grid) that is used multiple times. For example, the sprite may contain a logo, back button icon, forward button icon, and home button icon. The sprite can then be placed as a background image on an element and the positioning of the background image will determine which part of the sprite is shown to the user. This is useful because the browser needs only to request this single sprite instead of multiple images, which can reduce load times.

<br />
