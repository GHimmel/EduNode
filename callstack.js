function m1() {
  console.log("antes de llamar a m2");
  m2();
  console.log("despues de llamar a m2");
}

function m2() {
  console.log("antes de llamar a m3");
  m3();
  console.log("despues de llamar a m3");
}

function m3() {
  console.log("antes de llamar a m4");
  m4();
  console.log("despues de llamar a m4");
}

function m4() {
  console.log("llegue a m4...");
  /* setTimeout(() => m1(), 1);
  for (let x = 0; x < 10000; x++) {
    console.log(x);
  } */
  throw new Error("descripcion");
}

try {
  m1();
} catch (error) {
  console.log(error);
}

m1();
