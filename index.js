const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 19140;
const favicon = require('serve-favicon');


app.use(express.static('public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.get('/', function(req, res) {
          res.sendFile(path.join(__dirname, '/main.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);