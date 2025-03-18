console.log(" type of import node modules ecmascprit vs commjs")

// 1)using requierd cjs

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//using require we import node modules..
// it is type 1 to import node modules using common js



//---------------------------------------

// type 2;- using ecmascprit using import

// when we use 2nd then first we go jsno and add tpe module
// then we can use required for import module means type 2 ma hm required ka use nahi kar sakta


import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// TYPE OF EXPORT/import//---------------------------------------------------------------------------------


//->//1) NAMED
// import{a,b} from "./mymodule.js"
// console.log(a,b);





//name ma { }use hoga value import krna ka liya 
//..............................................................

//2)DEFAULT
//nut isma kux nhi shida
// import obj from "./mymodule.js"
// console.log(obj);



//------------------------------------------------------------
// if u want export modeule using requierd
let a=require("./mymodeule2.js")
console.log(a);

