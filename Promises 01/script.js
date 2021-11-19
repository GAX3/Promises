//Promises JS

let p = new Promise((resolve, rejected) => {
    let a = 1 + 1;
    if(a == 2){
        resolve('Succes');
    }else {
        rejected('Failed');
    }
})

p.then((message) =>{
    console.log(`This is then ${message}`);
}).catch((message) => {
    console.log(`This is catch ${message}`);
})