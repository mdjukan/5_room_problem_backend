const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const eventLog = {'load': 0, 'check': 0, 'try-again': 0, 'next-level': 0};

app.get('/', (req, res) => {
	res.json(eventLog);
});

app.post('/', (req, res) => {
	eventLog[req.body['event']] += 1;
	console.log(eventLog);
	res.send('post');
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})
