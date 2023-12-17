const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const {Pool} = require('pg')
const cors = require('cors');
const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    database: 'mvptodos',
    password: '1',
    port: '5432'
})

const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('../dist'))

//get all route GOOD
app.get('/api/todos', async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM todos');
        res.send(result.rows)
    }catch(error){
        console.log(error.stack)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//get 1 route GOOD
app.get('/api/todos/:id', async(req, res) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0) {
            return res.status(400).json({error: 'Invalid ID'})
        } else {
            const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
            if(result.rows.length === 0) {
                return res.status(400).json({error: 'Not Found'})
            }
            return res.status(200).send(result.rows[0])
        }
    }catch(error){
        console.log(error.stack)
        res.status(500).json({error: "Internal Server Error"})
    }
})

//post route GOOD
app.post('/api/todos/', async(req, res) => {
    try{
        const {todo} = req.body;
        const result = await pool.query('INSERT INTO todos (todo) VALUES ($1) RETURNING *', [todo]);
        res.send(result.rows[0])
    }catch(error){
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//put route GOOD
app.put('/api/todos/:id', async(req, res) => {
    try{
        const id = parseInt(req.params.id);
        const {todo} = req.body;
        const result = await pool.query('UPDATE todos SET todo = $1 WHERE id = $2 RETURNING *', [todo, id]);
        console.log(result.rows)
        if(result.rows.length === 0) {
            return res.status(400).send('todo not found')
        }
        res.json(result.rows[0])
    }catch(error){
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

//delete route GOOD
app.delete('/api/todos/:id', async(req, res) => {
    try{
        const id = parseInt(req.params.id);
        let result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
        res.status(200).send(result.rows[0])
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})