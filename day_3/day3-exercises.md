#Section 1: Chapter 7

##If you're using an input element in a form, what attribute controls the behavior of that input?

  The `type` attribute is paired with the empty `<input />` element and controls the behavior of the input field. The most common values to the `type` attribute are:`` "text", "password", "radio", "checkbox", "file", "submit"``. `"Text"` and `"password"` allow the user to add text to input information to the server. The latter hides the typed characters for added security. `"Radio"` and `"checkbox"` allow the user to make a selection from a list of given choices. The former allows for a single choice, while the latter allows for multiple choices and the un-selection of them. `"File"` allows the user to search their computer for a file to input to the server, while `"submit"` allows the user to submit a form to the server, for example their email to subscribe to a newsletter.

##What element is used to create a dropdown list?

  `<select>` This element makes use of a `"name"` attribute which indicates the name of the form control sent to the server. The options on the dropdown list are created using the `<option>` element. This element makes use of the `"value"` attribute to name the values selected on the form to the server.

##If you're using an input element to send form data to a server, what should the type attribute be set to?

  First, an input would have to be created using any of the other attributes. The attribute that would submit the form is `"submit"`. It's recommended to add the `"value"` attribute to specify the text that appears on the submit button, as the default text may not be appropriate for all forms.  

##What element is used to group similar form items together?

  The `<fieldset>` element is used for this, particularly useful for longer forms. The `<legend>` element can be added immediately after the opening `<fieldset>` tag to help name the reason behind the group of form controls.


#Section 2: Chapters 13 and 15

##Describe the differences between border, margin, and padding.

  CSS code breaks HTML components into boxes according to the element. A border constitutes this box, and it is not visible unless a border width is specified. A margin is the space outside of the border and it creates a space between two adjacent boxes. Margins are collapsable, that is to say, if two margins are next to one another the larger of the two will take precedence. Padding is crucial to making text inside boxes legible, because it creates a gap between the text and the border of the element.      

##For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

  The shorthand throughout the various border properties is to start from the top and go in a clockwise fashion. In the sample above, there would be a 1px wide gap from the top of the text to the top border of the element, 2px gap from the right, 5px gap from the bottom, and 10px gap from the left. If it were only two numbers, for example `padding: 10px 15px;` this would mean a 10px gap from both the top and bottom, and a 15 px gap from both sides.

##Describe the difference between block-level and inline elements.

  A block-level element is like a box. Unless otherwise specified, it will span the width of the page and be as tall as required to display the lines of text it contains. Common block-level elements include: `<h1>, <p>, <ul>, <ol>, <div>, <body>`. Inline elements usually exist within block-level elements, neatly tucked in among surrounding text. It's usually a word, short phrase, or picture. For example: `<img>, <i>, <b> `    

##What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

  Fixed positioning is a type of absolute positioning. As the name implies, it fixes an object to a location relative to the browser window, so as the user scrolls through the page content said object remains in place. This is particularly helpful for navigation bars. Additionally, to make sure that the relevant object stays above other page content, as to not overlap and clutter the page, the z-index is an important tool. It's value is a number, the higher the number an element has the bigger priority it has so the closer to the front it remains. This means an an element with a z-index of 5 will remain above one with a z-index of 2. Sometimes, it will be referred to as the *stacking complex*.  

##What is the difference between a fixed and liquid layout?

  A fixed layout is usually given in pixels, a value that remains fixed across different sized browsers. It's a good option to maintain accuracy in size and positioning of elements in a page; however, it lacks adaptability across devices with varying screen sizes, and may lead to awkward empty spaces or difficult to read text throughout a page. A liquid layout is more adaptable and usually relies on percentage values. This allows content to stretch and contract according to the size of the browser window. The adaptability comes at the cost of forfeiting some control of the page layout. It's also not without it's own possibility of awkward spaces between elements, or text formatting. 
