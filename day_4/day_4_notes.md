# Day 4 Notes #
### Chapter 5 — Images ###
---
- Adding images
  - all images need a `<img>` element tag
    - this an empty element, which means there is no closing tag
  - all elements need a `src`
    - this tells the browser where to find the image file
    - this can be a relative URL pointing to images on your own site
  - `alt`
    - this provides a text description of the image (if you cannot see it)
    - the alt text needs to be an accurate description for search engine optimization and screen reader tech.
  - `title`
    - a title attribute can also be used - this will be displayed as the user hovers over the image
  - example code:
  ```
  <img src="images/quokka.jpg" alt="Quokka (Setonix brachyurus)">
  ```
- Height and Width of images
    - `<img>` may also contain height/width attributes inside the tag
    ```
    <img src="" alt="" width="600" height="450">
    ```
    - size of images is more frequently specified in CSS rather than the HTML file
- Where to place images in your code:
  - where an image is placed in the code will change how it is displayed
  - BEFORE A PARAGRAPH - the paragraph starts on a new line after the image.
  - INSIDE THE START OF A PARAGRAPH - the first row of text aligns with the bottom of the image
  - IN THE MIDDLE OF THE PARAGRAPH - the image is placed between the words of the paragraph that it appears in.

Where you place the image in the code is important because browsers show HTML elemtents in one of two ways:
  - BLOCK ELEMENTS always appear on a new inline
    - examples of block elements `<h1` and `<p>`
    - if the `<img>` element is followed by a blockj element, then the block element will sit on a new line.
  - INLINE ELEMENTS sit within a block element and Do Not Start on a New line
    - inline elements are `<b>` `<em>` `<img>`
OLD CODE
  - can incorporate the `align` attribute
    - this was commonly used to indicate how the other parts of the page should flow around the image (this is no longer a part of HTML5)
    - CSS should be used to control the alignment of images NOW

Three rules for Creating Images
1. Save images in the correct format
2. Save images at the right size
3. Measure images in pixels

Image formats
- JPEGs
  - should be used for colorful images
- GIFs or PNG
  - should be used when saving images with few colors or large areas of the same color
  - GIFs can be used if the transparent part of the image has straight edges on the `X` and `Y` axis
  - PNGs can be used to save images with transparency, or drop shadows that, where the transparent section is not completely vertically or horizontally aligned.
- images should be saved at the same SIZE that they are going to be displayed at on a webpage
- VECOTR images
  must be saved as bitmap files BMP in order to be used on the web
- Checking the size of images in browser
  - `Control + Click` on image and open in a new table - the size of the image will be listed in the tab

HTML5: Figure and Figure Caption
```
<figure>
			<img src="images/otters.jpg" alt="Photograph of two sea otters floating in water">
			<br>
			<figcaption>Sea otters hold hands when they sleep so they don't drift away from each other.</figcaption>
		</figure>
```
`<figure>`
  - images often include captions - HTML5 has introduced the figure element to contain images & their captions (so that the two are associated)
  - you can have more than one image in side the `<figure>` element, so long as they share the same caption
  - browsers sometimes indent the contents of `<figure>` elements
`<figcaption>`
- the figcaption element has been added to HTML5 in order to add a caption to an image

---
### Chapter 16 — Images in CSS ###

controlling the size and alignment of images using CSS keeps rules that affect the presentation of the page in the CSS file, without mucking up the HTML markup.

- Controlling size of images in CSS
- the html for our image:
- `<img src="images.magnolia-large.jpg" class="large" alt="Magnolia"`
here is the CSS:
```
img.large {
  width: 500px;
  height: 500px;
}
```
or if the class of the image was changed to `class="small"` the image would be sized accordingly:
```
img.small {
  width: 100px;
  height: 100px;
}
```
  - Where the `<img>` elements appear in the HTML (rather than using height/width parameters in each element) you can use specified names as values for the `class="  "` attribute and call that class out in CSS

##### Aligning images using CSS #####

