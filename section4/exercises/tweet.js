/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.number0fLikes = numberOfLikes;
  this.comments = comments;
  }

  likeIncrement(lk) {
    for (var i = 0; i < this.numberOfLikes + 1; i++);
    this.number0fLikes = this.number0fLikes + 1;
  }
  addComment(ac) {
    this.comments = this.comments + ", " + ac;
  }
};


var tweet1 = new Tweet("Josh H", "picture of snail", "12:34", 27, "He's so small!");
var tweet2 = new Tweet("Denver Zoo", "Who's ready to meet our newest panda cub?", "14:36", 247, ["I am!", "I'm more into flamingos."]);

console.log(tweet1);
tweet1.likeIncrement();
tweet1.addComment("So tiny. So gentle. So good.");
console.log(tweet1);

console.log(tweet2);
tweet2.likeIncrement();
tweet2.addComment("So you guys are just going to ignore the fact that you resurrected that rampaging pterodactyl?");
console.log(tweet2);

// I couldn't figure out how to add a space after each logged comment, so they just
// kind of run together. Sorry about that.
