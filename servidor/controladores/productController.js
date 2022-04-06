const { response, request } = require('express');
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

const getAllProducts = (request,response) => {
    Product.find()
        .then( allProducts => {
            return response.status(200).json(allProducts);
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al cargar la lista de docuemtnos."
            return response.status(404).end();
        })
}

const getOneProduct = (request,response) => {
    const {id} = request.params;
    Product.findById(id)
        .then(product => {
            return response.status(200).json(product);
        })
        .catch(err => {
            console.log(err)
            return response.status(404).end();
        })
}

const updateProduct = (request,response) => {

    const {title,price,description} = request.body;
    const {id} = request.params;
    const productoActualizar = {title,price,description};

    Product.findByIdAndUpdate(id, {$set: productoActualizar} ,{new:true})
        .then( product => {
            return response.status(202).json(product);
        })
        .catch( err => {
            return response.status(404).end();
        })
}

const deleteProduct = (request,response) => {

    const {id} = request.params;

    Product.findByIdAndDelete(id)
        .then(deleteProduct => {
            return response.status(204).json(deleteProduct);
        })
        .catch( err => {
            return response.status(404).end();
        })

}

const ControladorProducts = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}

module.exports = ControladorProducts;