"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Emp_user;
Object.defineProperty(exports, "__esModule", { value: true });
class Emp {
    constructor(user) {
        _Emp_user.set(this, void 0);
        __classPrivateFieldSet(this, _Emp_user, user, "f");
    }
}
_Emp_user = new WeakMap();
let avd = { name: "Avd", age: 20, id: 1, email: "" };
console.log(avd);
let johnn = { name: "John", id: 2 };
let x = { name: "Dan", id: 3, salary: 40000 };
johnn.name;
x.id;
let { name: UserName, id } = { name: "John", id: 2 }; // Object destructuring
console.log(UserName);
// let users: User[] = [avd , johnn];
let users = [
    { name: "Tom", id: 4 },
    { name: "Joey", id: 5 }
];
let [user1, user2] = [
    { name: "Tom", id: 4 },
    { name: "Joey", id: 5 }
];
console.log(user1);
