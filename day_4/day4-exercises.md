# Chapter 5 Questions

1. **In an image element, why is the alt attribute important?**

If you don't include and alt attribute with your images, then people who use screen readers will not know what the image is or why it is relevant to the page.

1. **What determines if an image element is inline or block?**

If an image is nested inside of a block level element then it will behave as a block level element. If an image is nested inside of a inline element then it will behave as thought it is an inline element.

1. **What are the benefits of jpg or png image file formats?**

- *jpeg* file format is good if you are saving a picture or anything with multiple colors. Pictures of snow or grass may appear as thought there is only one color, however there are actually several different shades of the same color and therefore should be saved in a jpeg format.
- *png* file format is good if you are saving an image that is primarily the same color. Images such as a logos, illustrations, or diagrams can often be saved as a png.

# Chapter 16 Questions
1. **What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?**

If you use CSS to size your images and you use images that are consistently the same size you can make a rule for all large, medium and small images. Then instead of writing the dimensions of each individual image in HTML you can use you CSS selector to call the same rule on several different images. This would save you from writing specific rules for each image.
```HTML
<img src = "images/dog-large.jpeg" class = "large" alt = "Pitbull" />
<img src = "images/cat-large.jpeg" class = "large" alt = "Ragdoll" />
<img src = "images/fish-large.jpeg" class = "large" alt = "Lionfish" />
```

```CSS
img.large {
  width: 500px;
  height: 500px;
}
```  

1. **What is an image sprite, and why is it useful?**

An image sprite is when you use the same image for several different parts of an interface. You could use a company logo on several different parts of a page and if you are using the same logo the browser will only need to request one image, which will make the page load faster.
