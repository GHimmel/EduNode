const _ = require("underscore");

/* function crearPromesa() {
  return new Promise((resolve, reject) => {
    _.delay(() => {
      resolve("param1");
    }, 3000);
  });
}

function segundacrearPromesa() {
  return new Promise((resolve, reject) => {
    _.delay(() => {
      resolve("param2");
    }, 3000);
  });
}

crearPromesa()
  .then((a) => {
    console.log("Estoy dentro de la primera funcion ");
    console.log("El parametro que me invias es " + a);
    return segundacrearPromesa();
  })
  .then((b) => {
    console.log("estoy dentro de la segunda then");
    console.log("el valor que me enviasn en " + b);
    return crearPromesa();
  })
  .then((c) => {
    console.log("Estoy dentro de la funcion del primer then");
    console.log("el parametro que me envia es:" + c);
  });
 */

function suma(a, b) {
  return new Promise((resolve, reject) => {
    _.delay(() => {
      pepe = a + b;
      resolve(pepe);
    }, 3000);
  });
}

suma(5, 10)
  .then((z) => console.log(`el resultado es: ${z}`))
  .catch((error) => console.log("hola"));
