const express = require('express')
require('dotenv').config()

const cors = require('cors');
const app = express()
const axios = require('axios')
const port = process.env.PORT || 5000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.get('/', (req, res) => {
    return res.json({'status': 'working'});
})

app.get('/api/compile', async (req, res) => {
    let url = "https://api.jdoodle.com/v1/execute";
    let program = JSON.parse(req.query.data);
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let output;
    try {
        await axios.post(url, program, config)
                   .then((response)=>{
                       output = response.data.output;
                   })
                   .catch((err) => {
                       console.log("Error in axios request from server.js: ", err);
                   })
    } catch(err) {
        console.log("Error catch: ", err);
    }

    res.json({output});
})

app.listen(port, () => {
    console.log('App is up and running at port: ', port);
})