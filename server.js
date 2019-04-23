const express = require('express')

const postRouter = require('./posts/posts-router.js')

const Posts = require('./posts/posts-model.js')


const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`
    <h2>Blog API</h2>
    <p>Welcome to the Blog</p>
    `)
})

server.use('/api/posts', postRouter)


module.exports = server