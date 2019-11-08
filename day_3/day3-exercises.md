## Day-3 Questions
### Chapter 7
#### If you're using an input element in a form, what attribute controls the behavior of that input?

The attribute that controls the behavior of the input is the 'type' attribute which is the second word of the line and looks like <input type="BehaviorName">.

#### What element is used to create a dropdown list?

The element used to create a dropdown list is <select>

#### If you're using an input element to send form data to a server, what should the type attribute be set to?

When using an input element to send form data to a server, the type attribute should be set to "submit".

#### What element is used to group similar form items together?

The "<fieldset>" element is used to group similar form items together.

### Chapters 13 & 15
#### Describe the differences between border, margin, and padding.

All boxes have the three properties of border, margin, and padding.  The border is the box around the content and it sets the edge limits of each box.  But from this border there can also be a margin which sits on the outside of that boxes border.  The width of the margin is set to determine the amount of extra space that exists from that box to any adjacent boxes.  Padding sits on the inside of the border and it sets the limit within that box where the content should be contained within.  

#### For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?

1px corresponds to the top, 2px corresponds to the right, 5px corresponds to the bottom, and 10px corresponds to the left.

#### Describe the difference between block-level and inline elements.

Block level elements begin on a new line and produce the main layout of the page.  Inline elements are located inside the text and content.

#### What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?

The role of fixed positioning is to set an absolute position for that particular element and its position is given as its location relative to the browser window itself. When fixed positioning is used, the element doesn't affect the flow of the other elements around it and often times this lead to an overlap with this element and others.  Z-index is important in this situation because it allows you to specify which element box will appear on top of the other when there is overlap.

#### What is the difference between a fixed and liquid layout?

In a fixed layout the width of the main boxes are specifically defined using pixels as the form of measurement.  This can also be applied to the height of the boxes if desired.  This means that the boxes and content of the page will remain fixed according to the pixels stated and the size of the browser window will not affect these properties.  This is different from a liquid layout where the design of the layout is allowed to stretch and shrink according to the size of the browser window being used.  When the user changes the size of the browser window, a liquid layout allows it to adapt to the new size by adjusting the layout to fill in the new space limits.
