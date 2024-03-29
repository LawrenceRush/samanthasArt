const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/paintings', (req, res) => {
    res.sendFile('public/html/paintings.html' , { root : __dirname});
});

app.get('/pastels', (req, res) => {
    res.sendFile('public/html/pastels.html' , { root : __dirname});
});

app.get('/work', (req, res) => {
    res.sendFile('public/html/work.html' , { root : __dirname});
});

app.get('/drawings', (req, res) => {
    res.sendFile('public/html/drawings.html' , { root : __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('public/html/about.html' , { root : __dirname});
});

app.get('/', (req, res) => {
    res.sendFile('public/html/index.html' , { root : __dirname});
});


app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port http://localhost:3000 !`))