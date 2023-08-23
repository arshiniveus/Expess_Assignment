const express = require('express');
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
const port = 8080;
const filename = 'index.html'
const url = path.join(__dirname, filename)

console.log(url);
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

// GET with Path Parameters
app.get('/user/:id/:val', (req, res) => {
    try {
        let myObject = {
            id: req.params.id,
            val: req.params.val
        }
        res.send(`<h1>${JSON.stringify(myObject)}</h1>`);
        console.log(myObject);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

// GET with Query Parameters
app.get('/user', (req, res) => {
    try {
        let myObject2 = {
            id: req.query.id,
            val: req.query.val
        }
        res.send(`<h1>${JSON.stringify(myObject2)}</h1>`);
        console.log(myObject2);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

// POST API which accepts JSON data and returns an array of data.
app.post('/', (req, res) => {
    try {
        console.log(`JSON Data:` + JSON.stringify(req.body));

        const result = [ { data: req.body, status: 200, message: 'data fetched successfully' } ];
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

app.listen(port, () => {
    console.log(`ready to listen on ${port}`);
});
