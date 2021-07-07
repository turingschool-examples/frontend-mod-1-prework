Lists and Links:

1) Ordered lists are lists where each item is numbered, such as set of steps that needs to be preformed in order. Whereas unordered lists are lists that utilize bullet points rather than characters that indicate order. Lastly, definition lists are lists made up of a set of terms. These terms are then followed by the definitions of that particular term.

2) An opening <a> and closing </a> anchor tag, the href attribute, the link to the different website (or absolute URL), and a link text are what make up the basic structure of an element used to link to another website. Users can click on anything between the opening and closing anchor tag and be taken to the page specified in the href attribute. When linking to a different site the href attribute will be the full web address for the site; i.e. an absolute URL. Finally, you need to add text following the href and its absolute URL. This text is known as link text and should explain where someone will jump to when it is clicked.        

3) To have your link open up in a new window you need to add the target attribute in the opening <a> tag with the value being _ blank.  

4) Linking to a specific part of the same page involves identifying the points of the page the link will go to by using the 'id' attribute (which can be used on every HTML element) The value of the id attribute starts with only a letter or an underscore, appear on a single page and not have the same value as another listed id. When using the id attribute the value of the href attribute has to start with the # symbol followed by the value of the id attribute you want to link to  


What is CSS, Color and Text:

1) CSS allows us to create rules that specify how the content of an element should appear. From what color the background of a page is, to the a specific font type of text CSS is what helps web developers create more attractive and design based products. Think of a house... html is the structure, css is the decor, ambiance, and decoration.

2) CSS stands for Cascading Style Sheets, the Cascading portion referring to the 'Cascading' affect found in CSS. The styles used in CSS can fall from one sheet to another, which allows multiple sheets to be used on one HTML document. This also is in reference to how the rules work inside these style sheets. Thinking of a waterfall the the rules at the bottom get priority over the ones at the top. Basically this Cascading effect means you can create generic rules to apply to most elements and then override the properties of individual element as you proceed.   

3) The basic structure of a CSS rule contains two parts: a selector and a declaration. Selectors indicate which element the rule is applying to where as the declarations indicate how the elements selected should be styled. These declarations sit inside curly brackets and are also made up of two parts: a property and a value, which are separated by a colon. The properties of a declaration indicate the aspects of the element you want changed (e.g. Color, font, width, height, border). The Value of the declaration specifies the settings that you want to use for the chosen properties. For example, in the decoration color: red; red would be the value.

4) To link a CSS stylesheet to a HTML document you need to include a link element which includes these three attributes: href, type, and rel. The href attribute specifies the path to the CSS file where as the type attribute is responsible for specifying the type of document being linked to. Lastly, the rel attribute specifies the relationship between the HTML page and the file it is linked to. All of these attributes are found inside the head element of an HTML.

5) Using external stylesheets as opposed to internal ones is useful when building a site with more than one page. This is because using an external CSS stylesheet allows all of the pages to use the same style rules, rather than just repeating them over and over for each page. It also allows the content to be kept separate from how the page page looks, as well as, allows you to change the styles used across all pages by altering just one file.

6) A color hex code is a six-digit code that represents the amount of a red, blue or green there is in a specific color. It utilizes the pound sign (#) before these six-digit hexadecimal codes. Hex values are not case sensitive and where all the characters are the same (e.g. #ffffff), they can be abbreviated down to three characters (e.g. #fff).

7) The three parts of an HSL color property are: Hue, Saturation, and Lightness. The Hue is, in essence, the idea of color. in HSL the hue is represented as a color circle, in which, the angle represents the color. The S in HSL, or the saturation, is the amount of gray in a color. It is represented as a percentage with 100% being fully saturated and 0% being a shade of gray. Finally, the lightness is the amount of white (lightness) or black (darkness) in a color. This is also represented as a percentage with 100% lightness being white and 0% lightness is black. (It can also sometimes be referred to by luminosity)         

8) In the typeface world, the three main categories of fonts are: Serif, Sans-Serif and Monospace. Serif fonts have extra details on the ends of the main strokes of the letters and are usually used in print where long passages of text are found. This is because that type of font category is considered easier to read. The Sans-Serif fonts have a straighter ends to the letters and an overall much cleaner design; It is more used for screen based text, which can be a lower resolution/ smaller. To combat that Sans-Serif fonts are used so that the text can be clearer to read. Finally, monospace fonts letters all have a fixed-width and are used for code because they align nicely, making the text easier ti follow.

9)  The three main units used when specifying font-size are: Pixels, Percentages and EMs. The pixels of a font-size property allows very precise control over how much space their text takes up. The percentage aspect of a font-size property uses the default text size of 16px (pixels). By increasing or decreasing the percentage you in turn alter the default size by the percentage given. To wrap it all up, you use EMs to change the size of the text relative to the size of the text in the parent element.


[CodePen](https://codepen.io/Muggins1265/pen/RwNKeGV)  
