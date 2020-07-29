Explaining Caesar Cipher:

When I saw this problem I thought the concept was actually pretty simple but the execution is what tripped me up. The code I submitted is from a youtube video I watched that I messed with to get the correct shift. I changed +n to +26-n because I found that would give me the correct return of "CZGGJ RJMGY".

1. I thought to list out the alphabet and then get the index of each letter within the alphabet.
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  Get Index() of alphabet?
  Also saw that charCodeAt is a function that gets the position of the letter. (Or at least that's how I understood it)

2. Then once you have those you'd need to add the shift (n) to the index to get the new position in the alphabet.
  var string = "String" (String you're trying to put into code, given by the user)
  var n = integer (this will be given by the user)

3. Then go from the index back to the actual letter and log that to get your code.

4. Then join all the letters together to get your code.
  += String.fromCharCode(code);

The issue I faced as a new programmer was not knowing how to loop the alphabet. For example if you're at Z and shifting 3 then it'd need to loop around to the front on the alphabet instead of going to some blank.
