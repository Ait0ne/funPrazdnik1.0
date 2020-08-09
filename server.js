const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(compression())
    app.use(enforce.HTTPS({ trustProtoHeader: true }))
    app.use(express.static(path.join(__dirname, 'client/dist')));
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});