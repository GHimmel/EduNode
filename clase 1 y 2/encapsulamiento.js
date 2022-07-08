function muestroEncapsulamiento() {
  let v = 0;
  return function () {
    return v++;
  };
}

let fn = muestroEncapsulamiento();
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
