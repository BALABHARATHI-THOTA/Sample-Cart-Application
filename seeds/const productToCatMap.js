const productToCatMap = {}; 
const groupId = req.params.id;
const products = await Products.find({})
for(const p of products){ 
  productToCatMap[p.categoryId] = p
}
const categoryIds = products.map(d=>d._id);
const category  = await Category.find({ id: { $in:categoryIds  } })
const categoryHavingGroupId = category.filter(d=>d.groupId == groupId).map(d=>{
  if(productToCatMap[d._id]){
    const {name, description} =productToCatMap[d._id]; 
    return {name, description} 
  }
})
.filter(d=>d);

res.json(products)