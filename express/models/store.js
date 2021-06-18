const { BadRequestError, NotFoundError } = require("../utils/error")
const { storage } = require("../data/storage")

class Store {

  /** Returns the store inventory */
  static async getStoreInventory() {
    const storeInventory = storage.get("products").value()
    return storeInventory
  }

  /** Returns the user purchase receipt */
  static async returnPurchaseReceipt(userInfo, cart) {
    if (!userInfo) {
      return new BadRequestError("No user found to checkout with.")
    }
    if (!cart) {
      return new BadRequestError("No cart found to checkout.")
    }
    const products = await Store.getStoreInventory()
    var orderProducts = []
    var totalCost = 0
    // Loop through entries of the object array
    for (const [key, value] of Object.entries(cart)) {
      products.forEach((item, index) => {
        if (item.name == key) {
          orderProducts.push(item)
          // multiply the price by the quantity
          totalCost += (item.price * value)
        } else {
          if (index == products.length) {
            return new BadRequestError(`No item ${key} in our inventory`)
          }
        }
      })
    }
    totalCost = parseFloat(totalCost).toFixed(2)
    const newOrder = { name: userInfo.name, email: userInfo.email, total: totalCost, receipt: {userinfo: userInfo}, productRpws: orderProducts}
    storage.get("orders").push(newOrder).write()
    return newOrder
  }

  /** Create a new product in store */
  static async recordProduct(product) {
    if (!product) {
      throw new BadRequestError(`No product sent.`)
    }
    const requiredFields = ["name", "category", "image", "source", "description", "price"]
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`)
      }
    })

    const products = await Store.getStoreInventory()
    const productId = products.length + 1
    const newProduct = { id: productId, ...product}

    storage.get("products").push(newProduct).write()
    return newProduct
  }

  /** Fetch a single product */ 
  static async fetchProductById(productId) {
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value()
    return product
  }

}

module.exports = Store