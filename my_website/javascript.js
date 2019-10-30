document.getElementById("myBtn").addEventListener("click",
function() {
 var visitorName = prompt("What is your name?", "Dumbo");
  if (visitorName != null)   {
    document.getElementById("visitor").innerHTML =
      "Hello, " + visitorName + "! Please provide me with a book recommendation."
  }
});

document.querySelector("#submit").addEventListener("click", addRec);

function addRec() {
  var rec = document.createElement("LI");
  var value = document.getElementById("title").value + " by " + document.getElementById("author").value + " - " + document.getElementById("genre").value;
  // memba to reset input u dork
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("genre").value = "unknown genre";

  var textnode = document.createTextNode(value);
  rec.appendChild(textnode);
  document.getElementById("myList").appendChild(rec);
};
