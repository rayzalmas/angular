const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(__dirname + '/dist/icma'));
app.use(express.static(`${__dirname}/icma/dist/`));

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname+'/dist/icma/index.html'));
// });
app.get('*', (req, res) => {
    res.sendFile(`./icma/dist/index.html`);
});

app.listen(process.env.PORT || 8080);