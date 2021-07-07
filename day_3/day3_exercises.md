Forms:

1) The value of the 'type' attribute controls the behavior of the input element in a form. When the type attribute has a value of 'text', it creates a single-lint text input. When the value of the type attribute is 'password' it creates a text box that acts just like a single-line text input, except the characters are blocked out. When it has a value of 'radio' a radio button allow users to pick just one of a number or option. Each differing value of the type attribute will have a different input outcome.

2) When creating a drop down list box (or select box) you use a 'select' element which itself contains two more 'option' elements: Value and Selected.
The option element is used to specify the options that the user can select from and the words found between the open and close option tags are what are shown to the user in the drop down box. Within the option element is the value attribute, this attribute indicates the value that is sent to the server along with the name of the control if this option is selected. The other attribute within the option element is the selected attribute. This attribute is used to indicate the option that should be selected when the page loads. This attribute should be set to 'selected' to avoid the first drop down option being shown when the page loads.

3) When using an input element to send form data to a server you need to have the 'type' attribute set to 'submit'.

4) Grouping related form controls together can be done through the 'fieldset' element. With most browsers the fieldset is shown with a line around the edge to show they are related; This line can be adjusted using CSS.  


Boxes and Layout:

1) Every box utilizes three properties that can be adjusted to control its appearance: Border, Margin and Padding. The border is what separates the edge of one box from another. Every box has a border even if it isn't visible. The Margin sits outside the edge of the border and is used to create a gap between the boarders of two boxes. Finally, the Padding is the space between the border of a box and any text or content within that box.

2) for the CSS rule padding: 1px 2px 5px 10px you read the values in a clockwise order of top, right, bottom, and left. so 1px would be the padding-top, 2px would be padding-right, 5px would be padding-bottom and 10px would be padding-left.

3) The difference between the two is that block elements always appear on a new line (e.g. `h1`, `li` and `p` elements) and act as the main building blocks of a layout. Whereas, inline elements sit within a block level element and do not start a new line (e.g. `b`, `em` and `img` elements) and instead flow between the surrounding text.

4) Fixed positioning is used to position an element in relation to the browser window, instead of the containing element. Elements that are placed in fixed positions do not affect the placement of the surrounding elements and also don't move when the page is scrolled up or down. When you move an element from a normal flow into fixed positioning the boxes can start to overlap. With the z-index property you can control which box appears/ sits on top. The higher the number the closer the element is to the front.

5) A fixed layout design does not change size when the user decreases or increases the size of their browser window and is usually measured in pixels. On the other hand, liquid layout designs will stretch and contract as the user increases or decreases the size of the browser window and tend to use percentages. Using a fixed layout allows for more accurate control, placement and appearance of elements. However, you can end up with major gaps around page edges and the resolution changes could lead to text and images being harder to read/ see. The advantages of liquid layouts are the pages, of course, expand and fill the entire window so no issues with spaces/ gaps around the page occur. Though, the downside to this type of layout is without controlled width sections designs can start to look very different than what was intended.

[CodePen](https://codepen.io/Muggins1265/pen/RwNKeGV?editors=1100)
