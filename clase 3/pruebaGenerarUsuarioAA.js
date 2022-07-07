const genUsuario = require("./lib/generarUsuario.js");
const _ = require("underscore");
const fs = require("fs");
const { resolve } = require("path");
const { reject } = require("underscore");

function escribirArchivoUsuario() {
  return new Promise((resolve, reject) => {
    let obj = genUsuario();
    let usuJson = JSON.stringify(genUsuario());
    let pathArch = "./var/log/" + obj.id + ".json";
    fs.writeFile(pathArch, usuJson, "utf8", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(pathArch);
    });
  });
}

function borrarUsuarios(path) {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(path + " borrado");
    });
  });
}

(async function () {
  for (let x = 0; x < 100; x++) {
    let path = await escribirArchivoUsuario();
    console.log(path);
    let resultado = await borrarUsuarios(path);
    console.log(resultado);
  }
})(); //IFFE
