var Person = function(firstName, lastName, age, weight) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age || 30;
    this.weight = weight || 150;
};

Person.prototype = {
    display: function() {
        return this.firstName + "'s last name is " + this.lastName + ", age is " + this.age + ", weight is " + this.weight + ".";
    }
};

var dan = new Person("Dan", "Stoppelman");
console.log(dan.display());
