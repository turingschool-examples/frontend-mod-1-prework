Caesar Cipher Notes


As in any computer program, there are multiple ways of getting an answer. The simplest and probably worst way to make a Caesar Cipher would be to set every letter to another of your choosing. i.e. ["A" = "C", "B" = "D", "C" = "E", etc.]. This is terrible for two reasons: First, you would have to type out every letter four times (upper and lower case and both of their shifts). Second, it would not let you change the cipher if you wanted to set it to a different shifted amount. In that case we will find a way to make a cipher without those two problems.
To do this, we need to understand Char Code. Char Code is a set of values for every typable character. These values are returned as numbers. For instance, the char code for capital "A" is 65. Capital "Z" is 90. Then there are a couple non letter characters, followed by lower case "a" which start at 97 and lower case "z" which ends at 122.
We want to know if a characters char code is between 65 and 90 [A-Z]. We then want to shift it to another char code that is between these two. Same for codes that are between 97 and 122 [a-z]. This is important because we want to make sure that characters who's codes aren't between these sets (i.e spaces, periods, colons, etc.) don't get shifted (at least in our example).
To do this we first set a variable (lets call it "code") equal to a string referenced at it's char code. This looks like this

 var code = str.charCodeAt(i);

 \\* "charCodeAt" finds our char number for a variable.

We then add an if/else statement providing the parameters we referenced above.

if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

The information this if/else statement is providing is "if" our character's char code is between 65 and 90 [A-Z], subtract 65 from it, add the shift (amount), divide it by 26 (the number of alphabetical characters we have), and add the remainder to 65. This will shift our capital letters a specific "amount" that we can reference. The same is then done for 97-122 [a-z].
Bam! This is the body of the code for a caesar cipher. We do have to add a couple variable and such before our code can run such as giving it a name and function;

var caesarCipher = function(str, amount)

Adding an if statement in case the shift "amount" is less than 0

if (amount < 0)
  return caesarCipher(str, amount + 26);

  \\* This is is incase somebody wanted to shift our code say -28 spaces. This is stupid. Why not just shift our code 2 spaces; it does the same thing. But hey, I don't make the rules yet.

We then set an output to an empty sting that will later get filled.

var output = "";

Then we add a "for" statement providing the parameters for our variable's output "c" to equal our shifted strings input.

for (var i = 0; i < str.length; i ++) {

		var c = str[i];

Add this on top of our code's body. Slap an out put on the end

output += c;

and finally return the output

return output;

If my notes are legible then a code should be returned looking something like this

var caesarCipher = function(str, amount) {

	if (amount < 0)
		return caesarCipher(str, amount + 26);

	var output = "";

	for (var i = 0; i < str.length; i ++) {

		var c = str[i];

		if (c.match(/[a-z]/i)) {

			var code = str.charCodeAt(i);

			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			else ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		output += c;

	}

	return output;

};

To call this code you would type console.log(caesarCipher("Text goes here", 6));

This would shift our text "Text goes here" 6 spaces. Returing "Zkdz muky nkxk".
