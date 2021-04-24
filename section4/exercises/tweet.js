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
  };

  addlikes() {
    this.numberOfLikes++;
  }

  addcomments(words) {
    this.comments.push(words)
  }


};
var newTweet = new Tweet("Joe", "Hi", "time","hi");
newTweet.addcomments("Yo")
newTweet.addlikes()
console.log(newTweet);
