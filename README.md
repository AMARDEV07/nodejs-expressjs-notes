

# 🌟 Node.js + Express.js Developer Guide

Welcome to the ultimate beginner-to-pro guide for building backend apps using **Node.js**, **CommonJS**, **ESModules**, **fs module**, and **Express.js**! 🚀



## 📦 NPM & Module System Basics

### ✅ Common NPM Commands
| Command | Description |
|--------|-------------|
| `npm init` | Initializes a new Node.js project |
| `npm i <module>` | Installs a module locally |
| `npm i -g nodemon` | Installs nodemon globally (auto-restart server) |



✅ Module Systems in Node.js
---------------------------------------------------------------------------------

### 1) CommonJS (CJS):

// Import
const fs = require('fs');

// Export
module.exports = { name: "Aman" };


### 2)ESModules (ESM):



// Export

export const a = 10;
export default function greet() {}

// Import
import { a } from './file.js';

import greet from './file.js';

-----------------------------------------------------------------------

### ℹ️ Use "type": "module" in package.json to enable ESM.

-------------------------------------------------
# 🌐 Creating a Server:

### 1🛠️ Using CommonJS


const { createServer } = require('node:http');//header

const server = createServer((req, res) => { 
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");//content type like jsno h plane text h html type h etc
  res.end("Hello World 🌎");
});

server.listen(3000, () =>
console.log("Server running on port 3000 🚀"));



### 2🚀 Using ESModule

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World 🌎");
});

server.listen(3000, () => console.log("Server running on port 3000 🚀"));



---------------------------------------------------------------------------------------
# 📁 File System (fs) Module
The `fs` module in Node.js allows you to interact with the file system (read, write, update, delete files). It's a **core module**, so you don't need to install it separately.




### 🧱 Synchronous

const fs = require('fs');



// Write to a file (overwrites if file exists)
fs.writeFileSync("file.txt", "Hello Aman!");

// Read from a file
const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

// Append to a file
fs.appendFileSync("file.txt", "\nAppended Line");

// Delete a file
fs.unlinkSync("file.txt");

### 🧱 Asynchronous

fs.writeFile("file.txt", "Async Hello!", () => {
  console.log("File written asynchronously");
});
----------------------------------------------------------------------


### 🔄 Using fs/promises with Async/Await

import fs from 'fs/promises';

async function readFile() {
  const data = await fs.readFile("file.txt");
  console.log(data.toString());
}
readFile();

--------------------------------------------------------------
# 🧭Path Module
The `path` module in Node.js provides utilities for working with **file and directory paths**. It's a **core module**, so you don’t need to install it.


const path = require('path');
console.log(__dirname); // Current directory



-----------------------------------------------------------------------------------

# ⚡ Express.js Basics

### 🔹 Install Express:

npm i express
----------------------------

### 🔹 Setup a Server

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, Express.js!'));

app.listen(3000, () => console.log("Express server running on http://localhost:3000"));
---------------------------------------------------------------------

#📥 GET vs POST Requests
--------------------------------
Feature	GET	POST
URL Data	✅	❌
Secure	❌	✅
Usage	Fetching	Submitting (e.g., forms)

------------------------------------------------------------
# 🧪 Handling POST Requests

Step 1: Serve static files

app.use(express.static('public'));

Step 2: HTML file (public/index.html)

<script>
  fetch("/", { method: "POST" })
    .then(res => res.text())
    .then(console.log);
</script>

Step 3: Handle POST on server


app.post("/", (req, res) => {
  res.send("Received a POST request");
});

-----------------------------------------------------------------
💡3## Use Postman for testing APIs.
--------------------------------------------------------------
##🔁 Route Chaining

app.route('/')
  .get((req, res) => res.send("GET"))
  .post((req, res) => res.send("POST"))
  .put((req, res) => res.send("PUT"))
  .delete((req, res) => res.send("DELETE"));
-------------------------------------------------------------------------
###🌍 Params & Queries

->🔹 Params

app.get('/blog/:slug/:category', (req, res) => {
  res.send(`Slug: ${req.params.slug}, Category: ${req.params.category}`);
});

->🔹 Query Strings

app.get('/search', (req, res) => {
  res.send(`Search Mode: ${req.query.mode}, Region: ${req.query.region}`);
});

Example URL:
/blog/js/webdev?mode=dark&region=in
-----------------------------------------------------------
🗂️ ###Serve Static Files

app.use(express.static('public'));
// Access via: http://localhost:3000/image.png
----------------------------------------------------------
📁### Express Router

routes/blog.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Blog Home Page'));
router.get('/about', (req, res) => res.send('About the Blog'));
router.get('/post/:slug', (req, res) => res.send(`Blog: ${req.params.slug}`));

module.exports = router;

server.js

const blogRoutes = require('./routes/blog');
app.use('/blog', blogRoutes);


-----------------------------------------------------------------------------
# 🧩 Express Middleware

# 🔹 1) Logger Middleware
logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

# 🔐 2) Authentication Middleware

const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'my-secret-token') next();
  else res.status(401).send("Unauthorized");
};
app.use('/secure', auth);


# 🛠 3) Error-Handling Middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

✅ Best Practices
✅ Use nodemon for development.

✅ Organize routes in separate files.

✅ Serve static assets from public/.

✅ Use req.params and req.query correctly.

✅ Add middleware for logging, security, and error-handling.

🔚 Final Thoughts
Node.js + Express.js = Power combo 💥

Modularize code with routers and middleware.

Use fs, path, and other core modules for efficient file management.

Build APIs like a pro with clean, maintainable code.
https://chatgpt.com/share/67fd614b-cab8-800e-94ce-33ea2d47d4db
