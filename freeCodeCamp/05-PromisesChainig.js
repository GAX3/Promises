let stocks = {
    fruits:     ["Strawberry", "Grapes", "Banana", "apple"],
    liquid:     ["water", "ice"],
    holder:     ["cone", "cup", "stick"],
    toppings:   ["chocolate", "peanuts"]
}
let is_shop_open = true;

console.log("Welcome Back!");

let order = (time, work) =>{
    return new Promise((resolve, rejected) =>{
        if(is_shop_open == true){
            setTimeout(() =>{
                resolve(work());
            }, time)
        }else{
            rejected(console.log("Our shop is closed"));
        }
    })
}

//Promise with seven steps    
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
.then(() =>{
    return order(0000, ()=> console.log("Production has started"));
})
.then(() =>{
    return order(2000, ()=> console.log(`The ${stocks.fruits[0]}, has been chopped`))
})
.then(()=> {
    return order (1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`))
})
.then(()=>{
    return order(1000, ()=> console.log("The machine has been started"));
})
.then(()=>{
    return order(2000, ()=> console.log(`Select container: ${stocks.holder[0]}`))
})
.then(()=>{
    return order(3000, ()=> console.log(`Select topping ${stocks.toppings[0]}`))
})
.then(()=>{
    return order(2000, ()=> console.log(`Serving Ice Cream`));
})
.catch(()=>{
    console.log("FAIL");
})
.finally(()=>{
    return order(3000, ()=>{console.log(""); console.log("Day Ended")     })
})

