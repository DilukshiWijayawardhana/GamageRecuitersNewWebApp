let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
const multer = require('multer');
let jobApplyRouter = require('./routes/JobApplyForm');
const jobPostRoutes = require('./routes/JobPost');
const contactUsUser = require('./routes/ContactUsUser');
//Express Rout

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected!')
},
    error => {
        console.log('Could not connect to database : ' + error)
    }
)
const app = express();
//app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());


//Connection Port
const port = process.env.PORT || 8070;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// API routes
app.use('/api/jobApply', jobApplyRouter);
app.use('/api/jobposts', jobPostRoutes);
app.use('/api/contactUsUser',contactUsUser);

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});