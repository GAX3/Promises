let stocks = {
    fruits:     ["Strawberry", "Grapes", "Banana", "apple"],
    liquid:     ["water", "ice"],
    holder:     ["cone", "cup", "stick"],
    toppings:   ["chocolate", "peanuts"]
}

//console.log("Welcome! select an ingredients");

let order = (fruitName, call_production) => {
    //Order Fuits
    setTimeout(() => {
        console.log(`${stocks.fruits[fruitName]} was selected`)
    
        call_production();
    }, 2000)

    
};

let production = () => {
    setTimeout(() =>{
        console.log("production has started")
        setTimeout(() =>{
            console.log("The fruit has been chopped");
            setTimeout(() =>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() =>{
                    console.log("The machine has been started");
                    setTimeout(() =>{
                        console.log(`Select container ${stocks.holder[0]}`);
                        setTimeout(() =>{
                            console.log(`Select toppings: ${stocks.toppings[0]}`);
                            setTimeout(() =>{
                                console.log(`Serve ice cream`);
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
     
};

order(0,production);
