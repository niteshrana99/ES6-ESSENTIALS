const array=[1,2,3,4];
array.push(6);
console.log(array);

//so as we see we can use methods with constant that manipulate the data.

/* TEMPLATE LITERALS */

let a ="good";
let b=`${a} morning`;

console.log(b);

//we will see use of spread operator. 

let x=[1,2,3];

let y=[67,...x,56,78];

console.log(y);

//spread operator spreads the value of x in y

//REST PARAMETERS:  SO we get all the parametes of function in a single array.
function collect(...a){
    console.log(a);
}

collect(8,9,5,3);

//destructuring assignment: It means we can assign our array or objects in easier way.

let z=[4,5,6];

let [four,five]=z;

console.log(four,five);

//Similarly we can do it for objects

let king={
    name:'Mufasa',
        age:22
}

let {name,age}=king

console.log(name,age);