

# 🌟 Node.js + Express.js Developer Guide

Welcome to the ultimate beginner-to-pro guide for building backend apps using **Node.js**, **CommonJS**, **ESModules**, **fs module**, and **Express.js**! 🚀



## 📦 NPM & Module System Basics

### ✅ Common NPM Commands
| Command | Description |
|--------|-------------|
| `npm init` | Initializes a new Node.js project |
| `npm i <module>` | Installs a module locally |
| `npm i -g nodemon` | Installs nodemon globally (auto-restart server) |

### ✅ Module Systems in Node.js

**CommonJS (CJS)**:
```js
// Import
const fs = require('fs');

// Export
module.exports = { name: "Aman" };
ESModules (ESM):

js
Copy
Edit
// Export
export const a = 10;
export default function greet() {}

// Import
import { a } from './file.js';
import greet from './file.js';
ℹ️ Use "type": "module" in package.json to enable ESM.

🌐 Creating a Server
🛠️ Using CommonJS
js
Copy
Edit
const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World 🌎");
});

server.listen(3000, () => console.log("Server running on port 3000 🚀"));
🚀 Using ESModule
js
Copy
Edit
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World 🌎");
});

server.listen(3000, () => console.log("Server running on port 3000 🚀"));
📁 File System (fs) Module
🧱 Synchronous
js
Copy
Edit
const fs = require('fs');
fs.writeFileSync("file.txt", "Hello Aman!");
🧱 Asynchronous
js
Copy
Edit
fs.writeFile("file.txt", "Async Hello!", () => {
  console.log("File written asynchronously");
});
🔄 Using fs/promises with Async/Await
js
Copy
Edit
import fs from 'fs/promises';

async function readFile() {
  const data = await fs.readFile("file.txt");
  console.log(data.toString());
}
readFile();
🧭 Path Module
js
Copy
Edit
const path = require('path');
console.log(__dirname); // Current directory
⚡ Express.js Basics
🔹 Install Express
bash
Copy
Edit
npm i express
🔹 Setup a Server
js
Copy
Edit
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, Express.js!'));

app.listen(3000, () => console.log("Express server running on http://localhost:3000"));
📥 GET vs POST Requests
Feature	GET	POST
URL Data	✅	❌
Secure	❌	✅
Usage	Fetching	Submitting (e.g., forms)
🧪 Handling POST Requests
Step 1: Serve static files

js
Copy
Edit
app.use(express.static('public'));
Step 2: HTML file (public/index.html)

html
Copy
Edit
<script>
  fetch("/", { method: "POST" })
    .then(res => res.text())
    .then(console.log);
</script>
Step 3: Handle POST on server

js
Copy
Edit
app.post("/", (req, res) => {
  res.send("Received a POST request");
});
💡 Use Postman for testing APIs.

🔁 Route Chaining
js
Copy
Edit
app.route('/')
  .get((req, res) => res.send("GET"))
  .post((req, res) => res.send("POST"))
  .put((req, res) => res.send("PUT"))
  .delete((req, res) => res.send("DELETE"));
🌍 Params & Queries
🔹 Params
js
Copy
Edit
app.get('/blog/:slug/:category', (req, res) => {
  res.send(`Slug: ${req.params.slug}, Category: ${req.params.category}`);
});
🔹 Query Strings
js
Copy
Edit
app.get('/search', (req, res) => {
  res.send(`Search Mode: ${req.query.mode}, Region: ${req.query.region}`);
});
Example URL:
/blog/js/webdev?mode=dark&region=in

🗂️ Serve Static Files
js
Copy
Edit
app.use(express.static('public'));
// Access via: http://localhost:3000/image.png
📁 Express Router
routes/blog.js

js
Copy
Edit
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Blog Home Page'));
router.get('/about', (req, res) => res.send('About the Blog'));
router.get('/post/:slug', (req, res) => res.send(`Blog: ${req.params.slug}`));

module.exports = router;
server.js

js
Copy
Edit
const blogRoutes = require('./routes/blog');
app.use('/blog', blogRoutes);
🧩 Express Middleware
🔹 Logger Middleware
js
Copy
Edit
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
app.use(logger);
🔐 Authentication Middleware
js
Copy
Edit
const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token === 'my-secret-token') next();
  else res.status(401).send("Unauthorized");
};
app.use('/secure', auth);
🛠 Error-Handling Middleware
js
Copy
Edit
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

