const express = require('express')
const app = express()
const port = 5000
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://seowon:cj1219@cluster0.asaxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true, useUnifiedTopology:true}).then(()=> console.log('MongoDB connected..')).catch(err=> console.log('error'))

app.get('/', (req, res) => {
  res.send('hello wordksld')
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})
