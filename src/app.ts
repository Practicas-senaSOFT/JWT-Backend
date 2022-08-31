import express, { Application } from 'express';
import morgan from 'morgan';
import { routes } from './routes/index.routes';
import cors from 'cors';
//Inicia el app
const app:Application = express();

//  --> CORS
const originOptions:cors.CorsOptions = {
    origin: new RegExp(process.env.CORS_ORIGIN as string ?? 'http://localhost:3001'),
    methods: ["GET","POST","PUT","DELETE"]
};
//Usamos cors
app.use(cors(originOptions));

//--->Middlewares<---
app.use(express.json());
app.use(morgan('dev'));

//--->Routes<---
routes(app);

export default app;
