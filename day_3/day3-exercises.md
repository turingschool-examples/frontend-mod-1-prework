## Day 3 Exercises

### Forms

**1. If you're using an input element in a form, what attribute controls the behavior of that input?**  
The attribute that controls the behavior on a form is the the type attribute. The type attribute controls the behavior such as not displaying the text when the type is set to password. It also works to display checkboxes when the type is set to radio. If the type is set to checkboxes it displays checkboxes allowing you to click on multiple options.

**2. What element is used to create a dropdown list?**  
The select element is used to created dropdown lists. Inside the select element you use option elements to display multiple options. The select element uses a name attribute, and the option elements use a value attribute to tell the browser which element was selected.

**3. If you're using an input element to send form data to a server, what should the type attribute be set to?**  
When using an input element to send form data to a server, you should use the type="submit" attribute. This tells the browser that once this element is clicked, the user is ready to send the information to the server.

**4. What element is used to group similar form items together?**  
The fieldset element is used to group form items together. The fieldset element can use the legend element directly after the opening fieldset tag to create a title for the form group.

### Boxes and Layout

**1. Describe the differences between border, margin, and padding.**  
Border is the border around a box. It has properties such as border-color and border-width. Margin is the space around the box outside of the border. Border can be used to add spacing between boxes so that their borders do not touch. Padding is the space around a box inside of the border. This creates space between the border and the content inside the box.

**2. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?**  
For this example, the top padding is 1px, the right padding is 2px, the bottom padding is 5px and the left padding is 10px.

**3. Describe the difference between block-level and inline elements.**  
Inline elements sit on the same line. The do not create line breaks for each instances, they appear within the flow of the content. Block level elements display on their own line.

**4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?**  
Fixed positioning fixes the element in relation to the browser window. If an element has a property of position:fixed and top:0px, it will be positioned at the top of the page and does not move it the user scrolls. z-index is important to use here to position the z-index of the fixed element on top of any other content of the page. This allows the rest of the content to scroll under the fixed element. This is often used with navigation menus so that they are always displayed regardless of position on the page.

**5. What is the difference between a fixed and liquid layout?**  
Fixed layouts have a specified with. This means that the content can not go larger than that width. Liquid layouts stretch and contract based on the users screen size. Liquid layouts are often achieved by using percentages for the widths of the containers and columns. This allows them to grow and shrink with different browser sizes.

**Link to Codepen project**  
https://github.com/hborrelli1/frontend-module-0-capstone/tree/master/day_3
