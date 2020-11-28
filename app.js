require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/greet', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);
});