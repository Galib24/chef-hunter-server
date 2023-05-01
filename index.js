const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const Details =  require('./data/chefDetails.json')

app.get('/',(req, res)=>{
    res.send('chef is running');
});


app.get('/chefDetails', (req,res)=>{
    res.send(Details);
})

app.listen(port, ()=>{
    console.log(`chef API is running on port ${port}`);
})