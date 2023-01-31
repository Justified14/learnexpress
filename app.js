require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 9000
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const employeeRouter = require('./routes/employeeRouter')
app.set('view engine', 'ejs');

app.use(express.json()); //middleware
app.use(express.urlencoded({extended: true})); //

app.use(employeeRouter);

app.get('/create',(req, res) => {
    res.status(200).render('create');
});


mongoose.connect(process.env.MONGO_URI).then(()=> {
    app.listen(PORT, () => {
        console.log(`server listening on ${PORT} database connection established`);
    });
}).catch((err) => {
 console.log(err);
}); //DB Connection


























