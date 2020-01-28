<h1>READ CHAPTER 7</h1>
<h2>ANSWER FOLLOWING QUESTIONS:</h2>
<hr />

**1. If you're using an input element in a form, what attribute controls the behavior of that input?**


  The TYPE attribute. An input element can be used to create many different form controls. And it is the value of the type attribute that will determine the kind of input one is creating input type= the value goes here which might be "text" or "password"  or "radio" etc.)



**2. What element is used to create a dropdown list?**
<br />
The select element is used to create a dropdown list box. However, it is within that opening and closing select element tags that the element of option is used to specify the actual options in the list that the user can select from.

<br />

**3. If you're using an input element to send form data to a server, what should the type attribute be set to?**<br /> SUBMIT; input type="submit"

<br/>

**4. What element is used to group similar form items together?**
<br />
The fieldset element is used to group form items together and within that opening and closing tag might be legend, label, input elements with varying attributes (type, id, for, etc)
<br />

<hr />

<h1>CHAPTERS 13 & 15</h1>
<h2>ANSWER THE FOLLOWING QUESTIONS:</h2>


**1. Describe the differences between border, margin, and padding.**<br />
__Border:__ Every box has a border. even if its not visible (or set at 0px wide). The border separates the edge of one box from another.<br />
__Margin:__ Margins sit outside the edge of the border that surround boxes. One can also create a gap between the borders of two adjacent boxes by setting the appropriate width of a margin.<br />
__Padding:__ Padding is the space between the border of a box and any content therein. This can increase or decrease the readability of content.



**2. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?**<br />
The values are in clockwise order TOP, RIGHT, BOTTOM, LEFT and follows the pixels in the following way: Top:10px, Right: 5px, Bottom:3px, Left:1px


**3. Describe the difference between block-level and inline elements.**<br />
Block level elements start on new lines such as heading, paragraph, list elements creating block level boxes that act as the main building blocks of any layout. While inline elements flow between surrounding text within boxes. Also important to know is that if one block-level element sits inside another, then the outer box is known as the containing or parent element.


**4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?**<br />
This is a form of absolute positioning and positions something in relation to the browser window as opposed to the containing element. This does not affect position of any surrounding elements and will not move even when the user is scrolling up or down a page. The z-index property allows for control of which box appears on top.


**5. What is the difference between a fixed and liquid layout?**<br />
Fixed width layout designs do not ever change size regardless of how much the user increases or decreases the size of their browser window. Measurements tend to be given in pixels.
<br />
Liquid layout designs stretch and contract as a user increases or decreases the size of their browser window. Measurements tend to be in percentages. <hr />

CODEPEN UPDATE: https://codepen.io/stephlsohns/pen/ZEYeXEq
