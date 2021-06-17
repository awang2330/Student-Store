const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const storeRouter = require("./routes/store")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/store", storeRouter)

app.get("/", async(req, res, next) => {
  res.status(200).json()
})

const port = 3001

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})