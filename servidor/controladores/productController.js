const { response } = require('express');
const Product = require('./../modelos/productModel');

const createProduct = (request,response) => {
    const {title,price,description} = request.body;
    const newProduct = {title,price,description};

    Product.create(newProduct)
        .then( newProduct => {
            return response.status(201).json(newProduct);
        })
        .catch( err => {
            response.status.message = "Hubo un error al ejecutar el inset."
            return response.status(404).end();
        });
}

const ControladorProducts = {
    createProduct
}

module.exports = ControladorProducts;