//var msg = "Hello World"


//console.log(splitMsg);
function encodeMessage(msg, key) {
  var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var capMsg = msg.toUpperCase();
  var splitMsg = capMsg.split("");
  var code = [];
  for (var i = 0; i < splitMsg.length; i++) {
    var output = alpha.indexOf(splitMsg[i]) - [key];
     if (output === (-1 - key)) {
       code.push(" ")
     } else if (output < 0) {
       code.push(alpha[output + 26])
     } else {
       code.push(alpha[output]);
    }
  }
console.log(code.join(""))

}

encodeMessage("Hello World", 5)
