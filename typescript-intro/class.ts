import {Login , User} from './interface';
import * as UserLogin from './interface';

class Employee implements UserLogin.Login {
    id!:number;
    name!:string;
    address!:string; // Property 'address' has no initializer and is not definitely assigned in the constructor.

    constructor(){

    }
    // Implement the login method
    login(): User {
        return {name: "Avd", age: 20, id: 1, email: ""};
    }

    // multiple constructors are not allowed
}

let john = new Employee();

john.id = 1;
john.name = "John";
john.address = "Highway 05";

console.log(john);

class Employee2 {
    #id:number;
    protected name:string;
    address:string;

    constructor(id:number , name:string , address:string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getId() : number {
        return this.#id;
    }

    setId(id : number) {
        this.#id = id;
    }

    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`;
    }

}

let dan = new Employee2(2,"Dan","New Avenue");
console.log(dan);
let address = dan.getNameWithAddress();
console.log(address);
// dan.#id; Property '#id' is not accessible outside class 'Employee2' because it has a private identifier.

class Manager extends Employee2 {

    constructor(id:number , name:string , address:string){
        super(id,name,address);
    }

    static getSalary() : number {
        return 50000;
    }

    getNameWithAddress() : string {
        return `${this.name} is a manager at ${this.address}`;
    }

}

let tom = new Manager(3,"Tom","New town");
// tom.name; Property 'name' is protected and only accessible within class 'Employee2' and its subclasses.
let r = tom.getNameWithAddress();
console.log(r);
let s = Manager.getSalary();
console.log(s);
dan.setId(22);
console.log(dan); // Employee2 { name: 'Dan', address: 'New Avenue' }
let idd = dan.getId();
console.log(idd);



