type x = number;

type y = {};

type z = 123;

type a = {
    x:number,
    y:string
}

type animals = x | y | z;

type b = x & y;