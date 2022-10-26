const express = require('express')
const app = express()
const port = process.env.PORT || 5001;

const cors = require('cors')
app.use(cors())

const categories = require('./data/categories.json');

const courses = require('./data/courses.json');

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    const CategoryCourse = courses.filter( n => n.category_id === id);
    res.send(CategoryCourse);
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourses = courses.find( n => n._id === id);
    //console.log(selectedCourses);
    res.send(selectedCourses);
})

app.get('/explore-categories', (req, res) =>{
    res.send(categories);
})


app.get('/', (req, res) => {
  res.send('Course API running')
})

app.get('/courses', (req, res) =>{
    res.send(courses);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})