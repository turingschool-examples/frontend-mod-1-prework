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
  }

  incrementNumberOfLikes() {
    this.numberOfLikes = (this.numberOfLikes + 3)
  }
  addComments() {
    this.comments = (this.comments + ", NEW: She's so cute!")
  }

}

var trumpTweet = new Tweet("Donald Trump", "Rage-filled fiery nonsense", "1:23 AM", 0, "You're a disgrace.")
var myTweet = new Tweet("Gary Barkauski", "Look at this kid!", "4:44 PM", 20, "AWW")
var cpwTweet = new Tweet("Colorado Parks & Wildlife", "Save the ferrets!", "2:25 PM", 123, "Go black footed ferrets!")

console.log(trumpTweet);
console.log(myTweet);
console.log(cpwTweet);

cpwTweet.incrementNumberOfLikes();
console.log(cpwTweet);

myTweet.addComments();
console.log(myTweet);
