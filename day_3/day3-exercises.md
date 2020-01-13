## Day 3
#### **Chapter 7 Reading Questions**

1. **If you're using an input element in a form, what attribute controls the behavior of that input?**
  >The type attribute will control the behavior specifying a value.

2. **What element is used to create a dropdown list?**
  >The select element is used to create a dropdown list, and you can choose between selected and multiple attribute as needed for the project.

3. **If you're using an input element to send form data to a server, what should the type attribute be set to?**
  >The type of attribute should be submit. It will take a name and value, but it does not require a name.

4. **What element is used to group similar form items together?**
  >A field_set element is used to keep data related to the same form control together.

  >"[CodePen Profile](https://codepen.io/carflor/pen/zYxjejO)"

#### **Chapter 13 and 15 Questions**

1. **Describe the differences between border, margin, and padding.**
  >Every box contains all of these properties. Every box contains a border, regardless its specs). This is what determines where one box ends and another begins. Right in between these boxes lie the margins. By adjusting the margins you are able to create gaps between the borders of neighboring boxes. Likewise, inside the box, you can adjust the padding. Padding the the room between where the box begins and where the content of the box begins. This space in between can be adjusted for readability.

2. **For a CSS rule padding: 1px 2px 5px 10px, what sides of the content box does each pixel value correspond to?**
  >Each pixel value would be for the following in this specific order: top - right - bottom - left. This specific one is written in shorthand.

3. **Describe the difference between block-level and inline elements.**
  >These are the main two types of box elements.
  * Block level elements are the main building blocks of the website usually including the header, paragraph, lists elements.
  * Inline Elements are the ones that "flow in between surrounding text". Meaning the elements that work around the text like bold, italic or even the image elements.

4. **What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?**
  >The role of fixed positioning is that it allows for a box element to have an absolute position, but adjusted in relation to the browser window instead of the containing element. This means that while a user scrolls, this absolute position will manage to stay in place while the rest of format stays intact.
  >The z-index can be considerably relevant in this case because it allows you to set a prioritization of the element boxes as they are scrolled in relation to the browser. You can give the z-index a specific integer value to use as a way of knowing which box should be prioritized while the boxes overlap, which is bound to happen given that it has a fixed absolute position. They refer to this as "stackin context".

5. **What is the difference between a fixed and liquid layout?**
  >Fixed layout is a website layout that does not to any of the changes a user might do to his browser size. They usually are specified in pixels. While a liquid layout adapts to any of the changes a user might do to his browser window size. Liquid layouts are specified in percentages. These percentages depending on the way the width sections were controlled can make for pretty awkward reading. 
