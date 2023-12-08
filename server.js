const express = require('express')
const expressHandlebars = require("express-handlebars")

const app = express()
const PORT = process.env.PORT || 3000

app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(express.static('static'))

app.listen(PORT, function () {
    console.log("== Server is listening on port", PORT)
})