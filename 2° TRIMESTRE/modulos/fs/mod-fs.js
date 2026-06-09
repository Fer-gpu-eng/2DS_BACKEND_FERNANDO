const fs = require('fs')

const arquivo = fs.readFileSync(__dirname + '/festa.md')

console.log(arquivo)