const express = require('express');

const ProductRouter = express.Router();
const ControladorProducts = require('./../controladores/productController');

ProductRouter.post('/api/new', ControladorProducts.createProduct);

module.exports = ProductRouter;