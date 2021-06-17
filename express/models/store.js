const { BadRequestError, NotFoundError } = require("../utils/error")
const { storage } = require("../data/storage")

const purchaseReceipt = {
  "purchase": {
    "name": "",
    "email": "",
    "total": "",
    "receipt": {
      "userInfo": {

      },
    },
    "lines": "",
    "productRows": [

    ],
  }
}


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
    purchaseReceipt.receipt.userInfo = userInfo
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

}

module.exports = Store