# Section 1: HTML images

## In an image element, why is the `alt` attribute important?

  The `alt` attribute allows the designer to add a description of the image. This description should be fairly accurate for three reasons:
  * If the web browser cannot display the image, this text description will be displayed.
  * This text will be recognized by screen reader software and allow visually impaired users to better understand the content of the webpage.  
  * This text will also be used by search engines to optimize results.

  If the image is for aesthetic use only, the `alt` attribute should be added but the quotation marks left empty.

## What determines if an image element is inline or block?

  Placement, relative to other elements, determines how an image element will behave. The `<img />` element is empty, that is to say, it exist on it's own. If placed outside a block-element, for example a paragraph element, it will behave as a block; however, if the element is placed within the block element tags, the `<img />` element will behave as an inline element, and would be displayed in a continuous line with it's surrounding objects.

## What are the benefits of `jpg` or `png` image file formats?

  A JPEG file is better suited for photographs than a `.png` file. This is because photographs often feature colors that may look similar but are actually subtly different, even if they have a very monochromatic look. A `.png` file is better suited to images that have a few solid colors, or large areas of the same color. They are particularly useful for logos, illustrations, and diagrams. For example, we take a color sampler, say to create hexadecimal codes, to an image; if we are hard pressed to find two areas that produce the same hexadecimal code, then we should use `.jpg`. However, if the situation is reversed, and finding subtly different shades of the same colors is difficult, we should use a `.png` file. Bottom line, a `.png` image will usually load faster than a `.jpg` but also offer less detail.         


# Section 2: CSS images

## What is the benefit of specifying the height and width of images in CSS compared to specifying in the HTML?

  For starters, specifying an image size in either format allows for the webpage to load more smoothly, because it allows the browser to know how to flow the text around the image before the image is able to completely load, since images take longer than either HTML or CSS code to load. When a developer specifies the height and width of images on CSS rather than HTML, we see many of the same benefits as when implementing other styling attributes to a page. When image sizes remain consistent, as they do on many sites, developers can simply group those images in a class instead of designating a height and width attribute to each individual image on the page. Above all, this helps minimize clutter on the HTML page; remember that, as a rule, a developer keeps any styling rules from the content to allow for easier maintenance and flow, specifying height and width on a CSS file helps us keep to that rule. It also allows developers to achieve interesting results.    

## What is an image sprite, and why is it useful?

  When different parts of a page interface condense onto one image, it is called an image sprite. In other words, one image is used for multiple purposes. It is advantageous to do so as this allows a site to load faster as it only has to request one image for multiple aspects of the page interface. When designing complex sites, taking note of ways to minimize load time is important. As a user, I know that slow load times take away from a fluid experience on a website.  
