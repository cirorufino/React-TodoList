const express = require ('express');
const app = express();
const cors = require ('cors');


app.use(express.json());
app.use(cors());

const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });
connectDB();

app.use('/', require('./routes/api'));



app.listen(4000, () => { 
    console.log('Server starting at port: ', 4000)
});
