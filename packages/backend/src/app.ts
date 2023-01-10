import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/weather', require('./routes/weather'));

const server = http.createServer(app);
server.listen(12345);

console.log('[*] Up and running on port 12345!');
