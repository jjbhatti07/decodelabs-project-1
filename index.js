const express = require('express');
const app = express();
const PORT = 3000;

// Middleware — lets Express read JSON from POST requests
app.use(express.json());

// ============================
// Sample in-memory data
// ============================
let products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 49 },
    { id: 2, name: "RAM", price: 55 },
    { id: 3, name: "Monitor", price: 573 }
];

// ============================
// ROUTES
// ============================

// Health check — always good to have
app.get('/', (req, res) => {
    res.status(200).json({ status: "ok", message: "Server is running!" });
});

// GET all products
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

// GET a single product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
});

// POST — create a new product
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    // Basic validation
    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);
    res.status(201).json(newProduct); // 201 = Created
});

// ============================
// START SERVER
// ============================
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
