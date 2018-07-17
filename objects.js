class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'has logged in');
    }
    logout(){
        console.log(this.email, 'has logged out');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login();
userTwo.logout();

// the 'new' keyword
// -- creates a new empty object {}
// -- sets the value of 'this' to be the new empty object
// -- calls the constructor method