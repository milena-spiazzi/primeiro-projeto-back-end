const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Milena Spiazzi',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQHm7bjQ4SonGA/profile-displayphoto-shrink_200_200/0/1702663013256?e=1724284800&v=beta&t=Pv7mDL_fkbu4jtKozaWGqvFbQY2TiJ-DjQ5iCTNtCBY',
    minibio: 'Por meio de uma transição acadêmica para o estudo da linguagem Python, iniciei minha jornada na programação e fui posteriormente introduzida na área. Atualmente sou estudante de "Big Data e Inteligência Analítica" na faculdade Anhembi Morumbi. Sou paixonada pelo universo dos dados e pela aplicação de tecnologia na resolução de problemas.'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)