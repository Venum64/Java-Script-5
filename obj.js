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

// price start
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const priceList = {
  1: {
    'Lavash': {
      info: 'big cheese',
      price: 22000
    },
    'Hot-dog': {
      info: 'mini',
      price: 15000
    },
    'Cola': {
      info: '1.5 L',
      price: 9000
    },
  },
  2: {
    'Sushi': {
      info: 'max-roll',
      price: 32000
    },
    'Soya': {
      info: '200ml',
      price: 5000
    },
  }
};

let whatOrder;
while (true) {
  whatOrder = prompt('Введите число 1 или 2 чтобы сделать заказ');
  if (whatOrder === '1' || whatOrder === '2') {
    break;
  } else {
    alert('Такого значения нету, введите заново');
    console.log('Такого значения нету, введите заново');
  }
}

const object = priceList[whatOrder];
let items = [];
let total = 0;
const deliveryPrice = 9000;

for (let key in object) {
  let item = key + ' ' + object[key].info;
  items.push(item);
  total += object[key].price;
}
total += deliveryPrice;

console.log(`Вы заказали ${items.join(', ')} | Общая стоимость ${total} сум с доставкой (${deliveryPrice})`);
alert('Зайдите в консоль чтобы посмотреть ваш заказ');
// price end