# Day 2 exercises

## Chapters 3 and 4 questions and answers

1. **There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?**

- Ordered: the list is numbered
- Unordered: the list uses a bullet point to indicate each item
- Definition: the list is comprised of terms and their definitions underneath each term

2. **What is the basic structure of an element used to link to another website?**

A link is structured as follows: <a> is the link element and "href" is the attribute who's value is the page that we are linking to.

3. **What attribute should you include in a link to open a new tab when the link is clicked?**

If you want your link to open in a new tab you should add target="blank"

4. **How do you link to a specific part of the same page?**

If you want to link to a certain part of the same page you need to set an id to the header or paragraph you want to move to, such as <h1 id="top_header"> then you would set the href value as "#top_header" in the link on that page you want to lead there.

## Chapters 10, 11, and 12 questions and answers

1. **What is the purpose of CSS?**

CSS allows you to control how your HTML elements will appear, such as color and borders.

2. **What does CSS stand for? What does cascading mean in this case?**

CSS stands for cascading style sheets, cascading is referring to how rules are applied in order of their precedence that you set.

3. **What is the basic structure of a CSS rule?**

A CSS rule is laid out into two parts, a selector that indicates which element is having the rule applied to it and the declaration which is how the selected element will be styled.

4. **How do you link a CSS stylesheet to your HTML document?**

You link your CSS stylesheet by using the <link> element. You set your href value to where your CSS file is located in your computer followed by type=text/css, which specifies that you're linking to a CSS file.

5. **When is it useful to use external stylesheets as opposed to using interal CSS?**

It's useful to use an external stylesheet almost all of the time, outside of a rare instance in which you're creating a single webpage. The reason for this is that if you link to an external stylesheet you can use the same stylesheet on multiple webpages without having to paste the CSS code into each HTML title. Additionally, should you want to change your stylesheet, you can make changes to every page utilizing this stylesheet in one go rather than going back and changing them individually.

6. **Describe what a color hex code is.**

A color hex code represents the values for red, green, and blue in hexadecimal code. You can use hex code in CSS to set color values.

7. **What are the three parts of an HSL color property?**

- Hue: The color

- Saturation: The amount of gray in a color

- Lightness: The amount of white in a color

8. **In the world of typeface, what are the three main categories of fonts? What are the differences between them?**

- Serif: Serif fonts have extra details on the letters, these details are called serifs

- Sans-serif: These letters have straight ends, being made easily readable on low resolution screens

- Monospace: All letters have the same width making these typeface great for coding

9. **When specifying font-size, what are the main three units used?**

- Pixels: The designer can specify the exact pixel height they want their text

- Percentages: The default size of text is 16px, so setting the font size with percentages means you can change it to something like 200% of 16px

- EMS: You can set the scale of your text according to how wide the letter m in your font is. 1.4em would be 1.4 times the default m size for instance

## Link to my CodePen

[Here it is!](link here)
