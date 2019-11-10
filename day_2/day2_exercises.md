1.  There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?

     ``1.1 Ordered lists have items listed with a number.
     ex: important tasks-
     1. study
     2. food prep
     3. go to the gym

     1.2 These lists use bullet points to designate separate list items. t

     1.3  Definition lists are "a series of terms and their definitions". The text uses an example where they provide different food terms and the definition of those terms.``

2.  What is the basic structure of an element used to link to another website?

     ``<a href="http://www.thelinkedwebsite">TheTextUserSees</a>``

3.  What attribute should you include in a link to open a new tab when the link is clicked?

       ``target="_blank"``

4.  How do you link to a specific part of the same page?

   ``you assign the different elements different id attributes and then use <a> </a> to link the id attributes to the corresponding information``

   1.  What is the purpose of CSS?

       ``CSS adds style to a website. It controls how elements will look``

   2.  What does CSS stand for? What does cascading mean in this case?

       ``It stands for Cascading Style Sheet. It refers to the rules governing which selector is applied if there are redundant selectors governing the same element. For example the more either the last or the more specific rule is applied.``


   3.  What is the basic structure of a CSS rule?

        `` The element being referenced followed by curly brackets and then the attributes you want to apply within those brackets, followed by a colon and what you would like the setting to be.
           ex:
        body {
          color: blue;
          padding: 25px;
          background-color: red;
        }``
   4.  How do you link a CSS stylesheet to your HTML document?

         ``You use the <link> element-
         <link href="css/styles.css" type="text/css"
         rel="stylesheet" />``

   5.  When is it useful to use external stylesheets as opposed to using interal CSS?
       ``When building a website with more than one page. It helps keep styling consistent across pages without having to repeatedly write the css code in html``
   6.  Describe what a color hex code is.

       ``It is a six digit code that follows a pound sign and is made up of numbers and upper and lowercase letters. These represent the amount of red, green, and blue in a color. for example #0000FF is a solid blue``

   7.  What are the three parts of an HSL color property?

      ``Hue: The basic color
        Saturation: How much gray in the Color
        Lightness: How light (white) or dark (black) a color is``

   8.  In the world of typeface, what are the three main categories of fonts? What are the differences between them?

      ``serif: Extra detailing on the ends of letters
        sans-serif: straigt clean ends of the letters
        monospace: every letter is the same width``

   9.  When specifiying font-size, what are the main three units used?

    ``weight: how bold
      style: how cursive or notice
      stretch: how condensed or extended``
