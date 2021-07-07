# Chapter 7 Questions

1. **If you're using an input element in a form, what attribute controls the behavior of that input?**

The type attribute controls the behavior of the form.
- `<input type = "text">`
- `<input type = "radio">`
- `<input type = "checkbox>"`

2. **What element is used to create a dropdown list?**

To create a dropdown list you would use the `<select>` element along with the `<option>` element.
```HTML
<select name = "dropdown">
 <option value = "option1">option1</option>
 <option value = "option2">option1</option>
</select>
```

3. **If you're using an input element to send form data to a server, what should the type attribute be set to?**

The type attribute should be set to the type of form control that you would like to present to the user.
- `type = "checkbox"`
- `type = "text"`
- `type = "password"`

4. **What element is used to group similar form items together?**

The `<fieldset>` attribute is used to group similar form items together it is used along with the `<legend>` attribute. The `<legend>`
attribute which allows you to identify the purpose of those form controls.

# Chapter 13 & 15 Questions

1. **Describe the differences between border, margin, and padding.**
- Every element in CSS is inside of a box. The edge of the box that separates one element from another is the *border*.
- The *margin* sits outside the edge of the border. You can use margin to create a gap/space between two boxes.
- *Padding* sits inside the edge of the border and is used to create space between the border of a box and the content of a box. It can help to make pages more readable.

2. **For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?**
- 1px is the top of the boxes
- 2px is the right side of the box
- 5px is the bottom of the boxes
- 10px is the left side of the box

3. **Describe the difference between block-level and inline elements.**
- *Block-level elements* exist on their own line, and each block level element creates a new line. No other elements will share a left of right border with them.
- *Inline elements* Flow in between the surrounding text. Inline elements can share a the same line as other elements on a page.

4. **What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?**

Fixed positioning allows you to position an element in relation to the browser window. All of the other elements of the page will ignore the fixed element and it will not affect their position on the page. An element that is set to fixed position does not move as the user scrolls up and down on the page. *Z-index* is important when using fixed position because as the user scrolls up or down other elements will overlap with the fixed element, which will make the page look cluttered and difficult to read.

5. **What is the difference between a fixed and liquid layout?**
- *Fixed layout* remain the same size even if the user increases or decreases the size of their browser. It gives the designer greater control of how the page will be displayed and typically uses pixels. It is best for situations when the user will be using a standard sized desktop or laptop screen. If the user is using a larger screen there will be extra space around the edge of the page and if the user is using a smaller screen they will have to scroll left and right to view the entire page.
- *Liquid layouts* typically use percentages so that the page will stretch and contract as the user increases or decreases the size of their browser. Typically the min and max width of the page needs to be controlled or lines of text will become very short or very long which has a negative impact on the readability of the page.
