import express, { Application } from 'express';
import morgan from 'morgan';
import { routes } from './routes/index.routes';
//Inicia el app
const app:Application = express();

//--->Middlewares<---
app.use(express.json());
app.use(morgan('dev'));

//--->Routes<---
routes(app);

export default app;
