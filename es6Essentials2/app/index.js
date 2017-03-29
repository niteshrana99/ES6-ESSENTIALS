//arrow fxn

let cheer=() =>{
    console.log('LIVE');
}

cheer();

//helper Methods
//map helper method: allows us to create array by doing some specific function on each element of array
let values=[10,23,34];
let double=values.map((n)=> n*2);

console.log(double);

//filter helper methods

let marks=[7,12,1,89,45,90,32];

let highMarks=marks.filter((n)=>n>15);

console.log(highMarks);

//string helper methods
//.repeat method

let b=`woo${"hoo".repeat(50)}` // hooto be repetaed 50 times
console.log(b);

console.log("butterfly".startsWith('butter')); //startsWith method will give true because butterfly starts with butter

console.log("butterfly".endsWith('fly'))


console.log("butterfly".includes('tt'));

//number validation

var addToCart=(item,price)=>{
    return Number.isFinite(price);
}
console.log(addToCart('Shirt',5));
console.log(addToCart('Shirt',Infinity));

//Modules: We will be ading a new file called fellowship.js. And we will se how to interact with modules using IMPORT,EXPORT and DEFAULT keywords

import {fellowShip,total} from './fellowship'
console.log(fellowShip,total)

import {add ,multiply} from './math'
console.log(add(5,10));

//since subtract is default imported we can import it without using curly braces

import subtract from './math'
console.log(subtract(5,10));
