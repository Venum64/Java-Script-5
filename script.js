// users start
let users = 10;
let usersamount = {};

for (let i = 1; i <= users; i++) {
    let username = prompt(`Введите имя пользователя ${i}:`);
    let age = +prompt(`Введите возраст пользователя ${i}:`);
    usersamount[i] = {
        name: username, 
        age: age
    };
}

for (let key in usersamount) {
    console.log(`Пользователь - ${key}`);
    console.log(`Имя - ${usersamount[key].name}`);
    console.log(`Возраст - ${usersamount[key].age}`);
}

console.log(`Все пользователи: `, usersamount);
// users end


// menu start

let question = prompt("Что вы хотите заказать?");

const cart = cartObj();

console.log(cart);

let delivery = 9000;

let message = `Вы заказали `;

for (const key in cart) {
    message += "" + key;
    for (const key2 in cart[key]) {
        if (key2 == "info") {
            message += " " + cart[key][key2];
            console.log(message);
        } else if (key2 == "price") {
            delivery += cart[key][key2];
            console.log(delivery)
        }
    }
}
console.log(`${message} | общая стоимость ${delivery} сум с доставкой (9000) `)

// menu end