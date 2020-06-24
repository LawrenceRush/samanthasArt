const express = require('express')
const app = express()
const port = process.env.Port||3000
app.use(express.static('public'))

app.get('/paintings', (req, res) => {
    res.sendFile('public/html/paintings.html' , { root : __dirname});
});

app.get('/', (req, res) => {
    res.sendFile('public/html/index.html' , { root : __dirname});
});


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port} !`))