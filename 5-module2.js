const names = require('./4-module1')
const sayHii = require('./3-functionmodule')
console.log(names);
const data = require('./6-alternativemodule')
console.log(data);
require('./7-mindGrenade')

sayHii('susan')
sayHii(names.john)
sayHii(names.peter)