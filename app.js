const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ProductsGroupsDB'
const groupRouter = require('./routers/groups')
const productRouter = require('./routers/products');

const app = express()


app.use(express.json())
app.use('/groups',groupRouter)
app.use('/products',productRouter)

app.listen(3000, () => {
    mongoose.connect(url, {useNewUrlParser:true})
    const con = mongoose.connection
    con.on('open', () => {
    console.log("connected to the DB");
})
    console.log("server listening to 3000....")
})