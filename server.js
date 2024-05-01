const express = require('express');
const path= require('path');


// Initialize an instance of Express.js
const app = express();
const PORT= 3001;

// Static middleware pointing to public folder 
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
})



app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });