const express = require('express');
const app = express();
const cors = require('cors');
require('./servidor/config/config')

const ProductRouter = require('./servidor/rutas/productRuta');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use('',ProductRouter);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});