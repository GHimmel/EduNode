function pruevaVar() {
  let a = 2;
  if (a === 2) {
    var x = 2;
  }
  console.log(x);
}

pruevaVar();

const max = 100;

max = 200;
console.log(max);
