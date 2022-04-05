const express = require('express');

const ProductRouter = express.Router();
const ControladorProducts = require('./../controladores/productController');

ProductRouter.post('/api/new', ControladorProducts.createProduct);
ProductRouter.get('/api/allProducts', ControladorProducts.getAllProducts);
ProductRouter.get('/api/product/:id', ControladorProducts.getOneProduct);

module.exports = ProductRouter;