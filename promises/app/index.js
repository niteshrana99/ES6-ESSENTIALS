//Promises handle asynchronous programming in es6.
//Promises exixt in three states: Pending , fulfilled, rejected

let p=new Promise((resolve,reject)=>{ //accepts two params resolve and reject
    resolve('Promise resolved');
})

p.then(response=> console.log(response));

//REJECTED PROMISE

let p1=new Promise((resolve,reject)=>{ //accepts two params resolve and reject
    reject('Promise rejected');
})

p1.then(response=> console.log(response))
.catch(error=> console.log(error));