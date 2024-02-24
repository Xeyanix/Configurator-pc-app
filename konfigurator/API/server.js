const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const logger = (req, res, next) => {
    console.log('URL: ', req.originalUrl);
    next();
}
app.use(logger);

app.set('view engine', 'ejs');

const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
