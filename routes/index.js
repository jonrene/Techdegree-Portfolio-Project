const express = require('express');
const router = express.Router();

// imports data on projects
const data  = require("../data.json");



router.get('/', (req, res)=>{
    res.locals.projects = data.projects;
    res.render('index.pug');
})

router.get('/project/:id', (req, res)=>{
    res.locals.projects = data.projects;
    res.locals.id = req.params.id;
    res.render('project.pug');
})


module.exports = router;