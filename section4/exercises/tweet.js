/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = 0;
    this.comments = [];
  }

  addLike() {
    this.numberOfLikes += 1;
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }
};

var firstTweet = new Tweet("Jake", "I love coding!", 230);
console.log(firstTweet);

firstTweet.addLike();
firstTweet.addComment("Hey I love it too!");

console.log(firstTweet);

firstTweet.addComment("Mee Too!")

var secondTweet = new Tweet("Natalie", "Whats up Jake?", 245)

secondTweet.addLike();
secondTweet.addComment("Just hanging out");

console.log(secondTweet);

secondTweet.addLike();
secondTweet.addComment("What are you up to?")

console.log(secondTweet);
