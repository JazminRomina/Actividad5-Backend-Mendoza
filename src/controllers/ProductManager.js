import productsModel from "../models/products.model.js"

export class ProductManager{
    addProducts = async(data) => {
        const product = new productsModel(data)
        await product.save()
    }

    deleteProduct = async(id) => {
        return await productsModel.findByIdAndDelete(id)
    }

    findProductByCode = async(code) => {
        const codeProd = await productsModel.findOne({code: code})
        return codeProd
    }
}