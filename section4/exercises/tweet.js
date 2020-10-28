/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

// class Tweet {
//     constructor(author, content, timeStamp, numberOfLikes, comments) {
//         this.author = author;
//         this.content = content;
//         this.timeStamp = timeStamp;
//         this.numberOfLikes = numberOfLikes;
//         this.comments = comments;
//     }
//
//     incrementLikes() {
//         this.numberOfLikes++;
//     }
//
//     addComments(newComment) {
//         this.comments.push(newComment)
//     }
// }
//
// var tweet1 = new Tweet('nikki', 'dear twitter: what is the weather like today?', new Date(), 4, []);
// console.log(tweet1);
// tweet1.incrementLikes();
// console.log(tweet1);
// tweet1.addComments('hey it\'s pretty nice here in florida.')
// console.log(tweet1);
// tweet1.addComments('it\'s gross in michigan.')
// console.log(tweet1);

//

class Tweet {
    constructor(author, content, timeStamp, numberOfLikes, comments) {
        this.author = author
        this.content = content
        this.timeStamp = timeStamp
        this.numberOfLikes = numberOfLikes
        this.comments = comments
    }

    incrementLikes() {
        this.numberOfLikes++;
    }

    addComments(newComment) {
        this.comments.push(newComment)
    }
}

var tweet1 = new Tweet('nikki', 'I like to tweet.', new Date(), 5, []);
console.log(tweet1);

tweet1.incrementLikes();
tweet1.incrementLikes();
console.log(tweet1);

tweet1.addComments('hey I like to tweet, too!!');
console.log(tweet1);

tweet1.addComments('hey I don\'t like to tweet at all :(');
console.log(tweet1);

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


// class Child {
//     constructor(name, hairType, isPlaying, snacksAvailable, favoriteGame) {
//         this.name = name;
//         this.hairType = hairType;
//         this.isPlaying = isPlaying
//         this.snacksAvailable = snacksAvailable;
//         this.favoriteGame = favoriteGame;
//     }
//
//     scheduleHaircut() {
//         if (this.name === 'Bert' || this.hairType === 'curly') {
//             return 'Please schedule an appointment to cut your hair!'
//         }
//     }
//
//     playsGames(mySnacks, currentGames) {
//         if (this.snacksAvailable === mySnacks && this.favoriteGame === currentGames) {
//             this.isPlaying = true;
//             console.log('Play on!');
//         } else {
//             console.log('no games for you!!')
//         }
//     }
// }
//
// var bert = new Child('Bert', 'curly', false, 'chips', 'Smash Bros')
// var oscar = new Child('Oscar', 'semi-curly', false, 'apples', 'Minecraft')
// var vera = new Child('Vera', 'straight', false, 'granola bars', 'Roblox')
//
// console.log(bert);
// console.log(oscar);
// console.log(vera);
//
// console.log(bert.scheduleHaircut());
// console.log(vera.playsGames('granola bars', 'Roblox'));
