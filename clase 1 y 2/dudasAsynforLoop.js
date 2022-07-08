const asyncForLoop = require("./lib/asyncForLoop.js");

asyncForLoop(
  20,
  (idx, next) => {
    console.log("iteracion numero" + idx);
    if ((idx %= 2) === 0) {
      setTimeout(() => {
        console.log("par");
        next();
      }, 1000);
    } else {
      setTimeout(() => {
        console.log("impar");
        next();
      }, 500);
    }
  },
  () => {
    console.log("termino");
  }
);
