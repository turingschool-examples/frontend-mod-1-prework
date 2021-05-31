/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.

node section4/exercises/Tweet.js

*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.auth = author;
    this.content = content;
    this.time = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.likes++;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
}

var tweet1 = new Tweet('Cara', "Check out these pictures of a muffler I found", '12:01 pm 05/24/21', 21, ["You are special. Weirdo"]);
tweet1.addLike();
console.log(tweet1);

var tweet2 = new Tweet('Wil', "Just why????????",
'12:34 pm 05/24/21', 33, ['please stop tweeting']);
tweet2.addLike();
tweet2.addComment('What is wrong with you guys?');
console.log(tweet2);

var tweet3 = new Tweet('garbagebear', "Pants are the devils shorts. Full stop.",
'12:50 pm 05/25/21', 666, ['ALL MUST AGREE']);
tweet3.addComment('I do not agree. I like capris');
console.log(tweet3);

var tweet4 = new Tweet('Satan', "Don't tell me my business.",
'06:66 am 06/6/2021', 667, ['All Hail!']);
tweet4.addComment("OMG. Satan has a Twitter??");
console.log(tweet4);
//DONE!
