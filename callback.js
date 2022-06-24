function sumaAsync(a, b, resolucion) {
  setTimeout(() => {
    resolucion(c);
  }, 2000);
}
console.log("hola, ya sali");

sumaAsync(5, 2, (r) => {
  console.log(r);
});
