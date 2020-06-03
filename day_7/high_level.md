## Caesar Cipher

If the resulting interaction pattern looks something like this:

**var cipher = new CaesarCipher();
cipher.encode("Hello World");**

Then, I'd start by working somewhat backwards from that.

**Steps:**

1. Create a class called *CaesarCipher*
//class CaesarCipher {}

2. With a constructor method that holds an argument within its parameters called *string*. The *string* will represent any given phrase.

constructor (string) {
  this.string = string;
}


3. Method called *toLowerCase(string)* method thatll adjust any capital letters to lower case.
lowerCase(string){
  this.string.toLowerCase()
}
4. Method called *split* within the CaesarCipher class with a split("") method. This method would split the string so that each letter has its own index value.

split(string) {
  this.string.split("")
}

5. Create a method called *encode* within the CaesarCipher class that holds a replace() method with key:value pairs of each individal letter in the alphabet and a corresponding replacing value of that letter shifted 3 times over.

encode(string) {
  this.string.replace(
    "a", "x";
    "b", "y";
    "c", "z";
    "d", "a";
    "e", "b";
    "f", "c";
    "g", "d";
    "h", "e";
    "i", "f";
    "j", "g";
    "k", "h";
    "l", "i";
    "m", "j";
    "n", "k";
    "o", "l";
    "p", "m";
    "q", "n";
    "r", "o";
    "s", "p";
    "t", "q";
    "u", "r";
    "v", "s";
    "w", "t";
    "x", "u";
    "y", "v";
    "z", "w");
  }

6. Create a method called *replace* with a replace(); method. which would remove the commas from the string.

replace(string){
  string.replace(",", "");
}
};

[in this case the initial comma in "Hello, World" would become a double space which might be solved by doing replace.replace("  ", " ");]

7. Instantiate an object called *cipher* from this class *CaesarCipher*.
8. Call the encode method with the object and log.

// Upon trying to write this code, i saw a few errors. One being that the string.replace() method only always for one argument. I think instead I would use an iteration loop for running through the letters in the alphabet and correlate that with shift() and push() methods.
