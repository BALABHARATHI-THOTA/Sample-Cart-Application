const Product = require('../models/products')
const Category = require('../models/categories')
const CreateProducts = [
    {
        name: "Product A",
        description: "Product A desc",
        isactive: true,
        image_url: './images/cart_image.png'
    },
    {
        name: "Product B",
        description: "Product B desc",
        isactive: true,
        image_url: './images/cart_image.png'
    }
]


async function init(){
        const data = await Category.findOne();
        const ProductsWithCategoryId =  CreateProducts.map(d=>{
            d.categoryId = data.id;
            return d;
        })
        await Product.deleteMany();
        await Product.insertMany(ProductsWithCategoryId);

}

module.exports = init;