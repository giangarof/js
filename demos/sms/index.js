const express = require('express');
const Nexmo = require('nexmo');
const ejs = require('ejs');
const socketio = require('socket.io');

const app = express();

const xmo = new Nexmo({
    apiKey: '7832af40',
    apiSecret: 'WbDpc4M2bLL7t2NF'
}, {debug:true})

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/', (req,res) => {
    // res.send(req.body);
    // console.log(req.body);
    const number = req.body.number;
    const text = req.body.text;
    xmo.message.sendSms(
        '18663141934', number, text, {type: 'unicode'}, 
        (err, responseData) => {
            if(err){
                console.log(err);
            } else {
                console.dir(responseData);
            }
        }
    )
})

const port = 3000;

const server = app.listen(port, () => console.log(`server running`));