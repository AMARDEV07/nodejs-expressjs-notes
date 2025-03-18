

const express = require('express')
const blog = require('./routes/blog')


const app = express()
const port = 3000

//post  request marna ka liya hm statioc file create lrya h
app.use(express.static("public"))

//ROUTING KA LIYA BLOG FILE KA LIYA STATIC KA USE KEY
app.use('/blog',blog)

app.get('/', (req, res) => {
    console.log("get request ha")
    res.send('Hello World get!')
})
//post request
app.post('/', (req, res) => {
    console.log("post request ha")
    res.send('Hello Worldpost!')
})
//PUT REQUEST
app.put('/', (req, res) => {
    console.log("PUT request ha")
    res.send('Hello World PUT REQUEST!')
})



//serving html file
app.get('/index', (req, res) => {
    console.log("get request ha")
    res.sendFile('templates/index.html',{root:__dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

