const data = require("./data.js")
const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const path = require("path")
app.use(express.static("public"))

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")

app.get("/", (req, res) => {
  res.render("todo", data)
})

app.get("/people/:id", (req, res) => {
  const getId = parseInt(req.params.id)
  const oneUser = data.users.find(user => user.id === getId)
  res.render("people", oneUser)
})

app.listen(3000, () => {
  console.log("listening")
})
