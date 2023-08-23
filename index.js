const express = require('express');
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
const port = 8080;
const filename = 'index.html'
const url = path.join(__dirname, filename)

console.log(url);

// app.use(express.static(__dirname));

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))


http://localhost:8080/user/100/add

app.get('/user/:id/:val', (req, res) => {

    let myObject = {
        id: req.params.id,
        val: req.params.val

    }
    res.send(`<h1>${JSON.stringify(myObject)}</h1>`);
    console.log(myObject);

})

http://localhost:8080/user?id=100&val=add  Path Params

app.get('/user', (req, res) => {

    let myObject2 = {
        id: req.query.id,
        val: req.query.val

    }
    res.send(`<h1>${JSON.stringify(myObject2)}</h1>`);
    console.log(myObject2);

})


//POST api which acccepts a JSON data. Return an array of data.
app.post('/', (req, res) => {
    // res.sendFile(__dirname + '/' + filename);
    console.log(`JSON Data:` + JSON.stringify(req.body));

    const result = [ { data: req.body, status: 200, message: 'data fetched successfully' } ];
    console.log(result)
    res.send(result)
})

app.listen(port, () => {
    console.log(`ready to listn ${port}`);
})

