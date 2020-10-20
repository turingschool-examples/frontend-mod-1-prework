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

    incrementLikes() {
        this.numberOfLikes++;
    }

    addComments(newComment) {
        this.comments.push(newComment)
    }
}

var tweet1 = new Tweet('nikki', 'dear twitter: what is the weather like today?', new Date(), 4, []);
console.log(tweet1);
tweet1.incrementLikes();
console.log(tweet1);
tweet1.addComments('hey it\'s pretty nice here in florida.')
console.log(tweet1);
tweet1.addComments('it\'s gross in michigan.')
console.log(tweet1);

//
var tweet2 = new Tweet('my cat', 'meow', new Date(), 500, ['amen, sister!', 'meow right back at you!', 'rawr', 'purr']);
console.log(tweet2);
tweet2.incrementLikes();
tweet2.incrementLikes();
tweet2.incrementLikes();
tweet2.incrementLikes();
tweet2.incrementLikes();
tweet2.incrementLikes();
tweet2.addComments('funny hoomans don\'t know my hairballs!')
console.log(tweet2);
