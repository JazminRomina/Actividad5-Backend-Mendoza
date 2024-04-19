import cartsModel from "../models/carts.model.js"
import productsModel from "../models/products.model.js"

export class CartManager{
    addProductToTheCart = async(cid, pid) => {
        let cartIdInDB = await cartsModel.findById(cid)
        let productIdInDB = await productsModel.findById(pid)
        if(!cartIdInDB){
            return 'Cart not found'
        }
        if(!productIdInDB){
            return 'Product not found'
        }
        const productIndex = cartIdInDB.products.findIndex((p) => p.product.toString() === pid)
        if(productIndex !== -1){
            cartIdInDB.products[productIndex].quantity += 1
        }
        else{
            cartIdInDB.products.push({
                product: pid,
                quantity: 1
            })
        }
        await cartIdInDB.save()
    }
}