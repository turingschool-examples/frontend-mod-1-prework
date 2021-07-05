# Day 4: HTML, CSS, and JavaScript

# Chapter 5

# 1. In an image element, why is the alt attribute important?
**Answer:**
The `alt=` attribute provides a text description of an image that may be read aloud using a screen reader. This is important for visually impaired users wanting to experience your website. This information is also read by search engines.

# 2. What determines if an image element is inline or block?
**Answer:**
Where the code for an image exists will determine if it's inline or block. If the image code appears before `<p>`, it will appear on its own line. If the image code appears within a `<p>` it will be inline. Image placement can also be modified using CSS.

# 3. What are the benefits of jpg or png image file formats?
**Answer:**
Images with many different colors (i.e. photographs) should be saved as `.jpg` files. Images with few and/or flat colors (i.e. logos, cartoons, etc.) or images with transparent parts or rounded edges should be saved as `.png` files. These two image formats are universally accepted by most web browsers and tend to have smaller file sizes making the images load faster.

# Chapter 16

# 1. What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?
**Answer:**
When using CSS to size an image, you can set certain rules to be applied to multiple images throughout the website. Most websites only have a few different image sizes that remain consistent throughout the website. For example, you can assign a class of small, medium, or large, for all the images on your site. Then, in one place in your CSS you can make a rule that references the image display depending on the predefined small, medium, or large classes. This way the page is clean and consistent looking and you don't have to repeat sizing code in your HTML for every image.

# 2. What is an image sprite, and why is it useful?
**Answer:**
A sprite is when a single image is used for several different parts of an interface. Sprites are useful because the web browser only needs to load one image rather than many, which results in faster load times.
