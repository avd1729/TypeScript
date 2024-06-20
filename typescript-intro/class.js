"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee2_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor() {
    }
    // Implement the login method
    login() {
        return { name: "Avd", age: 20, id: 1, email: "" };
    }
}
let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "Highway 05";
console.log(john);
class Employee2 {
    constructor(id, name, address) {
        _Employee2_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getId() {
        return __classPrivateFieldGet(this, _Employee2_id, "f");
    }
    setId(id) {
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee2_id = new WeakMap();
let dan = new Employee2(2, "Dan", "New Avenue");
console.log(dan);
let address = dan.getNameWithAddress();
console.log(address);
// dan.#id; Property '#id' is not accessible outside class 'Employee2' because it has a private identifier.
class Manager extends Employee2 {
    constructor(id, name, address) {
        super(id, name, address);
    }
    static getSalary() {
        return 50000;
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let tom = new Manager(3, "Tom", "New town");
// tom.name; Property 'name' is protected and only accessible within class 'Employee2' and its subclasses.
let r = tom.getNameWithAddress();
console.log(r);
let s = Manager.getSalary();
console.log(s);
dan.setId(22);
console.log(dan); // Employee2 { name: 'Dan', address: 'New Avenue' }
let idd = dan.getId();
console.log(idd);
