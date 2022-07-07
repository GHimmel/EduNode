const _ = require("underscore");

let Obj = {
  paso1: function () {
    console.log("paso 1");
    return this;
  },
  paso2: function () {
    console.log("paso 2");
    return this;
  },
  paso3: function () {
    console.log("paso 3");
    return this;
  },
  paso4: function () {
    console.log("paso 4");
    return this;
  },
};

Obj.paso1().paso2().paso3().paso4();
