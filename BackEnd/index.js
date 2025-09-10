import express from 'express'
import cors from 'cors'
import rota from './routes/routes.js'

const app = express()
const port = 8000

//middleware para analisar body do request
app.use(
    express.urlencoded({
        extended: true
    })
)

//habilitando o JSON, para poder falar com o front
app.use(express.json())

//cors consgue conectar aplicações rodando em portas diferentes
app.use(cors({
    credentials: true,//segurança
    origin: 'http://localhost:5000'//porta do futuro front
}))

app.use('/ToDo', rota)

app.listen(port, (erro)=>{
    if(erro){
        console.log(erro)
        return
    }
    console.log(`servidor rodando na porta: ${port}`)
})