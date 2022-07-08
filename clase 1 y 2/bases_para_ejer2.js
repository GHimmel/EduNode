const fs = require("fs");
const asyncForLoop = require("./lib/asyncForLoop.js");

function leerCarpeta(path, onFinish) {
  fs.readdir(path, (err, arrArchivos) => {
    if (err) {
      console.log(err);
      return;
    }
    onFinish(undefined, arrArchivos);
    /* recorrerYmostrar(arrArchivos); */
  });
}

function recorrerYhacer(path, hacerAlgo, onFinish) {
  leerCarpeta(path, (err, arrArchivos) => {
    asyncForLoop(
      arrArchivos.length,
      (idx, next) => {
        let archivo = arrArchivos[idx];
        let pathCompleto = [path, archivo].join("");
        hacerAlgo(pathCompleto, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("next");
          next();
        });
      },
      () => {
        onFinish();
        /* console.log("termino el proceso de borrado"); */
      }
    );
  });
}

function OrquestacionDos() {
  let path = "./var/log/";
  recorrerYhacer(path, borrarArchivos, () => {
    console.log("ejercicio terminado");
  });
  function hacerAlgo(pathCompleto, onFinish) {
    let leyenda = ["no hago nada", pathCompleto].join(":");
    console.log(leyenda);
    onFinish(undefined);
  }
  function mostrarArchivos(pathCompleto, onFinish) {
    fs.readFile(pathCompleto, "utf8", (err, contenido) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(contenido);
      onFinish(undefined);
    });
  }

  function borrarArchivos(pathCompleto, onFinish) {
    fs.unlink(pathCompleto, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("archivo borrado" + pathCompleto);
      onFinish(undefined);
    });
  }

  function insertarEnMySQL(pathCompleto, onFinish) {}
}

OrquestacionDos();
