const express = require("express")
const { returnPurchaseReceipt } = require("../models/store")
const router = express.Router()
const Store = require("../models/store")

/** Get the store inventory */
router.get("/", async(req, res, next) => {
  try {
    const storeInventory = await Store.getStoreInventory()
    res.status(200).json({products: storeInventory})
  } catch(err) {
    next(err)
  }
})

/** Fetch single product */ 
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Store.fetchProductById(productId)
    if (!product) {
      throw new NotFoundError("Product not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})


/** Create new store item */
router.post("/newItem", async (req, res, next) => {
  try {
    const product = req.body.product
    const newProduct = await Store.recordProduct(product)
    res.status(201).json(newProduct)
  } catch (err) {
    next(err)
  }
})

/** Post the user's purchase */
router.post("/", async(req, res, next) => {
  try {
    const userInfo = req.body.userInfo
    const cart = req.body.cart
    const purchaseReceipt = await Store.returnPurchaseReceipt(userInfo, cart)
    res.status(200).json(purchaseReceipt)
  } catch(err) {
    next(err)
  }
})

module.exports = router
