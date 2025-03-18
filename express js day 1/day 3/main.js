

const express = require('express')
const app = express()
const port = 3000
const blog=require('./routes/blog')

// // acustome middele were 
// const loogermiddele=(req,res,next)=>{
//     res.send(`${new Date().toDateString()},${req.method},${req.url}`)

// };
// app.use(loogermiddele)

//new only custom file handler;
app.use('/blog',blog)


app.get('/time', (req, res) => {
  res.send('today we learn about midlee weare!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

