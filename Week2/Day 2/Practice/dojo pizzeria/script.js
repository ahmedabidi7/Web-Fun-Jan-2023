
function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p=[];

p[0] = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
//console.log(p[0]);

p[1] = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
//console.log(p[1]);

function randomPizza() {
    var x = Math.floor( Math.random()*p.length );
    return p[x];
}
console.log (randomPizza());