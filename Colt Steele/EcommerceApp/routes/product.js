const express = require('express');
const productRepo = require('../repository/products');
const productsTemplate = require('../views/products/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await productRepo.getAll(); 
    res.send(productsTemplate({products}));
});

module.exports = router;