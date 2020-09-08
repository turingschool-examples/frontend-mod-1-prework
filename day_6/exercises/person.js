/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// var person = new Object();

class Person {
    constructor(likes, spokenLanguages, drivesACar) {
        this.likes = likes;
        this.spokenLanguages = spokenLanguages;
        this.drivesACar = true;
    }

    learnsLanguage(newLanguage) {
        this.spokenLanguages.push(newLanguage);
    }
    
    carTotalled() {
        this.drivesACar = false;
    }

    gainsNewLike(yesPlease) {
        this.likes.push(yesPlease);
    }
}

var gabrielle = new Person(["Birds", "D&D", "water"], ["English", "Japanese"], true);

console.log(gabrielle.likes);
console.log(gabrielle.spokenLanguages);
console.log(gabrielle.drivesACar);

//up to here, all ok. Having problems calling the functions. 

gabrielle.carTotalled();
console.log(gabrielle.drivesACar);

//ok!

gabrielle.learnsLanguage("Spanish");
console.log(gabrielle.spokenLanguages);

//also ok! 

gabrielle.gainsNewLike("tea");
console.log(gabrielle.likes);

//I did it!! Finally! 

