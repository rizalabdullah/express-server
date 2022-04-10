const mongoose = require(`mongoose`);
const {model, Schema} = mongoose;

const productSchema = Schema({
    name : {
        type: String,
        required: [true, `nama makanan harus diisi`],
        minlength: [3,`panjang nama makanan minimal 3 karakter`]
       
    },
    description : {
        type : String,
        maxlength: [1000,`panjang description maximal 1000 karakter`]
       
    },
    price : {
        type: Number,
        default: 0
    },   
    image_url : String,

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    tags: {
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }


    
}, { timestamps: true}
);

module.exports = model(`Product`, productSchema);