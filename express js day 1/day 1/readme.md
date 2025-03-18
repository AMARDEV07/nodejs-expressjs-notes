Express.js Guide & Setup 🚀
about pramater,query,static file,middware

📌 Why Use Express.js?
Express.js is a fast and lightweight Node.js framework that simplifies handling GET and POST requests. The default HTTP module in Node.js has limitations in managing multiple requests efficiently, making Express a preferred choice.

📌 Installing Express.js
1️⃣ Install Express.js (Latest Version)

npm i express


2️⃣ Install an Older Version (v4)
npm i express@4



📌 Why Use Nodemon?
Nodemon automatically restarts your server whenever you make changes, improving development efficiency.

🔹 Install Nodemon (Globally)
npm i -g nodemon


🔹 Run the Server with Nodemon
nodemon main.js


📌 Handling Requests in Express.js

🚀 Basic GET Request Example

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

------------------------------------------------------------------------------------------------
📌 Request Parameters & Query Strings

🔹 Method 1: Creating Separate Routes (Not Recommended for Many Pages)

app.get('/blog', (req, res) => {
    res.send('Blog Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/about-us', (req, res) => {
    res.send('About Us Page');
});


❌ Drawback: The code becomes lengthy if many routes are needed.
----------------------------------------------------------------------------------
🔹 Method 2: Using Request Parameters (Efficient Way)

app.get('/blog/:slug/:category', (req, res) => {
    res.send(Blog Post: ${req.params.slug}, Category: ${req.params.category});
});

req.pram.slug

How it works?
Example URL:

http://localhost:3000/blog/javascript/webdev
req.params.slug → "javascript"
req.params.category → "webdev"


📌 Query Strings in Express.js
Query strings are used to pass additional information in the URL after ?.

🔹 Example URL with Query Parameters
http://localhost:3000/blog/javascript?mode=dark&region=in

🔹 Accessing Query Parameters
app.get('/blog/:slug', (req, res) => {
    console.log(req.query); // { mode: 'dark', region: 'in' }
    res.send(Mode: ${req.query.mode}, Region: ${req.query.region});
});


🔹 Difference Between Params & Query?
Feature	Params (req.params)	Query (req.query)

Location	Inside the URL path	After ? in the URL
Example	/blog/:slug → /blog/javascript	/blog/javascript?mode=dark&region=in
Usage	Identify resources	Send additional data


📌 Serving Static Files in Express.js
Express allows serving static files (CSS, images, JavaScript, etc.) using express.static().

🔹 Steps to Serve Static Files
Create a folder named public
Place all static files inside public
Enable static files in Express:

app.use(express.static('public'));
Access static files via the browser:

http://localhost:3000/filename

📌 Final Express.js Server Code
const express = require('express');
const app = express();

// Middleware to serve static files
app.use(express.static('public'));

// Basic GET route
app.get('/', (req, res) => {
  res.send('Welcome to Express.js!');
});

// Dynamic route with parameters
app.get('/blog/:slug/:category', (req, res) => {
  res.send(Blog Post: ${req.params.slug}, Category: ${req.params.category});
});

// Query string example
app.get('/search', (req, res) => {
  res.send(Search results for: ${req.query.q});
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



📌 Conclusion
✅ Express.js makes handling HTTP requests easier.
✅ Nodemon saves time by auto-restarting the server.
✅ Use request parameters (req.params) and query strings (req.query) efficiently.
✅ Serve static files easily with express.static().

🚀 Happy Coding with Express.js! 🚀



00:01 Express Js is a framework for web development using Node.js
02:12 Express is a framework designed to simplify server-side JavaScript development
04:20 Using npm to install different versions of Express
06:12 ExpressJs basics and handling requests
07:59 Introduction to request parameters and queries in Express Js
09:59 Express Js provides good utilities for creating maintainable endpoints and managing database connections.
11:56 Express.js allows to access URL parameters and query parameters using request params
13:54 Understanding the request object in ExpressJS
16:19 Introduction to Express Js and serving static files
18:32 Express is designed to simplify website development




DAY2;-------------------------RESPONS,REQUEST AND ROUTER IN EXPRESS JS.---------------------