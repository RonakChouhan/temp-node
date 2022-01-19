const path = require('path')

console.log(path);
console.log(path.sep);

const filePath = path.join('./','nodeJS' , 'test.txt')

console.log(filePath);

console.log(path.basename(filePath));

console.log(path.resolve(__dirname,'test.txt'));