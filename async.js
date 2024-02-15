const pizza = "🍕"

function orderPizza(callback) {
    console.log("Order Pizza")
    setTimeout(() => {
        callback(pizza)
    }, 3000)
    console.log("Pizza was ordered")

}
pizzaReady(() => {
    console.log(`Eat the  ${pizza} :D`)
})

orderPizza(pizzaReady)
console.log("Call myFriend!")
