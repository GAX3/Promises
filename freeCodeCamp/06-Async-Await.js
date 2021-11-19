let stocks={
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

/* 
//How a promise works
let order = () =>{
    return new Promise ((resolve, rejected) => {
        if(true){

        }else{

        }
    })
}

order()
.then()
.then()
.then()
.catch()
.finally()
*/

/*
//How define asyc await
//Async await - Finally
async function order(){
    try{
        console.log("Try");
    }
    catch(error){
        console.log("abc doesn't exits ", error)
    }
    finally{
        console.log("runs code anyway")
    }
}

order()
.then(()=>{
    console.log("Hello")
})
.finally(()=>{
    console.log("END")
})
*/

/*
// Async Await
let toppings_choice = () =>{
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve(
                console.log("Which topping would you like?")
            )
        }, 3000);
    });
};

//toppings_choice();

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")
    await toppings_choice()
    console.log(" D ")
    console.log(" E ")
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
*/

function time(ms){
    return new Promise((resolve, rejected)=>{
        if(is_shop_open){
            setTimeout(resolve, ms);
        }else{
            rejected(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        await time(0000)
        console.log(`Start the production`)

        await time(2000)
        console.log(`The ${stocks.fruits[0]} has been chopped`)

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)

        await time(1000)
        console.log(`Start the machine`)

        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log(`Serve Ice Cream`)
    }
    catch(error){
        console.log("customer left")
    }
    finally{
        console.log("Day ended, Shop is close")
    }
}

kitchen();