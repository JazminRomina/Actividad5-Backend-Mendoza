import express from 'express'
import cartsModel from '../models/carts.model.js'
import {CartManager} from '../controllers/CartManager.js'

const router = express.Router()
const cartManager = new CartManager()

router.post('/', async(req, res) => {
    try{
        const cart = await cartsModel.create({
            products: []
        })
        res.send({message: 'There is a new cart', cart})
    }
    catch(error){
        res.status(500).json({error: 'ID Not found.'})
    }
})

router.get('/:id', async(req, res) => {
    let id = req.params.id
    try{
        const cartFound = await cartsModel.find({_id: id})
        res.json(cartFound)
    }
    catch(error){
        res.status(500).json('There is an error in the server.')
    }
})

router.post('/:cid/product/:pid', async(req, res) => {
    try{
    let cid = req.params.cid
    let pid = req.params.pid
    await cartManager.addProductToTheCart(cid, pid)
    res.send('Producto agregado')
    }
    catch(error){
        res.status(500).json('There is an error in the server.')
    }
})

export default router