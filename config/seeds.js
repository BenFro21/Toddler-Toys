require('./db')
const Toy = require('../models/toyModel')
const toys = require('./seeds.json')


Toy.deleteMany({})
.then(() => {
    return Toy.insertMany(toys)
})
.then((insertedToys) => {
    console.log(insertedToys)
})
.catch(err => console.error(err))
.finally(() => {
    process.exit()
})