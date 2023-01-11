const express = require('express')
const app = express()



require('./config/db')



app.listen(8000, () =>{
    console.log('working on port 8000')
})