const express = require('express')
const mongoose = require('mongoose')

const userRouter = require('./routes/users')
const fakeRouter = require('./routes/faker')

const auth = require('./middleware/auth')
const configure = require('./middleware/config')

const server = express()

configure(server)

mongoose.connect(process.env.MONGO || 'mongodb://localhost:27017/bw4', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

server.use('/api/users', userRouter)
//server.use('/api/faker', auth, fakeRouter)

server.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})

module.exports = server