const express = require('express')

const Posts = require('./posts-model')

const router = express.Router()



router.post('/', async (req, res) => {
    try {
        const posts = await Posts.insert(req.post);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "There was an error while saving the post to the database"
        })
    }
})



router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "The posts information could not be retrieved."
        })
        }
})



router.get('/:id', async (req, res) => {
    try {
        const posts = await Posts.findById(req.params.id);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The post information could not be retrieved.'
        })
    }
})



router.delete('/:id', async (req, res) => {
    try {
        const posts = await Posts.remove(req.params.id);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'The post could not be removed'
        })
    }
})




router.put('/:id', async (req, res) => {
    try {
        const posts = await Posts.update(req.params.id);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The post information could not be modified.'
        })
    }
})



module.exports = router