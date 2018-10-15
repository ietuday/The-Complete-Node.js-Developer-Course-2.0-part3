const express = require('express');

var app = express();

app.get('/',(req, res) => {
    res.status(404).send({
        error:'Page not Found',
        name:'Todo App v1.0'
    });    
});

app.get('/users', (req, res) => {
    res.send([{
        name:'Mike',
        age:27
    },{
        name:'Uday',
        age:25
    },{
        name:'Jen',
        age:26
    }])
});

app.listen(3000, () => {
    console.log('Application listening to 3000');
})

module.exports.app = app;