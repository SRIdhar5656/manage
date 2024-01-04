const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express()

const taskroute = require('./routes/taskroute');
app.use((req,res,next) =>{
    console.log('path' + req.path + 'method' +req.method);
    next();
})
app.use(express.json());

app.get('/',(req,res) =>{
   res.send("hello worlld");
})

mongoose.connect(process.env.MONGO_URL)
.then(() =>{app.listen(process.env.PORT,() =>{
    console.log("connected" + process.env.PORT)
});
}).catch((error) => console.log(error));


app.use("/api/task", taskroute);

