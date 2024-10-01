const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log("Work in progress, usernames will be displayed here")
    res.send("Work in progress")
})

app.get('/new', (req, res) => {
    res.render('new')
})

app.post('/new', (req, res) => {
    console.log("Work in progress");
    return;
})


const PORT = 3000;
app.listen(PORT);