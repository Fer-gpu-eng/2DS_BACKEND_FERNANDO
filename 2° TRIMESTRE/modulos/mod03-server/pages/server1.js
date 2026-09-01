const http = require('node:http')
const porta = 8005

const home = path.join(__dirname, 'index.html')
const sobre = path.join(__dirname, 'sobre.html')

const server = http.createServer((req, res) => {

    const urlTratada = new URL(req.url, `http://${req.headers.host}`)
    const recurso = urlTratada.pathname

    if (recurso === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h3>Pagina Inicial</h3>')
    } else if (recurso === '/sobre') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h3>Sobre Nós</h3><p>Informações sobre a gente...</p>')
    } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')

        res.end('Bem-vindo! \nHomepage \\o/')
    }
})

server.listen(porta, () => {
    console.log(`Servidor rolando na porta ${porta}`)
})