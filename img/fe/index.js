const express = require('express');
const app = express();
const port = 3000;

const product = [{
    id: 2,
    name: "name",
    price: 10,
    Image: "img/product-2.jpg",
    stock: 10,
}, {
    id: 3,
    name: "name",
    price: 20,
    Image: "img/product-3.jpg",
    stock: 20,
}, {
    id: 4,
    name: "name",
    price: 18,
    Image: "img/product-4.jpg",
    stock: 18,
}, {
    id: 5,
    name: "name",
    price: 26,
    Image: "img/product-5.jpg",
    stock: 26,
}, {
    id: 6,
    name: "name",
    price: 20,
    Image: "img/product-6.jpg",
    stock: 20,
}, {
    id: 1,
    name: "name",
    price: 24,
    Image: "img/product-1.jpg",
    stock: 24,
}, ];

app.get("/api/products", (req, res) => {
    res.send(products);
});

app.use("/", express.static("/fe"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});