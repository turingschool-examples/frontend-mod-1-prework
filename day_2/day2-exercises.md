**Day 2 Exercises**

**List and Links Questions**

1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

- Ordered lists contain items which are numbered. This communicates sequence.
- Unordered lists contain bulleted items. Communicating that you don't need to follow a particular order.
- Definition lists are made of a set of terms alongside definitions for each. Like a glossary or dictionary.  

2. What is the basic structure of an element used to link to another website?

- The basic structure of the ``<a>`` element which is used to use to link to another website is the following ``<a href="absolute website URL goes here">Descriptive Text User Clicks On Here``</a>. The `href` attribute defines the absolute URL you are linking to (in this case).

3. What attribute should you include in a link to open a new tab when the link is clicked?

- You include the target attribute in order for a link to open in a new tab. The value of this attribute should be `_blank`

4. How do you link to a specific part of the same page?

- In order to link to a specific part of the same page you use an `id` attribute. You do this by assigning id attributed to different elements on the same page, such as headers typically. Then when you create the link tag under the `href` attribute you start with `#` and reference the `id` attribute value created earlier to direct them to that location. These id attributes can also be used when referencing another page within your website.

**CSS Color and Text Questions**

1. What is the purpose of CSS?

- The purpose of CSS is to create rules that determine how your content will appear. In other words it allows you to stylize your HTML.

2. What does CSS stand for? What does cascading mean in this case?

- CSS stands for Cascading Style Sheet. Cascading in this case means that you can have multiple rules for the same element, the rule that will be applied to the HTML element is determined by either one or a combination of the following factors: The last rule written, degree of specificity and developer appointed importance. This is advantageous in that you may only need to create one style sheet for many pages in this manner.

3. What is the basic structure of a CSS rule?

- The basic structure of a CSS rule consists of the following: a selector and a declaration. Selectors indicate which element the rule applies to, the declaration indicates how the element selected will be styled. For example, in the following rule, `p {front-family: Arial;}`. `p` is the selector (paragraph HTML element) and `{font-family: Arial;}` is the declaration. Meaning all paragraph elements will display the Arial typeface unless otherwise specified.

4. How do you link a CSS stylesheet to your HTML document?

- You link a CSS stylesheet using the <link> element. For example, `<link href="css/styles.css" type="text/css" rel="stylesheet" />`. `href` specifies he path to the CSS file. `type` speceifies the type of document being linked to. `rel` specifies the relationship between the HTML page and the file. This should be placed within the ``<head>``.

5. When is it useful to use external stylesheets as opposed to using internal CSS?

- The majority of the time it will be more useful to create an external style sheet as it allows you to create one stylesheet that can be applied to multiple pages throughout the site. External style sheets also make it easier to read your HTML and CSS code as they will exist separately. Internal CSS is used mostly if you're adding a few one off rules that are specific to that page.

6. Describe what a color hex code is.

- A color hex code is essentially RGB values translated into a hexadecimal code (6 characters). The first two characters specify the amount of red, next two are green and the last two blue.

7. What are the three parts of an HSL color property?

- An HSL color property specifics a HUE (colloquial idea of color on a scale of 0-360 degrees), SATURATION (amount of gray in a color, 0-100%), and finally LIGHTNESS (amount of white or black on a 0-100% scale, black being 0% and white being 100%).

8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

- Serif: These fonts have extra stylized details on the ends of the main strokes of the letters. This is typically used in print.
- Sand-Serif: These fonts have straight ends to letters (think right angles). They have a cleaner design and are mostly used on screens, especially when smaller.
- Monospace: These fonts have exactly the same width for each letter meaning that they align nicely. We typically use these when coding for that reason.

9. When specifying font-size, what are the main three units used?

- Pixels: Very exact, has the same interpretation for all screens since it is relative. Denoted by `px`.
- Percentages: Default size of font is 16px, so 50% would be 8px and 200% would be 32px.
- EMS: Change the amount of space the width of the letter "M" occupies.
