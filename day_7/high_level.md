#High Level

##Caesar Cipher

*psuedocode:*
Declare 'alphabet' variable
declare key variable set to shift amount within alphabet

String to new string
break string into array of individual characters
if statement for each letter in array
if ' ' leave as ' '
join array into new string
return results

#Take away:

After doing some googling, and reading documentation, I learned that I should be utilizing the ```String.fromCharCode``` and ```charCodeAt()``` functions. Both of which I still need to get a better understanding of. After reading the documentation, I dived into learning about 'UTF-16 code' to better understand the code I was utilizing. Needless to say, I was reminded that I am very much at the beginning of my journey. I am excited to eventually understand what some of this means.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

https://stackoverflow.com/questions/2241348/what-is-unicode-utf-8-utf-16

http://www.fileformat.info/info/charset/UTF-16/list.htm


##Checkerboard

*psuedocode:*
Create function that takes in two arguments, length (x), and width (y).
For every row (with an even index) print the pattern of 'X_' for every other row print '_X'.
The number of 'X_' or '_X' printed are determined by the value of 'y'.
Divide the value of 'y' by two, since characters are two digits long.