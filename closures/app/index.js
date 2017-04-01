/*closures: Functions that remember their creation env and can  refrence independent variables within that env. They enable fxn factories and private data in JS
With closures we create fxns. that can refer to var within their env. and keep track of env. of var.
*/
let call=()=>{
    let secret="Nitesh";//we can't access this data outside the call() fxn as it is not defined in global scope
    // so to give access to this data if fxn closure have method
    let reveal=()=>{
        console.log(secret);
    }
    reveal();
}

call();


//this can also be achieved by this way. Clousers allow us lexical scoping.

let call1=()=>{
    let secret="Nitesh";//we can't access this data outside the call() fxn as it is not defined in global scope
    // so to give access to this data if fxn closure have method
    let reveal=()=>{
        console.log(secret);
    }
    return reveal;
    
}

let unveil=call1();

unveil();

//FACTORIES: Takes one or more arguments and return new fxns based on those args

const addSuffix=(x)=>{
    const addPrefix=(y)=>{
        return y+x;
    }
    return addPrefix;
}

const lastWord=addSuffix('ness');
console.log(lastWord); // we see it returns the function
const fullWord=lastWord('happi');
console.log(fullWord);

//similarly we can use for mathematical calculations

const product=(num1)=>{
    return (num2)=> {
        return num2*num1
    } 
}

let mult=product(5);
console.log(mult(12));

//Private methods. can't be done by using JS classes but can be done by using ES6 closures. 

const budget=()=>{
    let balance=0; //private data
    let changeBal=(val)=>{ // this is our private function whose data we will access by using closure fxns.
        return balance+=val;
    }
    
    const deposit20=()=> changeBal(20);
    const withdraw20=()=>changeBal(-20);
    const check=()=> balance
    
    return{deposit20, withdraw20, check}
    
}

const wallet=budget()
console.log(wallet);
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
wallet.withdraw20();
console.log(wallet.check());