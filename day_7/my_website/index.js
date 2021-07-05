let username = prompt("Who is visiting this site today?");

let firstLetter = username.slice(0,1)

let capitalFirstLetter = firstLetter.toUpperCase();

let remainingLetters = username.slice(1, username.length);

let smallRemainingLetters = remainingLetters.toLowerCase();

alert("Hello" + " " + capitalFirstLetter + smallRemainingLetters + "!");
