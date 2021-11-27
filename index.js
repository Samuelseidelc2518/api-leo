import express from "express";
import Cors from "cors"
import { data } from './data.js'

const app = express()

const port = 3000;


//Middleware
app.use(express.json())
app.use(Cors())

app.get('/', (req, res) => {
    res.send({ hola: "mundo" })
})

app.get('/api/medical-appointments/appointments', (req, res) => {
    res.send({ datos: data })
})

app.post('/api/medical-appointments/confirm/:id', (req, res) => {
    const id = req.params.id;
    res.send({
        id,
        res: data[id - 1]
    })
})

app.listen(port, () => console.log("Servidor escuchando en puerto 3000"))