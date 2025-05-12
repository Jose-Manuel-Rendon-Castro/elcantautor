const express = require('express')
const cors = require('cors')
const { pool } = require('./database')  

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173'}))

let categoria, subcategoria;

app.get('/api/articulos', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM articulos')
    res.json(rows)
})

app.get('/:categoria/:subcategoria', async (req, res) => {
    const { categoria, subcategoria } = req.params;

    try {
        const [rows] = await pool.query(
            'SELECT * FROM articulos WHERE categoria = ? AND tipo = ?',
            [categoria, subcategoria]
        );
        res.json(rows)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al obtener articulos'})
    }
})
/*
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(course, 'Course not found')
})

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body)

    if(error) {
        return res.status(400).send(error.details[0].message); 
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Course not found')
    
    const { error } = validateCourse(req.body)

    if(error) {
        return res.status(400).send(error.details[0].message); 
    }

    course.name = req.body.name;
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Course not found')

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course);
})

*/

app.listen(port, () => console.log(`Listening on port ${port}...`))