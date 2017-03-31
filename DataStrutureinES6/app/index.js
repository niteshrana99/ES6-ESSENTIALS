//Data Structure in es6
/* IN es6 we have few data struture
1. SET: Allows us to store unique values. Similar to array but with more functionality.
*/
//Implementing set.  All sets inherit from set prototype so we declare set with a new keyword
let a=new Set();
a.add(5) // adding data
a.add(43);
a.add('Whoo') // adding string
a.add({x:50,y:'nitesh'}); // adding object

console.log(a);
console.log(a.size); //no. of elements in set
console.log(a.has(5)); // checking if it contains 5
console.log(a.has(7));

//We can convert an entire array into set. Just need to pass array to set constructor

let numbers=[3,4,5,6,87,98];
let numSet=new Set(numbers);

console.log(numSet);

//to iterate through numset we use enhanced for loop and .values() helper fumction

for(let elem of numSet.values()){
    console.log(elem);
}

// to check which letters appear in a string we first use split and then set

let chars="djkfgriuehdsu7wetfgbxjwerfsknlI38EDJBDLKCN";
let chars_arr=chars.split("");
let charsSet=new Set(chars_arr);
console.log(charsSet);

/*2. Another data tructure is MAPS
...Maps have keys and values
...Much similar to objects
...Maps beats object with suprerior keys and size property.
...Since objecys have prototypes, several default keys would exixt that will collide with keys that we want if we are not carefull but in MAP we can use any key we want without worrying. 
...Also in obkect the keys must be strings but in MAPS keys can be primitives or fxns. Also we can get size using size property*/

let z =new Map();

let key1="String Key";
let key2={a:'object key'};
let key3=function(){};
z.set(key1,"return value for string key");
z.set(key2,"return value for object key");
z.set(key3,"return value for function key");
console.log(z);

// iterating through the map. Just as in set first we created array, here we need to create a array of two lenght array and pas it through MAP

let numArr=[[1,'one'],[2,'two'],[3,'threee']];
let valMap=new Map(numArr);
console.log(valMap);

for(let elem of valMap.keys()){
    console.log(elem);   // HERE WE WILL BE ONLY GETTING KEYS
}

for(let elem of valMap.values()){
    console.log(elem);   // HERE WE WILL BE ONLY GETTING values
}
//to get both keys and values we use enteries helper fxn

for(let [key,values] of valMap.entries()){
    console.log(`${key} Points to ${values}`);
}

//PRogram to check how many times a letter appear in string

let strinng="kjfbjvwqjefvjdkbckjqwgyedvxbkznqaKAkbjsbhvewbdknkfnrk";
let letters=new Map();

for(let i=0;i<strinng.length;i++){
    let letter=strinng[i];
    if(!letters.has(letter)){
        letters.set(letter,1);
    }
    else{
        letters.set(letter,letters.get(letter)+1)
    }
}

console.log(letters);