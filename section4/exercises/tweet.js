/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
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

var tweet1 = new Tweet('Eric', "I'm not the biggest fan of node...", '03:02 pm 09/12/20', 0, []);
tweet1.addLike();
console.log(tweet1);

var tweet2 = new Tweet('Grand Admiral Thrawn', "Totally winning there till the end", '08:46 pm 09/11/20', 454, ['absolutely!', 'nah, man...']);
tweet2.addLike();
tweet2.addComment('Shoulda watched him better...');
console.log(tweet2);

var tweet3 = new Tweet('Sidious_only_2', "Why can't I keep a good apprentice?! :(", '09:02 am 09/04/20', 82739, ['But we got our revenge...', 'But I ran the Confederacy...', 'But I destroyed the Jedi...']);
tweet3.addComment('You ended up a jedi again, NERD!');
console.log(tweet3);

var tweet4 = new Tweet('Emet-Selch', "*snaps fingers, waves you away like a scrub", '09:04 om 09/10/20', 982734823794, ['Hythlodaeus says hi!']);
tweet4.addComment("Does this mean we're also new old friends now? ^.^");
console.log(tweet4);
