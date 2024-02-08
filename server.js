require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const PeopleRouter = require('./controllers/people')

const app = express();

//middlewear
app.use(morgan())
app.use(cors())
app.use(express.json())
//routes
app.use('/people', PeopleRouter)





app.get('/', (req, res) => {
    res.send('hello world')
})


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening to port ${PORT}`))