# Mod 0 Capstone

## DAY 4


### Read Chapter 5 on Images HTML from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)


1.  **In an image element, why is the `alt` attribute important?**
	* The alt image element allows for the user to see an alternate text name for the image. We would define something reasonable like "Cat Picture" instead of the actual image name "`DC003.jpg`"
2.  **What determines if an image element is inline or block?**
	* The parent element determines whether the image results in a inline or block element style.
3.  **What are the benefits of `jpg` or `png` image file formats?**
	* `jpg` and `png` are bitmaps, this is contrary to photo pictures that use dpi(dots per inch), a bitmap is preferred since displays all use pixels for mapping, webpages are capped at 72 pixels per inch. The benifit of using the bitmap format and limiting it to 72ppi means that the images could be smaller in file size than a traditional 300dpi file format and reduces overall load time of an image that would look identical on a computer screen.



### Read Chapter 16 on Images CSS from [HTML and CSS: Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

1. **What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?**
	* Consistency across multiple images or a portfolio of Images
	* Swapping out image sizes based on screen resolution(across devices)
2. **What is an image sprite, and why is it useful?**
	* Image sprites are useful for speeding up load times, instead of loading a new graphic for each image request, we can instead load a portion of the overall image and only request and load it once from the server to the user.
