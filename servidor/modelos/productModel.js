const mongoose = require('mongoose');
const SchemaProduct = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });

const Product = mongoose.model('productos',SchemaProduct);
module.exports = Product;
