## Chapter 5 on Images HTML

### In an image element, why is the `alt` attribute important?
  The `alt` attribute is important in an image element because it contains a description of the image in text. If someone is unable to see and or is using a screen-reader for any reason, the `alt` attribute should contain an accurate description of the image so that the user can understand the content. If the image is just to make the page look better, the `alt` attribute should be left empty, but still included.

### What determines if an image element is inline or block?
  Whether and image element is an inline or block is decided by where you place the image in your code. If you place the image before a block element, the image will appear on its own line and the block element will appear on its own line below that. If you place an image inside of a block element, the image will be an inline image. This means that any text in the block element will flow around the image.

### What are the benefits of `jpg` or `png` image file formats?
  The `png` file format is a lossless compression format. This means that the image will be exactly the same regardless of how many times it is opened and closed, making it a good option for screenshots. The `png` is the best choice when you are dealing with an image that requires a transparent background, or has curved or cornered edges. It is also best to use `png` when an images has few colors, or large areas of the same color. The `jpg` or "JPEG" file format is a lossy format, meaning that images will lose quality when it is edited and saved, though they do have the advantage of smaller file sizes. If an image has a lot of colors, like in a photograph, it is a good idea to use the `jpg` format.

## Chapter 16 on Images CSS

### What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
  Specifying the height and width of images in CSS as opposed to HTML allows you to keep all of the code about how images appear localized to one place. This is useful because websites frequently use images of a few standard sizes. An example would be a recipe site, where the image of the dish always appears in the same sized box. By keeping your height and width (as well as other information that is standardized across all images on a site) confined to the CSS, you can make alterations to that one stylesheet and change the way images appear across the entire site. This is good practice with any style element that appears on each part of the site.

### What is an image sprite, and why is it useful?
  An image sprite is multiple states of one image stored in a single image file. This allows the page to load faster as it only has to load one image, as opposed to several. You can set this sprite as a background image, and then by using `:hover` you can change the position of the background image to show the correct instance of the image. When I was growing up, most video games were made with sprites (some still are.) There would be one image file that would show the character facing each direction, as well as in any poses that weren't standard movement poses. Inputs in the game would tell the code with of these states of the character featured in the sprite file should be shown. On a site that can make a button look like it has been depressed, while in a game it could quickly shift between sprites to give the impression of movement.
