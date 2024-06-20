export interface User {
    name:string,
    age?:number;
    id:number;
    email?:string;
}

class Emp {
    #user : User;

    constructor(user : User){
        this.#user = user;
    }
}

let avd : User = {name: "Avd" , age: 20 , id: 1 , email: ""};
console.log(avd);
let johnn : User = {name: "John" , id: 2};

interface Emps extends User {
    salary: number;
}

let x: Emps = {name: "Dan" , id: 3 , salary: 40000};

export interface Login {
    login(): User;
}


johnn.name;
x.id;

let { name: UserName , id}: User =  {name: "John" , id: 2}; // Object destructuring

console.log(UserName);

// let users: User[] = [avd , johnn];
let users: User[] = [
    {name: "Tom" , id: 4},
    {name: "Joey" , id:5}
]

let [user1 , user2]: User[] = [
    {name: "Tom" , id: 4},
    {name: "Joey" , id:5}
]

console.log(user1);