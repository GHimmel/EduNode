const genUsuario = require("./lib/generarUsuario.js");
const asyncForLoop = require("./lib/asyncForLoop.js");
const _ = require("underscore");
const fs = require("fs");

console.log(genUsuario());

asyncForLoop(
  100,
  /* (idx, next) => {
    let obj = genUsuario();
    let pathArch = "./var/log/" + obj.id + ".json";
    fs.readFile(pathArch, n, "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      next();
    });
  }, */
  (idx, next) => {
    fs.readFile("./var/log,");
  },
  () => {
    console.log("finalizo el proceso");
  }
);
