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
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    weightInStone: function() {
        return Math.floor(this.weight / 14);
    },
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    removeFriend: function(friendFullName) {
        for (var i = 0; i < this.friends.length; i++) {
            if (this.friends[i].fullName() === friendFullName) {
                this.friends.splice(i, 1);
            }
        }
    }
};


var dave = new Person("Dave", "McWane", 38, 160, 72),
dan = new Person("Dan", "Stoppelman", 39, 175, 71, [dave]),
steve = new Person("Steve", "Foote", 38, 200, 78, [dave, dan]);

console.log("initially:");
console.log(steve.friends);
steve.removeFriend("Dan Stoppelman");
console.log("after:");
console.log(steve.friends);