- `<img src="images.magnolia-large.jpg" alt="Magnolia" class="align-left small">`
here is the CSS
```
img.align-left {
  float: left;
  margin-right: 10px;
}
img.small {
  width: 100px;
  height: 100px;
}
```
notice how the the class of the `<img>` has 2 attributes
  - align-left
  - small
- both of these attributes are being used to control the display of the image using the CSS above

##### Centering images #####
```
img.align-center{
  display: block;
  margin: 0px auto;
}
```
as long as one of the `<img>` attributes is set to:`align-center` the element will be centered and displayed as a `block` element
##### Background Images #####
`background-image`
```
body {
  background-image: url(insert.web.url.here.com);
}
```
this allows the developer to place an image behind any HTML element `<body>` `<p>` the only item that would need to be changed is the CSS selector, so if we wanted an image where the paragraph is, instead of the body:
```
p {
  background-image: url(insert.web.url.here.com);
}
```
# JavaScript / JQuery #
## Chapter 1 ##
### Section A: What is a script and how do I create one? ###
`Scripts` are a series of instructions.
  - a computer can follow a script to achieve a goal.
  - scripts are analogous to the following:
    - Recipes
    - Handbooks
    - User Manuals

1. Writing a script:
  - frist the goal needs to be stated, and then a list of the tasks needed to comlpete that goal.
  - Humans are able to do things (after learning how to do them) without a detailed instruction set, this is not true of computers.
    - `COMPUTERS` need details to perform a task as if every time was their first.

  Start with the big picture, and break that down into smaller steps (TOP DOWN DESIGN)
    1. Define the goal  
      - define the task that needs to be achieved
    2. Design the Script
      - split the goal out into a series of tasks
      - easily represented using a flow chart
      - write down individual steps that the computer will need to complete each tasks
      - like writing a recipe that it can follow
    3. Code Each Step
      - each step needs to be written in a programming language that the computer can understand — in this case JavaScript

### Section B: How do computers fit in with the world around them? ###
Computer create models of the world using data…

1. Objects and Properties
  - Each physical thing in the world can be represented by an `object`
  - Each `object` can have its own:
    - `Properties` (Characteristics)
      - each property has a `name` and `value`
    - `Events`
    - `Methods`
    - Where there are more than one of an `object`, these are refered to as `instances` of that `object`

`Events`
  - these are the ways in which a user interacts with an object
    `events` are triggered by user interaction.
  - ie. a user clicks on a contact link, a contact form pops up, the user enters their information into the field.
  - an `event` is a way of a computer raising its hand to say that *this thing* just happened.
  - events can trigger a specific section of code to run

`Methods`
  - represent things that people need to do with objects
  - they can retrieve or update an object's properties
  - are like *QUESTIONS* or *INSTRUCTIONS* that:
    - tell you something about that object (using info stored in its Properties)
    - change the value of one or more of the object's properties

In the *HOTEL* example:
- `makeBooking()` increases value of the *bookings* property
- `cancelBooking()` decreases value of the *bookings* property
- `checkAvailablity()` subtracts value of *bookings* property from vlaue of *rooms* property and return the number of available rooms

### Section C: How do I write a script for a webpage? ###
#### How HTML, CSS and JavaScript fit together: ####
- Each language should be used in its own file, that links inside the HTML document.
- think of each document: html, css, js, as its own layer
`HTML` is the content layer
`CSS` is the presentation layer
`JavaScript` is the behaviors layer
  - JS enhances usability of the site, and experience interacting with it.
- This approach to building websites is called *progressive enhancement*

#### Creating a basic JavaScript ####
- JS is written in plain text just like html and CSS
```
 document.write('Good Afternoon!');
 ```
  - document is the *object*
  - write() is the method
  - (paramenters) are located inside parenthesis
  - . is the member operator
    - the *document* object can have several methods and properties
    - they are known as *members* of that object
    - you can access the member of an object by placing a dot . between the object name and the member that you want to access

JavaScript runs where it is placed in the HTML doc.
- this is the HTML element that calls on the script:
`<script src="folder/file_name.js"></script>`
