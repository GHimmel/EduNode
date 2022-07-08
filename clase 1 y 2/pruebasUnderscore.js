const _ = require("underscore");

function suma(x) {
  return function (y) {
    return x + y;
  };
}

let suma2 = suma(2);
let suma6 = suma(6);

console.log(suma2(10));

function suma4(x, y) {
  return x + y;
}

let suma100 = _.partial(suma4, 100);
let resultado = suma100(10, 15);
console.log(resultado);
