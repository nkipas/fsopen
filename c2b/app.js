const express = require('express')
const cors = require('cors')
const router = require('./ctrls/notes')
const mw = require('./utils/middle')
const mng = require('mongoose')
const config = require('./utils/config')
const { info, err } = require('./utils/logger')

const app = express()
mng.set('strictQuery', false)


info('connecting to', config.MONGODB_URI)
mng.connect(config.MONGODB_URI).then(() => {
    info('connected!')
}).catch((e) => { err('error connecting: ', e.message) })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(mw.qlogger)
app.use('/api/notes', router)
app.use(mw.unknownEP)
app.use(mw.ehandler)

module.exports = app
