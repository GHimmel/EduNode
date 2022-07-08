function promiseWraper(fnParcialmenteAplicada) {
  return new Promise((resolve, reject) => {
    fnParcialmenteAplicada((err, z) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(z);
    });
  });
}

module.exports = promiseWraper;
