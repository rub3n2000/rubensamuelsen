const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile('/index.html');
});

app.get('/api/customers', (req,res) => {
    const customers = [
        {id: 1, firstName: 'Beth', lastName: 'Doe'},
        {id: 2, firstName: 'John', lastName: 'Doe'}
    ];
    res.json(customers);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));