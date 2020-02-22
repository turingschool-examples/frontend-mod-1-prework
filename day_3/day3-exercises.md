Chapter 7 Questions

1. If you're using an input element in a form, what attribute controls the behavior of that input?

- The behavior of an <input> element in a form is controlled by the `type` attribute. When the type attribute has a value of "text" it will have a single line of input. When the type attribute value is password the characters will be blocked out as the user inputs text. A "radio" value will present a number of options fo the user to choose.

2. What element is used to create a dropdown list?

- The <select> element is used to create a dropdown list box. A dropdow bow is also known as a *select* box. The <option></option> element is then used to wrap each option shown in the box. The name attribute will indicate the name when it is sent to the server.

3. If you're using an input element to send form data to a server, what should the `type` attribute be set to?

- The `type` attribute should be set to "submit" to send a form to a server. This is shown as a button on the web page. When th user clicks the button an attempt is made to submit the form to the server. A name attribute can be used, but is not needed.

4. What element is used to group similar form items together?

- Related form items can be grouped inside the <fieldset></fieldset> element. When <fieldset> is used a line will show on the web page around the boxes and characters in the group (in most browsers). A <legend></legend> element is used to create the caption at the top of the group. This setup can be helpful for long forms.


Chapter 13 and 15 Questions

1. Describe the differences between border, margin, and padding.

- The **boarder** outlines the box. It separates one box from another box. Every box will have a boarder. The **margin** is located on the outside edge of a boarder. The width of the margin controls the gap between two boarders. **Padding** is the space inside the boarder that separates the boarder from the content inside the box.

2. For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?

- The '1px' value corresponds to padding value for the **top** of the box. The `2px` value corresponds to padding value for the **right** side of the box. The `5px` value corresponds to padding value for the **bottom** of the box. The `10px` corresponds with the **left** side of the box.

3. Describe the difference between block-level and inline elements.

- **Block-level** elements start placing information on a new line. Examples include: <h1>, <b>, or <i>. These act as the main building blocks of the web page layout. **Inline elements** are located inside the text inside the block-level element. The inline-elements flow with the text.

4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

- The role of  **fixed positioning** is to place the element in relation to the browser window rather than the containing element. These elements don't move when the web page user scrolls up and dow the page. Since these elements don't move when scrolling on the web page, overlapping can occur with normal flow elements. The **z-index** allows the designer to control which box appears on top.

5. What is the difference between a fixed and liquid layout?

- In a **fixed width layout** the designs stay the same size even if the user increases or decreases the size of the browser window. This gives the designer greater control of the look and location of items on the page. A **liquid layout** will allow content size to change as the user adjusts the size of the browser window. This is nice if the user has a small window since the content can be viewed with little to no scrolling. 
