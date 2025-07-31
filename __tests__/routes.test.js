import express from 'express'

describe('Routes', () => {
    it('should return a 200 status code', () => {

        const app = express()

        app.get('/action', (_, res) => {
            res.send({
                move: 'DOWN',
                action: 'COLLECT'
            })
        })
    })

    it('should return a 200 status code', () => {
        const app = express()
        app.get('/send-parameter', (req, res) => {

            const { move, action } = req.body

            if (!move || !action) {
                return res.status(400).json({ error: 'Le paramètre "move" et "action" sont requis' })
            }

            res.status(200).json({ success: true, move, action })
        })
    })
})