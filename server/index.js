require('dotenv').config()
const express = require('express')
const next = require('next')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const axios = require('axios')

app
    .prepare()
    .then(() => {
        const server = express()
        axios.defaults.baseURL = process.env.API_HOST

        server.use('/api', require('./apiRoutes'))

        server.get('/', (req, res) => {
            console.log('home')
            app.render(req, res, '/index')
        })

        server.get('/items', (req, res) => {
            const { q } = req.query
            if (q)
                app.render(req, res, '/searchResult', { q })
            else
                res.redirect('/')

        })

        server.get('/items/:id', (req, res) => {
            console.log('product detail', req.params.id)
            app.render(req, res, '/productDetail', { id: req.params.id })
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, err => {
            if (err) throw err;
            console.log(`ready at ${process.env.API_HOST}`)
        })
    })