const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ProductsGroupsDB'
const [GroupSeed,CategorySeed,ProductSeed] = [require('./groups'),require('./categories'),require('./products')]
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log("connected....")
})

async function initAllSeeds(){
    await GroupSeed();
    await CategorySeed();
    await ProductSeed();
    await mongoose.connection.close();
}

initAllSeeds().then(()=>{
    console.log(`con success`)
})