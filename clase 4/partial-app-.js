const genUsuario = require("./lib/generarUsuario.js");
const _ = require("underscore");
const fs = require("fs");
const promiseWrapper = require("./lib/promiseWrapper.js");

async function escribirArchivoUsuario() {
  let obj = genUsuario();
  let usuJson = JSON.stringify(obj);
  let pathArch = "./var/log/" + obj.id + ".json";
  let fn = _.partial(fs.writeFile, pathArch, usuJson, "utf8");
  try {
    await promiseWrapper(fn);
  } catch (err) {
    console.log(err);
  }
}

escribirArchivoUsuario();
