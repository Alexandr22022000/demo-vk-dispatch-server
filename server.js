var express = require('express');
const path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'app')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});