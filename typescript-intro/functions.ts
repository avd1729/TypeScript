function none(a:number,b:number){
    // void - return
}

const subtract = (a:number , b:number) => {
    return a-b;
}

const mult = function (a:number , b:number) : number{
    return a*b;
}

function add(a:number,b:number ,c?: number){
    return c ? a+b+c : a+b;
} // optional params


function add2(a:number,b=10){
    return a+b;
} // default value

const add3 = (a:number , b:number , ...c: number[]) => {
    return a + b + c.reduce(
        (a,b) => a+b , 0
    ); // rest parameter
}

let nums = [1,2,3];
console.log(add3(1,2, ...nums)); 