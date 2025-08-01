import cors from 'cors'
import express from 'express'

const app = express()
const port = 3000

app.use(cors('*'))
app.use(express.json())

// Move et action de base dans le jeu
let savedParameters = { move: 'DOWN', action: 'COLLECT', randomEnabled: false }

app.post('/send-parameter', (req, res) => {
    const { move, action, randomEnabled } = req.body

    if (!move || !action) {
        return res.status(400).json({ error: 'Le paramètre "move" et "action" sont requis' })
    }

    savedParameters = { move, action, randomEnabled }

    res.json({ success: true, move, action })
})

app.get('/action', (_, res) => {
    const { move, action, randomEnabled } = savedParameters

    // Juste au cas où j'ai la flemme de faire les requests manuelles 😂
    if (randomEnabled) {
        savedParameters.move = ['UP', 'DOWN', 'LEFT', 'RIGHT'][Math.floor(Math.random() * 4)]
        savedParameters.action = ['COLLECT', 'ATTACK', 'BOMB'][Math.floor(Math.random() * 3)]
    }

    res.send({ move, action })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
