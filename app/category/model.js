const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const categorySchema = Schema({
    name : {
        type: String,
        required: [true, "nama kategori harus diisi"],
        minlength: [3,"panjang nama kategori minimal 3 karakter"],
        maxlength: [20,"panjang nama kategori minimal 20 karakter"]
       
    },
    
});

module.exports = model("Category", categorySchema);