const Toy = require('../models/toyModel')


let showAll = (req,res) => {
    Toy.find({}, (err, toys) => {
        if(err){
            res.status(400).json(err)
            return
        }
        console.log('show all ran')
        res.json(toys)
    })
   
}

let create = (req,res) => {
    Toy.create(req.body, (err, toy) => {
        if(err){
            res.status(400).json(err)
            return
        }
        console.log('create ran')
        toy.save()
        res.json(toy)
    })
}

let getOne = (req,res) => {
    Toy.findById(req.params.id, (err, toy) => {
        if(err){
            res.status(400).json(err)
            return
        }
        console.log('getOne ran')
        res.json(toy)
    })
}

let update = (req,res) => {
    Toy.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,toy) => {
        if(err){
            res.status(400).json(err)
            return
        }
        console.log('update ran')
        toy.save()
        res.json(toy)
    })
}

let deleteIt = (req, res) => {
    Toy.findByIdAndDelete(req.params.id, (err, toy) => {
        if(err){
            res.status(400).json(err)
            return
        }
        console.log('delete ran')
        res.json('deleted toy')
    })
}



module.exports = {
    showAll,
    create, 
    getOne,
    update,
    deleteIt
}