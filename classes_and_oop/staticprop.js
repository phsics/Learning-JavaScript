class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // don't want to give access of this property so static keyword is used

    static createId(){
        return `123`;
    }
}

const rohan = new User("rohan");
// console.log(rohan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com");
iphone.logMe();
iphone.createId();