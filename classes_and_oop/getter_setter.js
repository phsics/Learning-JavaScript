class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}rohan`;
    }
    
    set password(value){
        this._password = value;
    }
}

const rohan = new User("r@rohan.ai", "abc");
console.log(rohan.password);
console.log(rohan.email);