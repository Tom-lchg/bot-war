import cors from 'cors'
import express from 'express'

const app = express()
const port = 3000

app.use(cors('*'))
app.use(express.json())

// Move et action de base dans le jeu
let savedParameters = { move: 'UP', action: 'COLLECT' }

app.post('/send-parameter', (req, res) => {
    const { move, action } = req.body

    if (!move || !action) {
        return res.status(400).json({ error: 'Le paramètre "move" et "action" sont requis' })
    }

    savedParameters = { move, action }

    res.json({ success: true, move, action })
})

app.get('/action', (_, res) => {
    const { move, action } = savedParameters
    res.send({ move, action })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
