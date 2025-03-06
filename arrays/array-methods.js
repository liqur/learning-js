// Замыкания

function ChangeBalance() {
    let balance = 0
    let key = "asd"
    return function(sum) {
        balance += sum
        key = "asddd"
        console.log(`Баланс: ${balance}`)
    }
}

const change = ChangeBalance()

change(100)
change(-50)
console.dir(change)

const change2 = ChangeBalance()

change2(300)
change2(400)

console.dir(change2)

change(0)
change2(0)

function createCashRegister() {
    let total = 0

    return {
        add(amount) {
            total += amount
            console.log(`Добавлено: ${amount} руб., Итог: ${total} руб.`)
        },
        getTotal() {
            return total
        }
    }
}

const shopCash = createCashRegister()

shopCash.add(20)

shopCash.add(120)

console.log(shopCash.getTotal())

function piggyBank() {
    let count = 0

    return function(add) {
        if (typeof add !== 'number' || Number.isNaN(add)) {
            return count
        }
        count += add
        console.log(`Добавлено: ${add}, Баланс: ${count}`)
    }    
}

myBank = piggyBank()

myBank(40)
myBank(30)
console.log(myBank())