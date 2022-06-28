const fs = require("fs");
const { first } = require("underscore");
const asyncForLoop = require("./lib/asyncForLoop.js");

let path = "./var/log/";

fs.readdir(path, (err, arrArchivos) => {
  if (err) {
    console.log(err);
    return;
  }

  asyncForLoop(
    arrArchivos.length,
    (idx, next) => {
      let archivo = arrArchivos[idx];
      let pathCompleto = [path, archivo].join("");
      fs.readFile(pathCompleto, "utf8", (err, contenido) => {
        if (err) {
          console.log(err);
          return;
        }
        setTimeout(() => {
          console.log(contenido);
          next();
        }, 200);
      });
    },
    () => {
      console.log("termino el proceso de borrado");
    }
  );
});

/* for (let archivos of arrArchivos) {
        let pathCompleto = [path, archivos].join("");
        fs.readFile(pathCompleto, "utf8", (err, contenido) => {});
      } */
