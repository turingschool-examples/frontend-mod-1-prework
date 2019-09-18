## Forms

### 1. If you're using an input element in a form, what attribute controls the behavior of that input?

The _type_ attribute determines what kind of input will be created based on its value. For example, when the type attribute has a value of text, it creates a single-line text input. When the type attribute has a value of password it creates a text box that acts like a single-line text input, except the characters are blocked out.

### 2. What element is used to create a dropdown list?

The **`<select>`** element is used to create a drop down list. It contains the _name_ attribute and two or more _`<option>`_ elements.
  * The name attribute indicates the name of the form control being sent to the server
  * The `<option>` element is used to specify the options that the user can select from.

### 3. If you're using an input element to send form data to a server, what should the `type` attribute be set to?

The type attribute should be set equal to **"submit"**.

`<input type="submit"/>`

### 4. What element is used to group similar form items together?

The `<fieldset>` element is used to group related form controls together. This is particularly helpful for longer forms.

## Boxes and Layout

### 1. Describe the differences between border, margin, and padding.

* **border** separates the edge of one box from another
  * every box has a border
  * you can specify the _width_, _style_, and _color_ of a border property


* **margin** sits outside the edge of the border
  * the margin property controls the gap between boxes


* **padding** the space between the border of a box and any content contained within it
  * The padding property allows you to specify how much space should appear between the content of an element and its border

### 2. For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?

This rule is using a shorthand, where the pixel values are listed in clockwise order: top, right, bottom, left. This can also be written as:

      padding-top: 1px
      padding-right: 2px
      padding-bottom: 5px
      padding-left: 10px


### 3. Describe the difference between block-level and inline elements.

* A **block-level** element begins a new line and acts as the main building blocks of any layout. Examples include:

 `<h1>` `<p>` `<ul>` `<ol>`

* **Inline** elements flow between surrounding text. Examples include:

  `<img>` `<b>` `<i>`

### 4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

</br> **Fixed positioning** is a type of absolute positioning that requires the position property to have a value of fixed. It positions the element in relation to the browser window. </br> `position:fixed`

The **z-index** property helps to control which element sits on top. It prevents any other elements' content from overlapping with the element who's position property is fixed.

### 5. What is the difference between a fixed and liquid layout?                                

* A **fixed** layout

* A **liquid** layout
