const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


mongoose.connect('mongodb://localhost:27017/toddlerToys', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
})



const db = mongoose.connection

db.on('Connected', () => {
    console.log(`Connected to mongoDb at ${db.host}:${db.port }`)
})