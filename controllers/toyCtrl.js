const Toy = require('../models/toyModel')


let showAll = (req,res) => {
    Toy.find({})
    if(err){
        res.status(400).json(err)
        return
    }
    res.json()
}