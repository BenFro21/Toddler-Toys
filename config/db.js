const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
// 'mongodb+srv://benfro21:123Benjamin1257@cocktails.w9p5zuu.mongodb.net/cocktails?retryWrites=true&w=majority'

mongoose.connect('mongodb://localhost:27017/toddler_toys', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})