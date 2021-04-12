const express = require("express")
const app = express()
const morgan = require("morgan")

const yolo = 9001

app.use(express.json())
app.use(morgan("dev"))

app.put("/calculator/add/:num1/:num2", (request, response) => {
    // You can use the unary plus operator, i.e. const sum = +request.params.num1 + +request.params.num2, but for readability we'll do something else:
    const sum = Number(request.params.num1) + Number(request.params.num2)
    response.send(sum.toString())
})
app.put("/calculator/subtract/:num1/:num2", (request, response) => {
    const difference = Number(request.params.num1) - Number(request.params.num2)
    response.send(difference.toString())
})
app.put("/calculator/multiply/:num1/:num2", (request, response) => {
    const product = Number(request.params.num1) * Number(request.params.num2)
    response.send(product.toString())
})
app.put("/calculator/divide/:num1/:num2", (request, response) => {
    const quotient = Number(request.params.num1) / Number(request.params.num2)
    response.send(quotient.toString())
})

//router parameters

app.listen(yolo, () => {
    console.log(`The server is running on port ${yolo}`)
})