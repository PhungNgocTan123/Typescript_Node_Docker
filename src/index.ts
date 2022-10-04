require('dotenv').config();

import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));


app.get('/', (req, res, next) => {
    res.json({ "hello": "world" })
})


const port = Number(process.env.PORT || 8000);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://localhosst:${port}`)
})
