

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.put or app.post....app.delet(path,handler)
app.get('/blog', (req, res) => {
  res.send('hello intro to js')
})
//)request parameter and query
//create pages..
//go in url put local host 3000 blog then it print res.send value...

// app.get('/blog', (req, res) => {
//     res.send('Hello World2!')
//   })
//   app.get('/contact', (req, res) => {
//     res.send('Hello World2!')
//   })
//   app.get('/about us', (req, res) => {
//     res.send('Hello World2!')
//   })


//now use easy meathod by using parameter and get query use back tick..:slug


app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch slug form db you caon gove 2nd paramtyer hear
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
