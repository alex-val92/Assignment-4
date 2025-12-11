const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const products = [
    {id: 1, name: "Bouquet 1", image:'c:\Users\aval0\Downloads\pexels-secret-garden-333350-931147 (1).jpg', price: 29.99, description: "A beautiful bouquet of flowers, fall special."},
    {id: 2, name: "Bouquet 2", image:'c:\Users\aval0\Downloads\images.jpg', price: 39.99, description: "A vibrant red bouquet perfect for any occasion."},
    {id: 3, name: "Bouquet 3", image:'c:\Users\aval0\Downloads\pexels-pixabay-35600.jpg', price: 24.99, description: "A cheerful yellow bouquet to brighten your day."},
    {id: 4, name: "Bouquet 4", image:'c:\Users\aval0\Downloads\images (1).jpg', price: 34.99, description: "A mixed bouquet with a variety of purple and white flowers."},
];
let selectedProduct = null;

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/select-product', (req, res) => {
    const productId = req.body.id;
    selectedProduct = products.find(p => p.id === productId);

    if (selectedProduct) {
        res.json({message: "Product selected", product: selectedProduct});
    }else{
        res.status(404).json({message: "Product not found"});
    }
});

app.post('/api/submit-order', (req, res) => {
    const orderDetails = req.body;
    console.log('Order Confirmed:', orderDetails);

    selectedProduct = null;

    res.json({ message: "Your item will be delivered." });
});
app.listen(port, () => {
    console.log('Backend server is running on http://localhost:' + port);
});