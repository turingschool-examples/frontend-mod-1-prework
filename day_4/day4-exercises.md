## Day-4 Questions
### Chapter 5
#### In an image element, why is the alt attribute important?

The alt attribute is important because it can provide a description of an image that users can see in situations where they are unable to display the specified image.  More importantly, it is what is used in accessibility tools such as screen readers which are used by individuals with visual impairments.  The alt text helps them to better understand what is displayed in the picture.  The alt attribute also reveals information about the image so that it can be better included in search engines.

#### What determines if an image element is inline or block?

The location of the <img> tag relative to other elements determines whether its an inline or block element.  If a block level element follows the <img> then the image element will appear in block form and it will be on its own separate line.  If the image element is instead located inside of a block element then it will be displayed as inline form and the text before and after it will flow around it as well as appear on the same line if there is room for it.

#### What are the benefits of jpg or png image file formats?

The benefits of jpeg format are that it is a better case use for images which contain many different colors such as photographs or detailed pictures.  Png image file formats are a better case use for images with few different colors or images with large sections that share the same color.  Common png format images include logos, simple illustrations, and diagrams.  By using the appropriate file format for your image, it will improve the loading speed and display quality of that image on your website.  

### Chapter 16
#### What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

By specifying the height and width of images in CSS, you can keep those styling specifications within CSS and separate from the HTML which makes it easier to read and understand.  The HTML can be used for content which is its defining feature and CSS can be used to determine its styling which is its defining feature.  Also, for most webpages there are common sizes and layouts for various images used on the page.  There may be a pre-defined size used for images that display a product, or there may be pre-defined sizes for images that improve the look of the page.  By using CSS to specify height and width, it simplifies this task by applying those properties as well as future changes to all images that share a common class.  

#### What is an image sprite, and why is it useful?

An image sprite is a particular image that is used multiple times in different parts of the webpage.  The image can be used on buttons or on its own in various locations.  When a sprite is used, since only one of those images needs to be requested by the browser it makes the loading speed of the web page faster.
