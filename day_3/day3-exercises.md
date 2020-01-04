1.  If you're using an input element in a form, what attribute controls the behavior of that input?

  The value attribute controls the behavior of the input.  It is used to set the value for input elements.  It defines the value affiliated with the input and the value in the name/value pair that is sent to the server.

2.  What element is used to create a dropdown list?

  The <select> element is used to create a drop down list.  It contains at least two <option> elements.  The <option> element is used to determine the options that the user can select from.  Words between the opening and closing <option></option> tags will be what is shown to the user in the dropdown box.

3.  If you're using an input element to send form data to a server, what should the type attribute be set to?

  The type attribute should be set to type="submit" to send form data to the server.  

4.  What element is used to group similar form items together?

  The <fieldset> element is used to group related form controls together.  It is very helpful for longer forms.  Most browsers will show the fieldset with a line surrounding the edge to indicate they are related.  The <legend> element can come immediately after the opening <fieldset> tag.  It contains a heading that helps identify the purpose of that specific group of form controls.



1.  Describe the differences between border, margin, and padding.

    Each box has a border.  It may be invisible or specified as 0 pixels wide.  The border separates the edge of one box from another.

    Margins sit outside the edge of the border and are very helpful in adding space between various items on the page.  You can set the width of a margin to create a gap between the borders of two boxes that are right next to each other.  The value of the margin property is most commonly stated in pixels.

    The space between the border of a box and any content contained within it is padding.  Adding padding can increase the readability of its contents.  The value of the padding property is most often specified in pixels.

2.  For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

    You can specify different values for each side of the box using:

    padding-top (1px)
    padding-right (2px)
    padding-bottom (5px)
    padding-left (10px)

    Or you can think of it as clock.  In clockwise order: top, right, bottom, left.  Padding: 1px 2px 5px 10px.

3.  Describe the difference between block-level and inline elements.

    CSS treats each HTML element as if it is in its own box.  This box will be either a block-level box or an inline box.

    Block level boxes start on a new line and act as the main building blocks of any layout.  They will take up the full width available.  Block level elements include <h1>, <p>, <ul> and <li> and are usually structural.

    Inline boxes flow in between surrounding text and only take as much width as necessary.  Inline elements include <img>, <b> and <i> and are usually text based.  Even though block-level boxes can be made into inline boxes, and inline boxes can be made into block-level boxes, inline boxes are not supposed to create block-level elements.  

4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

    Fixed positioning is a form of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element.  To control where the fixed position box appears in the browser window, the box offset properties are used.  It also requires the position property to have a value of fixed.  Elements with fixed positioning do not affect the position of surrounding elements and they stay in the exact same place when the user scrolls up or down on the page.  

    When you move an element from normal flow the boxes can overlap.  The z-index property, sometimes referred to as the stacking context, allows you to control which box appears on top.  Its value is a number and the higher the number the closer the element is to the front.  

5.  What is the difference between a fixed and liquid layout?

    Fixed width layout designs do not change size as the user increases or decreases the size of their browser window.  The width of the entire page is set with a specific numerical value.  Measurements are usually in pixels.  Web pages that want exact control over how the pages appear in any given situation would benefit from this type of layout.  

    Advantages of a fixed width layout include:  

    -pixel values create accuracy when controlling size and positioning of elements
    -the webpage designer has far greater control over the appearance and position of items on the the page
    -you can control the lengths of lines of text regardless of the size of the users window
    -the size of an image will remain the same relative to the rest of the page
    -printer friendly

    Disadvantages of a fixed layout are:  

    -ending up with big gaps around the page
    -if the users screen is a higher resolution than the designers, the page can look smaller and the text can be harder to read
    -if a user increases font sizes the text might not fit into the space allotted
    -the design works best on devices that have a site or resolution similar to that of desktop or laptop computers
    -the page will often take up more vertical space than a liquid layout with the same content

    Liquid layout designs stretch and contract as the user increases or decreases the size of their browser window.  The width of the entire page is flexible depending on how wide the users browser is.  Measurements are usually percentages.  Sites that have a lot of information that they are trying to communicate in as little space as possible will work well with this type of layout.  Some liquid layouts only allow part of the page to expand and contract in order to increase readability.

    Advantages of a liquid layout include:

    -pages expand to fill the entire browser window so there are no spaces around the page on a large screen
    -if the user has a small window the page can contract to fit it without the user having to scroll to the side
    -the design is tolerant of users setting font sizes that are larger than the designer intended

    Disadvantages of a liquid layout are:

    -if you do not control the width of section of the page then the design can look very different than you intended, with gaps around elements or items squashed together
    -if the user has a wide window lines of text can become very long and therefore harder to read
    -if the user has a narrow window words may be smashed and you can end up with a few words on each line
    -if a fixed width item is in a box that is too small to hold it the image can overlap the text
    -not printer friendly
