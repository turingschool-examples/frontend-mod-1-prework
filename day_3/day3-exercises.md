# Mod 0 Capstone
***
## DAY 3
---

### Read Chapters 7 [HTML and CSS:Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)


1. **If you're using an input element in a form, what attribute controls the behavior of that input?**
	* The type attribute determines the type of input.
2. **What element is used to create a dropdown list?**
	* \<select\>
3. **If you're using an input element to send form data to a server, what should the type attribute be set to?**
	* type = "file"
4. **What element is used to group similar form items together?**
	* \<fieldset\>



### Read Chapters 13 and 15 [HTML and CSS:Design and Build Websites](http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1459879147&sr=8-3&keywords=duckett)

5. **Describe the differences between border, margin, and padding.**
	* Border: The boarder seperates the edges of one box from another
	* Margin: Margin adds space outside of the box dimensions
	* Padding: Padding adds space within the box between the border and the text or element within.
6. **For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?**
	* 1px: Top
	* 2px: Right
	* 5px: Bottom
	* 10px: Left
7. **Describe the difference between block-level and inline elements.**
	* Block-level elements essentially have a break between the previous element and the block level element. It always starts on a new line.
	* Inline elements allow for the element to be directly after another element.
	* The list element typically defualts to a block-level element.
8. **What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?**
	* Fixed positioning allows the designer to specify the absolute position in the browser window. We can force elements to appear in an overlapping way, if building a custom graphic we might want to make sure a certain element is above the other, but overlapping and we would use a z-index to specify that one of these elements was displayed over the other.
9. **What is the difference between a fixed and liquid layout?**
	* Fixed layouts are designed in a way where the elements sizes are specified in an absolute way, ie number of pixels across. This adds the benefit of precision design, however when most of the users use different resolution monitors, ipads, and phones, a liquid layout that specifies where elements should remain relative to another element the webpage can change based on the screen realestate of the user. I would definably have a combination of the two, where resizing can happen, but specify exactly how small an element can resize before modifying the layout scheme. I believe css grid has some great ways of determining how the webpage layout is repositioned based on screen size. Another thing to note is that I would be using % window width to determine the majority of the elements size to scale.
