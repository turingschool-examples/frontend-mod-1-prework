Reading Response Ch. 7 Forms from HTML and CSS

1. If you're using an input element in a form, the action attribute controls the
behavior of that input
It's value is the URL for the page on the server that will recieve the information
when the form is submitted

2. <select> is used to create a dropdown list with two or more <option> elements
i.e. <form action="http://www.example.com/profile.php">
<p>What device do you listen to music on?</p>
<select name="devices">
<option value="Phone">Phone</option>
<option value="Computer">Computer</option>
<option value="Other">Other</option>
</select>
</form>

3. If you're using an input element to send form data to a server,
the type attribute should be set to "text" and use name so that the server knows
which form control each piece of data was entered into
i.e. <input type="text" name="username" />

4. <fieldset> is used to group similar form items together

Ch. 13 Boxes and Ch. 15 Layout

1. The differences between border, margin, and padding attribute are:
-Every box has a border that separates the edge of one box from another
-Margins sit outside the edge of the border
The width of a margin can be set to create a gap between adjacent boxes
-Padding is the space between the border of a box and the content within it

2. Each pixel value corresponds to the intensity of the light photons striking at that point

3. The difference between block-level and inline elements:
-block level elements are usually structural and start on a new line i.e. <h> <p> <li>
-inline elements are usually text based and flow between surrounding text i.e. <img> bold italic
You can turn an inline element into a block element or vice versa

4. The role of fixed positioning is to position the element in relation to the browser window,
rather than the containing element, and they do not affect the position of surrounding elements
nor move when the user scrolls up or down
z-index is important because it allows you to control which box appears on tope when moving any element

5. The difference between a fixed and liquid layout is that:
-Fixed width layout designs do not change sizes as the user increases or decreases the size of their browser window - use px
-Liquid layout designs stretch and contract as the user changes the size of their browser window - use %
