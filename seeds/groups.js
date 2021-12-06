
const { model } = require('mongoose');
const Group = require('../models/group.js')

const CreateGroups = [
    {
        name: "Gym wear",
        description: "Gym realted accessories",
        isactive: true
    },
    {
        name: "gadgets",
        description: "Modern accessories",
        isactive: true
    }
]


async function init(){
        await Group.deleteMany();
        await Group.insertMany(CreateGroups);
}

module.exports = init;