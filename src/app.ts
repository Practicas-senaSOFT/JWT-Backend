import express, { Application } from 'express';
import morgan from 'morgan';
//Inicia el app
const app:Application = express();


//--->Middlewares<---
app.use(express.json());
app.use(morgan('dev'));

//--->Routes<---

export default app;
