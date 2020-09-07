class Laptop {
    constructor(color, hasStickers, model, age, applications) {
        this.color = color;
        this.hasStickers = hasStickers;
        this.model = model;
        this.age = age;
        this.applications = applications;
    }
    turnOn() {
        this.power = true;
    }

    downloadApplications(addApps) {
        this.applications.push(addApps);
    }

}
var ApplesLaptop = new Laptop("silver", true, "apple", 10,["Atom", "Timer", "Spotlight"]);
var BananasLaptop = new Laptop("black", false, "lenovo", 3, ["VS code", "Ubuntu", "Chrome"]);
var PeachesLaptop = new Laptop("white", true, "google", 1, ["Chrome", "Axiom", "Slack"]);

console.log(ApplesLaptop);