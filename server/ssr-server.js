const express = require('express')
const next = require('next')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect('mongodb+srv://hakeem1106:Autumn1106@testclust-w12h6.mongodb.net/UserName?retryWrites=true',{useNewUrlParser:true})

const db =mongoose.connection;

app.prepare()
.then(() => {
    const server = express()

    server.get('/', (req, res)=>{
        return handle(req, res)
    })

    server.listen(3000, (err) =>{
        if (err) throw err
        console.log('> Ready on 3000')
    })
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
})




.catch((ex) =>{
    console.error(ex.stack)
    process.exit(1)
})

