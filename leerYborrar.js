const fs = require("fs");
const asyncForLoop = require("./lib/asyncForLoop.js");

let path = "./var/log/";

function leerCarpeta() {
  fs.readdir(path, (err, arrArchivos) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}

function recorrerYmostrar(arrArchivos) {
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
      console.log("termino el proceso");
      console.log("ahora borramos");
      recorrerYborrar(arrArchivos);
    }
  );
}

//------------------- eliminar uno por uno ------------------

function recorrerYborrar(arrArchivos) {
  asyncForLoop(
    arrArchivos.length,
    (idx, next) => {
      let archivo = arrArchivos[idx];
      let pathCompleto = [path, archivo].join("");
      fs.unlink(pathCompleto, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("archivo borrado" + pathCompleto);
        next();
      });
    },
    () => {
      console.log("termino el proceso de borrado");
    }
  );
}

//--------------------- leer uno por uno --------------

/* for (let archivos of arrArchivos) {
        let pathCompleto = [path, archivos].join("");
        fs.readFile(pathCompleto, "utf8", (err, contenido) => {});
      } */
