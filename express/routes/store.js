const express = require("express")
const { returnPurchaseReceipt } = require("../models/store")
const router = express.Router()
const store = require("../models/store")

router.get("/", async(req, res, next) => {
  try {
    const storeInventory = await store.getStoreInventory()
    res.status(200).json(storeInventory)
  } catch(err) {
    next(err)
  }
})

router.post("/", async(req, res, next) => {
  try {
    const userInfo = req.body.userInfo
    const cart = req.body.cart
    const puchaseReceipt = await store.returnPurchaseReceipt(userInfo, cart)
    res.status(200).json(purchaseReceipt)
  } catch(err) {
    next(err)
  }
})

module.exports = router
