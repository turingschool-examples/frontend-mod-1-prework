1.  If you're using an input element in a form, what attribute controls the behavior of that input?
- the `<type>` element controls the behavior of the input data.

2.  What element is used to create a dropdown list?
- the `<select name="">` element is used to create a dropdown list
        `</select>`
    the `<option value="">` element is used to add items to the dropdown list
    -ie:
```
<p>
What device do you listen to music on?
  <select name="devices">
      	<option value="ipod">iPod</option>
      	<option value="radio">Radio</option>
      	<option value="computer">Computer</option>
  </select>
</p>
```

3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?
- the type element should be set to text as default `type="text"`
- I believe that all of the types are valid to send to a server:
    - text|password|file|image|?

4.  What element is used to group similar form items together?
- grouping form elements is done with the `<fieldset>` element
  - and the `<legend>XXXX</legend>` where XXXX is the name of your field set
  - ie:
  ```
			<fieldset>
  				<legend>Contact details</legend>
      				<label>Email:<br><input type="text" name="email"></label><br>
      				<label>Mobile:<br><input type="text" name="mobile"></label><br>
      				<label>Telephone:<br><input type="text" name="telephone"></label>
			</fieldset>
```

Within the page you created in CodePen on Day 1, add a form that could be used to submit your top three music artists. It should include:

√   Text boxes for each artist (three artists total).
√   Labels for each text box.
√   Dropdowns for the genre of each artist.
√   Submit button.

1.  Describe the differences between border, margin, and padding.
- border: every box has a border (even if it is not visible and set to 0px wide). The border separates the edge of one box from another.
- margin: sit outside the edges of the border. The width of the margin can be set to create a gap between the border of two adjacent objects.
- padding: is the space between the border of a box and its contents. Adding padding can increase the legibility of its contents.

2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
- in order of appearance: padding-top, padding-right, padding bottom, padding left.

3.  Describe the difference between block-level and inline elements.
- block-level elements: START ON A NEW LINE
```
Block elements appear on the screen as if they have a line break before and after them.
For example, the <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <ul>, <ol>, <dl>, <pre>, <hr />,
<blockquote>, and <address> elements are all block level elements.
```

- inline elements: FLOW IN BETWEEN SURROUNDING TEXT
```
Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content. ie: <img> <b> <i>
```
4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
- This is a form of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element. Elements with fixed positioning do not affect the position surrounding elements and they DO NOT MOVE when the USER SCROLLS up or down on the page.
  - When you move any element from normal flow, boxes can overlap. the Z-INDEX property allows you to control WHICH BOX APPEARS ON TOP.

5.  What is the difference between a fixed and liquid layout?
- FIXED WIDTH LAYOUT designs do not change size as the user increases or decreases the size of their browser window. Measurement tend to be given in pixels.
- LIQUID LAYOUTS designs stretch and contract as the user increases or decreases the size of the browser window. They tend to use percentages.

Continue working with the page you created in CodePen, add some styling with boxes and adjusting the layout. This should include:

*   Add a border and background color to your headings. Pay attention to the contrast between the text and background colors.
*   Divide your paragraph text into two vertical columns.

## Save your day 3 file in git and push to GitHub

Using the commit message: `Add day 3`, add, commit, and push your changes to GitHub!
