## CeaserCipher

```
var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); // should log "CZGGJ RJMGY"
```

* CeaserCipher is class, text and shift are properties, encode is method. cipher will be new instance of CeaserCipher class

* Encode method will pass user values

* Start off prompt user for text to encode, and shift length

* Google "shift string return different value javascript", find `charCodeAt()` on MDN

* Attempt to split string, shift, and assign unicode values separately, inefficient

* Use `charCodeAt()` to pull value from full string individually, no need to separate

* Use `charCodeAt()` to create an array of unicode values

* Set iteration up for user prompted string, start at 0, go until string length is reached, increase by 1 value each time

* If the If condition is met, pull unicode value of every letter in string, and push to a new array  else do nothing

* Create function to shift unicode value by user prompted value limit this to a-z and exclude space as a value

* Same iteration as previous function, now push to new array but subtract by shift value beforehand new array is encoded unicode

* Reassign the unicode value with fromCharCode

* Pass new encoded string through the encode method, and assign output to the cipher instance
