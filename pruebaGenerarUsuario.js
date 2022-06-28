const genUsuario = require("./lib/generarUsuario.js");
const asyncForLoop = require("./lib/asyncForLoop.js");
const _ = require("underscore");
const fs = require("fs");

console.log(genUsuario());

asyncForLoop(
  100,
  (idx, next) => {
    let obj = genUsuario();
    let usuJson = JSON.stringify(genUsuario());
    let pathArch = "./var/log/" + obj.id + ".json";
    fs.writeFile(pathArch, usuJson, "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      next();
    });
  },
  () => {
    console.log("finalizo el proceso");
  }
);
