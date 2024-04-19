import express from 'express'
import productsModel from '../models/products.model.js'
import { ProductManager } from '../controllers/ProductManager.js'
const router = express.Router()
const products = new ProductManager()

router.get('/', async(req, res) => {
    const allProds = await productsModel.find().lean()
    res.render("home", {prods: allProds})
})

router.get('/realtimeproducts', async(req, res) => {
    const allProds = await productsModel.find().lean()
    res.render("realTimeProducts", {prods: allProds})
})

router.get('/chat', async (req, res) => {
    res.render("chat")
})

export default router