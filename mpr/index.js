const express = require('express');
var cors = require('cors');
fs = require('fs');
const app = express();
app.use(cors());
app.use(express.urlencoded());

app.use(express.json())


app.post('/registration', function(request, response, next) {
    let data = null
    try {
        data = JSON.parse(fs.readFileSync('helloworld1.json', 'utf8'));
        console.log(data);
    } catch (err) {
        console.error(err);
    }

    let reg_data = request.body;

    data.push(reg_data);
    var newData2 = JSON.stringify(data);
    fs.writeFile('helloworld1.json', newData2, err => {
        if (err) return console.log(err);
    });
    response.send({ "status": 200 })

});

app.get('/registration', function(req, res, next) {
    let data = null
    try {
        data = JSON.parse(fs.readFileSync('helloworld1.json', 'utf8'));
        console.log(data);
    } catch (err) {
        console.error(err);
    }
    res.send(data);

});

app.listen(2000);