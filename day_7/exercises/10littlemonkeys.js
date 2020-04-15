var numberOfMonkeys = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"];

numberOfMonkeys.forEach(function (value) {
    if (value === "One") {
        console.log(value + " little monkey jumping on the bed");
        console.log("He fell off and bumped his head");
    } else {
        console.log(value + " little monkeys jumping on the bed");
        console.log("One fell off and bumped his head");
    }

    console.log("Mama called the doctor,");
    console.log("And the doctor said");

    if (value === "One") {
        console.log("Get those monkeys right to bed!\n");
    } else {
        console.log("No more monkeys jumping on the bed!\n");
    }
});
