const express = require('express')
const app = express();
const mongoose = require('mongoose')
const router = require('./routes/workerRouter')


const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send("hello");
// })
app.use('/',router);
// app.use('/user',userRouter);
// app.use('/weather',weatherRouter);

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}
mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log("connected DB");
}).catch((err) => console.log(err));


app.listen(4000, () => { console.log("listening on port 4000"); })