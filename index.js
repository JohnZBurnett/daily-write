const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send('This is a test response'); 
})

app.listen(8000, () => {
    console.log('Starter app listening on port 8000'); 
})