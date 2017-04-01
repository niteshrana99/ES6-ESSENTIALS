//ES6 GENERATORS: Generators break the typical run to completion model for functions. Generators can pause and resuume with yield and next(). So generators construct controlled flow functions and iterators.

function * letterGenerator (){ // syntax for generator
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterMaker=letterGenerator(); // we dont require new() keyword to make new instance of generator
console.log(letterMaker.next().value); //yield returns a value when a fxn is paused. This value is recieved by .next.value method
console.log(letterMaker.next().value);
console.log(letterMaker.next().value);
console.log(letterMaker.next().value);

//ANOTHER EXAMPLE

function * countMaker(){
    let count=0;
    while(count<3){
        yield count+=1;
    }
}

let counter=countMaker();

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

//CONTROL FLOW IN GENERATOR: Adding reset facility

function * evens(){
    let count=0;
    while(true){
        count+=2;
        let reset=yield count;
        if(reset){
            count=0;
        }
    }
}

let sequence=evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value); 
//.next has a parameter that can be used to pass state to generator. It can modify the internal state of generator.
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value); //we pass true state to generator which is captured by reset in generator

//making custom iterator

const arrIterator=(arr)=>{
    let index=0;
    return {next: () => {
        if(index<arr.length){
            let next=arr[index];
            index +=1;
            return next;
        }
    }
}
}

let it=arrIterator([1,3,4]);
console.log(it.next()); //returns 1
console.log(it.next()); //returns 3 
console.log(it.next()); //returns 4
// We see the above itertor trturns one element at a time. We have a more powerful alternative i.e. Generator iterator.

function * geneRatorIterator(){
//    yield arguments;//for entire array
    
    //if you want one at a time use this code
//    for(let args of arguments ){
//        yield args;
//    }
    //the obove for loop uses yield 3 times . Whenever we use yield more than one time it can be written like
    yield * arguments
}
let genit=geneRatorIterator(1,2,3);
console.log(genit.next().value);
console.log(genit.next().value);
console.log(genit.next().value);