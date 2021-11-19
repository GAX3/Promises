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

order(2000, () => console.log(`${stocks.fruits[0]} was selected`));

