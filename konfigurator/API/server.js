const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const logger = (req, res, next) => {
    console.log('URL: ', req.originalUrl);
    next();
};

app.set('view engine', 'ejs');
app.use(logger);

const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);

const PORT = process.env.PORT || 9000;

// Sprawdź, czy port jest zajęty, jeśli tak, użyj innego
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Obsługa błędu EADDRINUSE
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Trying another port...`);
        server.listen(0); // Używa losowego wolnego portu
    } else {
        console.error('Server error:', err);
    }
});
