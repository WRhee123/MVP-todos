const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const {Pool} = require('pg')
const cors = require('cors');
const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    database: 'fitness',
    password: '1',
    port: '5432'
})

const PORT = 3000

app.use(cors())
app.use(express.json())
// app.use(express.static('Public'))

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})