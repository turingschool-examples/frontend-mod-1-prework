Questions:
1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?
    
    ordered: each item in the list is numbered, increasing top to bottom. unordered: each item is bulleted, nested unordered lists use slightly different bullets.
    
2. What is the basic structure of an element used to link to another website?

    <a href="http://somewhere.com>Somewhere</a>    

3. What attribute should you include in a link to open a new tab when the link is clicked?

    target="_blank"

4. How do you link to a specific part of the same page?
    
    <a href="#someid>SomeId</a>
    
============================

1. What is the purpose of CSS?

    Provide style and positioning of html elements on a page
    
2. What does CSS stand for? What does cascading mean in this case?

    cascading style sheets. styles of a higher precedence will overwrite rules of a lower precedence
    
3. What is the basic structure of a CSS rule?

    rule := 1 or more selectors + declaration block := 1 or more declarations := property/value pair
    
4. How do you link a CSS stylesheet to your HTML document?

    use the <link> tag in the <head> section of a page.
    
5. When is it useful to use external stylesheets as opposed to using interal CSS?

    When the rules are useful to more than just one html page
    
6. Describe what a color hex code is.

    #xxyyzz := #<red><green><blue>, where each is a value from 00 to ff in hex
    
7. What are the three parts of an HSL color property?

    hsla(hue, saturation, lightness, alpha)
    Value	Description
    hue	Defines a degree on the color circle (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue
    saturation	Defines the saturation; 0% is a shade of gray and 100% is the full color (full saturation)
    lightness	Defines the lightness; 0% is black, 50% is normal, and 100% is white
    alpha	Defines the opacity as a number between 0.0 (fully transparent) and 1.0 (fully opaque)
    
    hsla(hue, saturation, lightness, alpha) where hue is the  color, saturation is gray @ 0%, color @ 100%, and lightness is 0% for black, and 100% for white, and 50% for normal
    
8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?

    serif, sans-serif, monospace
        
9. When specifiying font-size, what are the main three units used?

    px, em, %
    

