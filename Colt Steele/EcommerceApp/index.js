const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admn/auth');
const adminProductRouter = require('./routes/admn/products');
const productRouter = require('./routes/product');
const cartsRouter = require('./routes/cart');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cookieSession({
    keys: ['rb5vm8zhn2c']
}));

app.use(authRouter);
app.use(productRouter);
app.use(adminProductRouter);
app.use(cartsRouter);

app.listen(3000, () => {
    console.log('listening');
})