class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'has logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var adminOne = new Admin('connorappleid@intracitygeeks.org', 'Connor');

var users = [userOne, userTwo, adminOne];

adminOne.deleteUser(userOne);
console.log(users);

// the 'new' keyword
// -- creates a new empty object {}
// -- sets the value of 'this' to be the new empty object
// -- calls the constructor method