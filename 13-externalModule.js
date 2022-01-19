const _ = require('lodash');

const intems = [1,[2,[3,[4]]]]
const newItem = _.flattenDeep(intems)
console.log(newItem);