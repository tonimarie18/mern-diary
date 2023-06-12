import express from 'express'
import { 
    getAllPost,
    updatePost,
    getPost,
    deletePost,
    createPost } from '../controllers/postControllers.js'


const router = express.Router()



router.get('/', getAllPost)
router.get('/:id', getPost)
router.post('/', createPost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)

export default router