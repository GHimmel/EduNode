const _ = require("underscore");
function suma(a, b) {
  return new Promise((resolve, reject) => {
    _.delay(() => {
      pepe = a + b;
      resolve(pepe);
    }, 3000);
  });
}

/* suma(5, 10)
  .then((z) => console.log(`el resultado es: ${z}`))
  .catch((error) => console.log("hola")); */

async function llamosuma() {
  for (let x = 0; x < 10; x++) {
    console.log(await suma(x, x));
  }
}

async function llamosuma2() {
  for (let x of [10, 20, 30]) {
    console.log(await suma(x, x));
  }
}

/* llamosuma(); */
llamosuma2();
console.log("llamo fin suma2");
