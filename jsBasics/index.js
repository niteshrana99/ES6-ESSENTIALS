//variables in JS can start from $ or _ and cannot start with a number
var $wer=1;
console.log($wer)

//objects in JS

var dog={
    name:'Buddy',
    breed:'Golden Retriver',
    weight:79,
    bark:function(){
        console.log('WOOF')
    }
}

//there are two ways to access the properties of object

console.log(dog.name);

console.log(dog['name']);

dog.bark();

//////////////////////////////
/*ARRAYS*/

var array=[1,2,3,4,5];
console.log(array);

array.push(6);
console.log(array);

var poppedValue=array.pop(); // it pops the last element from array and returns it to var assigned
console.log(array,poppedValue);


