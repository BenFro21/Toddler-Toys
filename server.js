const express = require('express')
const app = express()



require('./config/db')





const toyRoutes = require('./routes/toyRoutes')


app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/toys', toyRoutes)



app.listen(8000, () =>{
    console.log('working on port 8000')
})