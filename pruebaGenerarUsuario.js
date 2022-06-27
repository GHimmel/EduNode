const getUsuario = require("./lib/generarUsuario.js");
const asyncForLoop = require("./lib/asyncForLoop.js");
const _ = require("underscore");

console.log(getUsuario());

asyncForLoop(
  100,
  (inx, next) => {
    _.delay(() => {
      console.log(idx);
      next();
    }, 500);
  },
  () => {
    console.log("finalizo el proceso");
  }
);
