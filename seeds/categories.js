const Categories = require('../models/categories');
const Group = require('../models/group.js');

const CreateGroups = [
    {
        name: "Cata A",
        description: "Cata A desc",
        isactive: true
    },
    {
        name: "Cata B",
        description: "Cata B desc",
        isactive: true
    }
]


async function init(){
        const data = await Group.findOne({});
        const CategoriesWithGroupId = CreateGroups.map(d=>{
            d.groupId = data.id;
            return d;
        })
        await Categories.deleteMany({});
        await Categories.insertMany(CategoriesWithGroupId);
    
}

module.exports = init;