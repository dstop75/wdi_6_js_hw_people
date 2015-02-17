var Person = function(firstName, lastName, age, weight, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age || 30;
    this.weight = weight || 150;
    this.height = height || Math.floor(Math.random() * (79 -60)) + 60;
};

Person.prototype = {
    display: function() {
        return this.firstName + "'s last name is " + this.lastName + ", age is " + this.age + ", weight is " + this.weight + ", height is " + this.height + ".";
    }
};

var dan = new Person("Dan", "Stoppelman");
console.log(dan.display());
