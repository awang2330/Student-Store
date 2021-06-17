const { badRequestError, NotFoundError } = require("../utils/error")

const storeInventory = {
  "products": [
    {
      "id": 1,
      "name": "Rice Krispies",
      "category": "food",
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg",
      "source": "https://en.wikipedia.org/wiki/Rice_Krispies_Treats",
      "description": "Delicious corn-based rice grains melted together with marshmallows into a square-like shape.",
      "price": 0.99
    },
    {
      "id": 2,
      "name": "Flamin Hot Cheetos",
      "category": "food",
      "image": "https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg",
      "source": "https://world.openfoodfacts.org/cgi/product_image.pl?code=8964000090879&id=front_en",
      "description": "No one knows what's in the powder that covers these snacks, but wow is it amazing!",
      "price": 1.5
    }
  ]
}

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


class store {
  static async getStoreInventory() {
    return storeInventory
  }

  static async returnPurchaseReceipt(userInfo, cart) {
    if (!userInfo) {
      return new badRequestError("No user found to checkout with.")
    }
    if (!cart) {
      return new badRequestError("No cart found to checkout.")
    }
    purchaseReceipt.receipt.userInfo = userInfo
  }
}

module.exports = store