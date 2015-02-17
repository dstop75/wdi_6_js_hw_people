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
    },
    greetPeople: function(greeting, people) {
        var i, fullGreeting = "";
        people = people || this.friends;
        greeting = greeting || "Hi";
        if (people.length === 0) {
            return "Hi";
        } else {
            for (i = 0; i < people.length; i++) {
                fullGreeting += greeting + " " + people[i].fullName() + ". ";
            }
            return fullGreeting;
        }
    }
};


var dave = new Person("Dave", "McWane", 38, 160, 72),
dan = new Person("Dan", "Stoppelman", 39, 175, 71, [dave]),
steve = new Person("Steve", "Foote", 38, 200, 78, [dave, dan]);
chris = new Person("Chris", "Bush", 38, 180, 72, [dave, dan, steve]);
sean = new Person("Sean", "Rogan", 38, 170, 67, [dave, dan, steve, chris]);
derek = new Person("Derek", "Davis", 30, 170, 70, [dave, dan, steve, chris, sean]);
ryan = new Person("Ryan", "O'Connor", 37, 185, 71, [dave, dan, steve, chris, sean, derek]);
paul = new Person("Paul", "Halpainy", 36, 170, 72, [dave, dan, steve, chris, sean, derek, ryan]);
ben = new Person("Ben", "Basile", 32, 175, 72, [dave, dan, steve, chris, sean, derek, ryan, paul]);
alex = new Person("Alex", "Stern", 35, 160, 66, [dave, dan, steve, chris, sean, derek, ryan, paul, ben]);

console.log(dave.greetPeople("Yo"));
console.log(dave.greetPeople());
console.log(dan.greetPeople("Yo"));
console.log(dan.greetPeople());
console.log(steve.greetPeople("Yo"));
console.log(steve.greetPeople());
console.log(steve.greetPeople("Hello", alex.friends));
