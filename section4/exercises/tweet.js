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
    this.time = timeStamp;
    this.number = numberOfLikes;
    this.comments = comments;
  }

addLikes() {
  this.number++
}
//method to add likes

addComments(newComment) {
  this.comments.push(newComment)
}
//method to add comments

}

var mcdonaldsTweet = new Tweet("McDonalds", "Ba Da Da Da, I'm loving it.", (Date.now()/ 1000 | 0), 11, ["Sounds delicious!", "food coma!", "diet starts tomorrow"]);
console.log(mcdonaldsTweet);
// Maps arguments to parameters in the constructor

mcdonaldsTweet.addLikes();
console.log(mcdonaldsTweet);
//call method addLikes

mcdonaldsTweet.addComments("Wendy's is better");
console.log(mcdonaldsTweet);
// call method add comments
//
//----------------------------------------------------------------------------
//
//New Tweet instance adding more comments and likes, logging once
var chickfilaTweet = new Tweet("Chick Fil A", "Eat more chicken!", (Date.now()/ 1000 | 0), 100, ["Favorite fast food", "best customer service!", "Please open on Sunday!"]);

chickfilaTweet.addLikes();
chickfilaTweet.addLikes();
chickfilaTweet.addLikes();
chickfilaTweet.addLikes();

chickfilaTweet.addComments("Bury me in Nuggets!");

console.log(chickfilaTweet);
