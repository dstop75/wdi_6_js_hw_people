var Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age || 30;
};

Person.prototype = {
    display: function() {
        return this.firstName + "'s last name is " + this.lastName + ", age is " + this.age + ".";
    }
};

var dan = new Person("Dan", "Stoppelman");
console.log(dan.display());
