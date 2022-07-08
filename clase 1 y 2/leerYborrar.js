const fs = require("fs");
const asyncForLoop = require("./lib/asyncForLoop.js");

let path = "./var/log/";

function leerCarpeta(onFinish) {
  fs.readdir(path, (err, arrArchivos) => {
    if (err) {
      console.log(err);
      return;
    }
    onFinish(undefined, arrArchivos);
    /* recorrerYmostrar(arrArchivos); */
  });
}

function recorrerYmostrar(arrArchivos, onFinish) {
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
      onFinish();
      /* recorrerYborrar(arrArchivos); */
    }
  );
}

//------------------- eliminar uno por uno ------------------

function recorrerYborrar(arrArchivos, onFinish) {
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
      onFinish();
      /* console.log("termino el proceso de borrado"); */
    }
  );
}

//--------------------- leer uno por uno --------------

/* for (let archivos of arrArchivos) {
        let pathCompleto = [path, archivos].join("");
        fs.readFile(pathCompleto, "utf8", (err, contenido) => {});
      } */

// aplicacion principal --- Orquestacion
function OrquestacionUno() {
  leerCarpeta((err, arrArchivos) => {
    recorrerYmostrar(arrArchivos, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("termino el proceso de lectura");
      recorrerYborrar(arrArchivos, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("termino el proceso de borrado");
      });
    });
  });
}

OrquestacionUno();
