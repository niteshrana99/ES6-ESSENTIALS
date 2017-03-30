import Animal from './animal'

//inheritance

class Lion extends Animal{
    constructor(name,height,color){
        super(name,height) //in child classes before using this object to modify data we need to use super keyword to acknowledge parent //constructor
        this.color=color;
    }
    hello(){
        console.log(`This is son ${this.name}`)
    }
}

let son=new Lion('Simba',3,'golden');
son.hello()
console.log(son);

//static methods in class
//We can access these methods without explicitely declaring instance of class. These are used when we want to use classes for namespace fxns rather that holding data

class Calculator{
    static multiply(a,b){
        return a*b}
}

let b=Calculator.multiply(4,5); // now as we see we need not to create a new instance of calculator class for accessing the multiply fxn.

console.log(b);
// so calculator is not a namesake for holding data but for calling fxns

// CLASSES AND PROTOTYPES : A prototypw reavels object's parent. All objects-Array, dates etc have prototypes

function wizard(name,house,pet){
    this.name=name;
    this.house=house;
    this.pet=pet;
    this.greek=()=> `I am ${this.name}`
}



let harry=new wizard('Nitesh','Hmr','Dog');
console.log(harry);
console.log(harry.greek());

//to add more data to prototype
wizard.prototype.petName;
harry.petName='Manu'
console.log(harry);

//adding a fxn. We cant add an arrow fxn because this refrence won't work there

wizard.prototype.info=function(){
    return `${this.petName}`;
}

console.log(harry.info());