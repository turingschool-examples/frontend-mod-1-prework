/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
  this.author = author;
  this.content = content;
  this.timeStamp = time;
  this.numberOfLikes = likes;
  this.comments = comments;
 }

 incrementLikes() {
   this.numberOfLikes++
 }

 addToComments(newComment) {
   this.comments.push(newComment)
 }
};

var myTweet = new Tweet("Jessica", "It's Election Day!", "11:00 am", 400, ["Nervous!", "Finger's crossed"]);
console.log(myTweet);

myTweet.incrementLikes();
console.log(myTweet);

myTweet.addToComments("I voted, too!");
console.log(myTweet);


var govPolisTweet = new Tweet("Jared Polis", "Get out the vote, CO!", "9:00 am", 600, ["Where is my polling place?", "Can't wait for the results!"]);
console.log(govPolisTweet);

govPolisTweet.incrementLikes();
console.log(govPolisTweet);

govPolisTweet.addToComments("I already mailed my ballot!");
console.log(govPolisTweet);
