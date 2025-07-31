import cors from 'cors'
import express from 'express'

const app = express()
const port = 3000
app.use(cors('*'))

app.get('/action', (_, res) => {
    res.send({
        move: 'UP',
        action: 'COLLECT'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
