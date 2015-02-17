var Person = function(firstName, lastName, age, weight, height, friends) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age || 30;
    this.weight = weight || 150;
    this.height = height || Math.floor(Math.random() * (79 -60)) + 60;
    this.friends = friends || [];
};

Person.prototype = {
    display: function() {
        return this.firstName + "'s last name is " + this.lastName + ", age is " + this.age + ", weight is " + this.weight + ", height is " + this.height + ", and " + this.firstName + " has " + this.friends.length + " friend" + (this.friends.length === 1 ? "." : "s.");
    }
};

var dan = new Person("Dan", "Stoppelman", 39, 175, 71, ["Dave"]);
console.log(dan.display());
