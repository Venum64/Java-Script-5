function cartObj() {
  let rand = randomNumbers(1, 2)

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
  }

  return priceList[rand]
}

function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const object = cartObj()