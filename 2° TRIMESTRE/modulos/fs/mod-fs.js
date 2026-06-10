const fs = require('fs')
const path = require('path')

try {

    const arquivo = fs.readFileSync(path.join(__dirname, '/festa.md'), 'utf-8')
    console.log(arquivo)

} catch (erro) {
    console.log("Deu uma bosta suprema: \nj" + erro.message)
}