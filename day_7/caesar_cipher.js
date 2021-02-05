/* psuedocode:
Declare 'alphabet' variable
declare key variable set to shift amount within alphabet

String to new string
break string into array of individual characters
if statement for each letter in array
if ' ' leave as ' '
join array into new string
return results
*/

//var string = "Et tu Brute?"
//var key = 11

function CeasarCipher(string, key) {
    var bigString = string.toUpperCase();
    var newString = bigString.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
    console.log(newString);
}

CeasarCipher("Et tu Brute?", 11)