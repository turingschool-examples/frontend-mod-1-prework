/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor( author, content, timeStamp, numberOfLikes, comments ) {
   this.author = author;
   this.content = content;
   this.timeStamp = timeStamp;
   this.numberOfLikes = numberOfLikes;
   this.comments = comments;
  }

  addLike() {
    return this.numberOfLikes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

let oneTweet = new Tweet( 'Bob', 'Hello', '11.04.2019', 22, ['Nice', 'hi Bob']);
let anotherTweet = new Tweet( 'Susan', 'So fresh and so mean', '12.24.2019', 1000, ['Clever', 'Hilarious', 'Inspired']);

console.log(oneTweet);
console.log(anotherTweet);

anotherTweet.addLike();
console.log(anotherTweet);

oneTweet.addComment('Greetings');
console.log(oneTweet);
