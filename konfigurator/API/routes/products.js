const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
let productsList = require("../common/consts/motherboard");
let cartList = [];

router.get("/", (req, res) => {
  res.status(200).json(
    productsList.map((product) => ({
      id: product.id,
      name: product.name,
      isFood: product.isFood,
    }))
  );
});

router.get("/cartList", (req, res) => {
  const plainList = cartList.filter(
    (value) => Object.keys(value).length !== 0
  );
  setTimeout(() => {
    res.status(200).json(
      plainList.map((product) => ({ id: product.id, name: product.name }))
    );
  }, 3000);
});

router.post("/cartList/new", jsonParser, (req, res) => {
  cartList.push(req.body);
  setTimeout(() => {
    res.status(200).json(req.body);
  }, 3000);
});

router.delete("/cartList/:cartListId", jsonParser, (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, 3000);
});

router.post("/new", jsonParser, (req, res) => {
  productsList.push(req.body);
  res.status(200).json(req.body);
});

router.get("/:id", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.productsToReturn);
  }, 2000);
});

router
  .route("/:id")
  .get((req, res) => {
    res.status(200).json(req.productsToReturn);
  })
  .put(jsonParser, (req, res) => {
    const idFromParams = req.params.id;
    const existingIndex = productsList.findIndex(
      (product) => product.id === idFromParams
    );
    productsList[existingIndex] = req.body;
    res.send(`Update get by id ${req.params.id}`);
  })
  .delete((req, res) => {
    if (req.productToDelete) {
      res.status(200).json(req.productToDelete);
      res.send(`HAS BEEN DELETED`);
    } else {
      res.status(404).json({ error: "Product not exist" });
    }
  });

router.param("id", (req, res, next, id) => {
  req.productsList = productsList;
  if (req.method === "GET") {
    req.productsToReturn = productsList.find((product) => product.id == id);
  }
  if (req.method === "DELETE") {
    req.productToDelete = productsList.find((product) => product.id == id);
    productsList = productsList.filter((product) => product.id !== id);
    req.productsList = productsList;
  }

  next();
});

router.param("cartListId", (req, res, next, id) => {
  req.cartList = cartList;
  if (req.method === "DELETE") {
    req.productToDelete = cartList.find((product) => product.id === id);
    cartList = cartList.filter((product) => product.id !== id);
    req.cartList = cartList;
  }

  next();
});

router.param("/new", (req, res, next, id) => {
  next();
});

module.exports = router;
