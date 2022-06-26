const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// import mongoose from 'mongoose';
const mongoose=require('mongoose');
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true
  })
  .then(con => {
    // console.log(con.connection);
    console.log('DB connection successful');
  });




const port = process.env.PORT || 3000;

//const port =  3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
