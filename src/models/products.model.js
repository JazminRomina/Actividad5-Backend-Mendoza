import mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    thumbnail: {type: String},
    code: {type: String, require: true, unique: true},
    stock: {type: Number, require: true},
    status: {type: Boolean, require: true},
    category: {type: String, require: true}
},
{
    versionKey: false
})

const productsModel = mongoose.model('products', productsSchema)

export default productsModel