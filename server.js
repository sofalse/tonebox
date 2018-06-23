'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use('/', express.static('dist'))

app.listen(PORT, () => {
    console.info(`Listening on ${PORT}`)
})
