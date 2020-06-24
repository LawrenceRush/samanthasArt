const express = require('express')
const app = express()
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.get('/paintings', (req, res) => {
    res.sendFile('public/html/paintings.html' , { root : __dirname});
});

app.get('/', (req, res) => {
    res.sendFile('public/html/index.html' , { root : __dirname});
});


app.listen(app.get('port'), () => console.log(`Example app listening on port http://localhost:${port} !`))