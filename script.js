// users start
let users = 10;

let usersamount = {};

for (let i = 1; i <= users; i++) {
    let username = prompt(`Введите имя пользователя ${i}:`);
    let age = +prompt(`Введите возраст пользователя ${i}:`);
    usersamount[i] = {
        name: name,
        age: age
    };
}

for (let i = 1; i <= users; i++) {
    console.log(`Пользователь - ${i}`);
    console.log(`Имя - ${usersamount[i].name}`);
    console.log(`Возраст - ${usersamount[i].age}`);
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