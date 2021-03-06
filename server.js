const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Richard', lastName: 'Shu'},
        {id: 2, firstName: 'Addie', lastName: 'Guo'},
        {id: 3, firstName: 'Kshit', lastName: 'Ranginth'},
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));