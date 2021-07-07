# Chapter 7 Responses:

## If you're using an input element in a form, what attribute controls the behavior of that input?
* When using an input element in a form, the `type=''` will control the behavior of the input. Some examples of this include `type="checkbox"`, `type="radio"` or `type="password"`

## What element is used to create a dropdown list?

* The `<select>` element is used in conjunction with two or more `<option>` elements to create a dropdown list:

```
<select name="foods">
    <option value="burrito">
    <option value="sushi">
    <option value="sandwich">
```

## If you're using an input element to send form data to a server, what should the `type` attribute be set to?

* In this case, the `type` attribute should be set to `submit`:

  `type="submit"`

## What element is used to group similar form items together?

* The `<fieldset>` element is used to group related form controls together inside the `<fieldset>` element.




## Chapters 13 and 15:
## Describe the differences between border, margin, and padding.
__Border__
* Separates the edge of one box from another.

__Margin__
* Found on the outside edge of the border, margins create a gap between the borders of two adjacent boxes.

__Padding__
* The space between the border and any content contained within it.
## For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?
* `1px` in the first position is the `top-width`
* `2px` in the second position is the `right-width`
* `5px` in the third position is the `bottom-width`
* `10px` in the fourth position is the `left-width`
# Describe the difference between block-level and inline elements.
* __Block-Level__ elements are elements that that begin a new line on a web page and will extend the full width of horizontal space of its parent element. `<p>, <body> and <head>` are examples of block-level elements.
* __Inline__ elements are elements that can start within a line, do not start a new line, and extend only as far as is defined by its tags. `<strong>, <b>, and <em>` are all inline elements. These elements sit within a block level element.
## What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?
* __Fixed positioning__ can be used to to keep an element in the same spot in your browser, no matter where the user scrolls on the page. The __z-index__ is important here, so you can ensure that the fixed position element remains stacked over the content of the page "behind" the fixed element.
## What is the difference between a fixed and liquid layout?
* A __Fixed layout__ doesn't change size as a user increases or decreases the size of their browser window.
* A __Liquid layout__ will expand a page to fill the entire browser window of the user.
