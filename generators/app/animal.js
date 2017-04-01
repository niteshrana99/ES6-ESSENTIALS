class Animal {
    constructor(name,height){
        this.name=name;
        this.height=height;
    }
    hello(){
        console.log(`Hello this is ${this.name}`)
    }
}

let father= new Animal('Mustafa',5.9);
console.log(father);

father.hello()

export default Animal;