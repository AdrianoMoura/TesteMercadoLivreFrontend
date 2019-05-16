const express = require('express')
const next = require('next')
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.use('/api', require('./routes'))

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(PORT, err => {
            if (err) throw err;
            console.log(`ready at http://localhost:${PORT}`)
        })
    })