const express = require('express')
const router = express.Router()

const { success, error, missingParameters, internalError } = require('./utils/body')

const itemsService = require('./services/items')

router.get('/', (req, res) => {
    res.json({
        api: 'UP'
    })
})

router.get('/items/:id', async (req, res) => {
    const { id } = req.params

    const { statusCode, body } = await itemsService.getItem(id)
    
    return res.status(statusCode).send(body)
})

router.get('/items', async (req, res) => {
    const { q } = req.query

    const { statusCode, body } = await itemsService.searchItems(q)
    
    return res.status(statusCode).send(body)
})

module.exports = router