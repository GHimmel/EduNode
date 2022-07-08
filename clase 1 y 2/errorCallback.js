function leerArchivo(path, encoding, cd) {
  console.log(path);
  console.log(encoding);
  cd(new Error("sadsadd"), "contenido del archivo");
}

leerArchivo("/cas/efds/node", "utf8", (err, date) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(date);
});
