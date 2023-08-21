const express = require('express');
const path = require('path')
const app = express();
const bp = require('body-parser');
const port = 8050;
const filename = 'index.html'
const url = path.join(__dirname, filename)

console.log(url);

app.use(express.static(__dirname));

app.use(bp.urlencoded({ extended: true }))


http://localhost:8080/user/100/add

app.get('/user/:id/:val', (req, res) => {

    let myObj = {
        id: req.params.id,
        val: req.params.val

    }
    res.send(`<h1>${JSON.stringify(myObj)}</h1>`);
    console.log(myObj1);

})

http://localhost:8080/user?id=100&val=add  Path Params

app.get('/user', (req, res) => {

    let myObj1 = {
        id: req.query.id,
        val: req.query.val

    }
    res.send(`<h1>${JSON.stringify(myObj1)}</h1>`);
    console.log(myObj1);

})


//POST api which acccepts a JSON data. Return an array of data.
app.post('/', (req, res) => {
    res.sendFile(__dirname + '/' + filename);
    console.log(`boodyyy` + JSON.stringify(req.body));

    const result = [ { data: req.body, status: 200, message: 'data fetched successfully' } ];
    console.log(result)
    res.send(result)






})



app.listen(port, () => {
    console.log(`ready to listn ${port}`);
})

