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
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  };
  addComment(comments) {
    this.comments.push(comments);
  };
  addLike(numberOfLikes) {
    this.numberOfLikes++
    return numberOfLikes
  }
  };



var myTweet = new Tweet ("@coffeestain3000", "this is what the tweet says", "11AM today", 0, ["wow sick!"]);
myTweet.addLike();
myTweet.addLike();
myTweet.addComment("great tweet");
console.log(myTweet);
myTweet.addComment("omg u r so f'ing funny!");
myTweet.addLike();
myTweet.addLike();
console.log(myTweet);
myTweet.addComment("wow incredible stuff");
myTweet.addLike();
console.log(myTweet);
