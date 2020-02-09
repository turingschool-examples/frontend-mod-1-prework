#If you're using an input element in a form, what attribute controls the behavior of that input?

  The `type` attribute is paired with the empty `<input />` element and controls the behavior of the input field. The most common values to the `type` attribute are:`` "text", "password", "radio", "checkbox", "file", "submit"``. `"Text"` and `"password"` allow the user to add text to input information to the server. The latter hides the typed characters for added security. `"Radio"` and `"checkbox"` allow the user to make a selection from a list of given choices. The former allows for a single choice, while the latter allows for multiple choices and the un-selection of them. `"File"` allows the user to search their computer for a file to input to the server, while `"submit"` allows the user to submit a form to the server, for example their email to subscribe to a newsletter.

#What element is used to create a dropdown list?

  `<select>` This element makes use of a `"name"` attribute which indicates the name of the form control sent to the server. The options on the dropdown list are created using the `<option>` element. This element makes use of the `"value"` attribute to name the values selected on the form to the server.

#If you're using an input element to send form data to a server, what should the type attribute be set to?

  First, an input would have to be created using any of the other attributes. The attribute that would submit the form is `"submit"`. It's recommended to add the `"value"` attribute to specify the text that appears on the submit button, as the default text may not be appropriate for all forms.  

#What element is used to group similar form items together?

  The `<fieldset>` element is used for this, particularly useful for longer forms. The `<legend>` element can be added immediately after the opening `<fieldset>` tag to help name the reason behind the group of form controls.

    
