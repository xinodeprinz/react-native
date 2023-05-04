import express, { Application } from 'express';
import { config } from 'dotenv';
import router from './router.js';
import fileUpload from 'express-fileupload';

config();

// ENV Variables
const { PORT, HOST } = process.env;

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));
app.use(express.static('./images'));
app.use(router);

app.listen(
    Number(PORT),
    String(HOST),
    () => console.log(`Server running on ${HOST}:${PORT}`)
);