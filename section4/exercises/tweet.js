/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content , time , likes , comments) {
    this.author = author;
    this.body = charLimit(content);
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;

    function charLimit(content) {
      if (content.length - 280 < 0) {
        return content
      } else {
        var i = content.length - 280;
        return content.slice(0,content.length - i);content;
        }
      }
    }


  addLike() {
    this.numberOfLikes += 1;
  };

  removeLike() {
    this.numberOfLikes -= 1;
  };

  makeComment(newcomment){
    this.comments.push(newcomment);
  };
};


var tweetStar = new Tweet('Smash Mouth' , "Somebody once told me the world is gonna roll me I ain't the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an 'L' on her forehead well the years start coming and they don't stop coming Fed to the rules and I hit the ground running This should all be cut off now please don't be reading this oh no." , '8:58 AM 07/04/2001' , 200 , ["That's great!" , "Amazing!" , "Why are you in my swamp?"])
var hotTake = new Tweet('Peter' , "I did not enjoy 'The Godfather'" , "8:43 PM 07/16/2012" , 0 , ["What?!?" , "It's a classic!" , "How can you say that??"]);
var todaysWeather = new Tweet ('KristaSuperUser95' , "Why are we getting 7 inches of snow in OCTOBER?" , "6:06 PM 10/20/2020" , 23 , ["I knowww" , "I'm moving to Texas" , "Back in my day..."])

tweetStar.removeLike();
tweetStar.makeComment('This is a bop.');
todaysWeather.addLike();
hotTake.makeComment("I actually agree with you");
hotTake.addLike();

console.log(tweetStar);
console.log(todaysWeather);
console.log(hotTake);

/*
//Testing
function testFunction(content) {
  if (content.length - 280 < 0) {
    return content
  } else {
    var i = content.length - 280;
    return content.slice(0,content.length - i);content;
  }
}
var smash = "Somebody once told me the world is gonna roll me I ain't the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an 'L' on her forehead well the years start coming and they don't stop coming Fed to the rules and I hit the ground running This should all be cut off now please don't be reading this oh no.";
console.log(testFunction( "Somebody once told me the world is gonna roll me I ain't the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an 'L' on her forehead well the years start coming and they don't stop coming Fed to the rules and I hit the ground running This should all be cut off now please don't be reading this oh no." ))
console.log(smash.length - 280)
*/
