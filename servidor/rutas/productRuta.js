const express = require('express');

const ProductRouter = express.Router();
const ControladorProducts = require('./../controladores/productController');

ProductRouter.post('/api/new', ControladorProducts.createProduct);
ProductRouter.get('/api/allProducts', ControladorProducts.getAllProducts);
ProductRouter.get('/api/product/:id', ControladorProducts.getOneProduct);
ProductRouter.put('/api/product/:id', ControladorProducts.updateProduct);
ProductRouter.delete('/api/product/:id', ControladorProducts.deleteProduct);

module.exports = ProductRouter;