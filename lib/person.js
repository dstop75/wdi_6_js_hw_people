var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype = {
    display: function() {
        return this.firstName + "'s last name is " + this.lastName + ".";
    }
};

var dan = new Person("Dan", "Stoppelman");
console.log(dan.display());
