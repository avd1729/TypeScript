//String

let lname:string;

lname = "Aravind";

let newname = lname.toLowerCase();

console.log(newname);

//Number

let age:number = 20;

// age = "25";

age = 20.1;
let result = age.toString();
result = "hey";

console.log(result);

age = parseInt("20");
console.log(age);

//Boolean

let isSafe:boolean;

//console.log(isSafe) error (undefined if compiled)

//Array

let arr : number[];

let arr2 : Array<string>;

arr = [1,2,3];
arr2 = ["hey","there"];

let ans = arr.filter((num)=> num>1);

console.log(ans);

let ans2 = arr.find(
    (num) => num = 2
);

console.log(ans2); // index

let ans3 = arr2.find(
    (word) => word === "me"
);

console.log(ans3); // undefined

let ans4 = arr2.find(
    (word) => word === "hey"
);

console.log(ans4); // hey

let sum = arr.reduce(
    (acc , num) => acc + num
);

console.log(sum);

//Enum

const enum Color {
    Red,
    Green,
    Blue
}

let c:Color = Color.Red;

//Tuple

let swapNums: [number,number];

function swap(num1:number , num2:number) : [number,number]{
    return [num2 , num1]
}

swapNums = swap(10,20);

console.log(swapNums[0]);
// console.log(swapNums[10]); Tuple type '[number, number]' of length '2' has no element at index '10'.

let details: [string , number];

let a:any;
let b; // any

b = 10; // now 'a' is number
b = "avd"; // now 'a' is string 

// do not use any anywhere