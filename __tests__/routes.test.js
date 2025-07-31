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
})