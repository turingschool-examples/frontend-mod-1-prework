**CH7**
1. If you're using an input element in a form, what attribute controls the behavior of that input?

    The "type" attribute controls the behavior of an input.
    
    ex: `<input type="text" name="username" maxlength="30" />`

2. What element is used to create a dropdown list?

    A dropdown list (or select box) uses the element `<select>` with 2(+) `<option>` elements.
    
    i.e.
    ```html
        <select name="devices">
    
        <option value="ipod">iPod</option>
            
        <option value="radio">Radio</option>

3. If you're using an input element to send form data to a server, what should the type attribute be set to?

    The input type is "submit", "value" is what shows on the webpage button

    ```<input type="submit" name="subscribe"
        value="Subscribe" />
        ```
        
4. What element is used to group similar form items together?

    `<fieldset>` is used for this. Useful for longer forms. `<legend>` labels the set for organization and readability purposes.
    
    ex:
    ```<fieldset>
            <legend>Contact details</legend>
            <label>Email:<br />
            <input type="text" name="email" /></label><br />
            <label>Mobile:<br />
            <input type="text" name="mobile" /></label><br />

**CH 13 & 15**


1. Describe the differences between border, margin, and padding.

    *Border*: Separates the edge of one box from another.
    
    *Margin*: Outside the border, can give a gap between the borders of 2 adjacent boxes.
    
    *Padding*: Space between the border + the content or text within it. Helps with readability.

2. For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

    Top, right, bottom, left (clockwise order)

3. Describe the difference between block-level and inline elements.

    *Block-Level elements* start on new lines. Whereas, *inline elements* stay on the same line until there is not more room.

4. What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

    Positions elements in relation to the browser window, not to the containing elements.
    
    ```h1{
      position: fixed;
      padding: 10px;}
      ```
      
    Z-index (or stacking context) ensures the intended element to be on top when elements overlap is the one that shows to the user. The higher # z-index sits on top of the lower ones.
    
    ```p{
      background-color: #efefef;
      z-index: 10;}
      ```

5. What is the difference between a fixed and liquid layout?

    *Fixed layout* designs do not change sizes based on a users screen or browser window. Whereas, *liquid layouts* stretch and contract to accommodate the users browser window size.
