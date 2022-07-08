/* function sumaAsync(a, b, resolucion) {
  setTimeout(() => {
    resolucion(`${b} hola ${a}`);
  }, 2000);
}
console.log("hola, ya sali");

sumaAsync(5, 2, (r) => {
  console.log(r);
}); */

function hola() {
  console.log("hola");
  setTimeout(function () {
    console.log("pepe");
  }, 2000);
}

function chau() {
  console.log("chau");
}

hola(chau());
