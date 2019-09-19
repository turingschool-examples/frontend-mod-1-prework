# Day 4 Exercises
## Chapter 5

### 1.  In an image element, why is the `alt` attribute important?
The alt element provides a text description of the picture associated. This is important for accessibility as it's used by screen readers to read out the content of the page for those who might have sight impairments.

### 2.  What determines if an image element is inline or block?
This is dependent on where the img tag is placed.

### 3.  What are the benefits of `jpg` or `png` image file formats?
Jpg format allows for a richer display of a wider range of colors within a picture. Png on the other hand is better suited for images all of one color.

## Chapter 16
### 1.  What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
There are several reasons. As the HTML and CSS loads first. It allows the page to know how much space to allocate without having to wait for the images to load. You can also easily reference common size configurations with the class element

### 2.  What is an image sprite, and why is it useful?
A Sprite is when a single image is used for many different parts of an interface. A common example are buttons which respond differently depending on user action (click, hover). They utilize the same image element but change background position based on interaction.
