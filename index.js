const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000 ;

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Look Mama! I can code node now!! ohh, YESSssssss, okkkkkkkkkkk')
});

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@ga.com', phone: '01785285575'},
    {id: 2, name: 'kuduss', email: 'kuduss@ga.com', phone: '01785285575'},
    {id: 3, name: 'halim', email: 'halim@ga.com', phone: '01785285575'},
    {id: 4, name: 'sabnur', email: 'sabnura@ga.com', phone: '01785285575'},
    {id: 5, name: 'babulu', email: 'babulu@ga.com', phone: '01785285575'},
    {id: 6, name: 'jasmin', email: 'jasmin@ga.com', phone: '01785285575'},
    {id: 7, name: 'yasmin', email: 'yasmin@ga.com', phone: '01785285575'},
    {id: 8, name: 'dipjol', email: 'dipjol@ga.com', phone: '01785285575'},
    {id: 9, name: 'salim', email: 'salim@ga.com', phone: '01785285575'},
    {id: 10, name: 'josim', email: 'josima@ga.com', phone: '01785285575'}
]

app.get('/users', (req, res) =>{
    // console.log('query', req.query)

    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request:', req.body);
    const user =req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Lisining to Port', port)
})
