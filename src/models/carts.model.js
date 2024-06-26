import mongoose from "mongoose"

const cartsSchema = new mongoose.Schema({
    products: {
        type: [{
            _id: false,
            product: mongoose.ObjectId,
            quantity: Number
        }],
        default: []
    }
},
{
    versionKey: false
})
const cartsModel = mongoose.model('carts', cartsSchema)

export default cartsModel