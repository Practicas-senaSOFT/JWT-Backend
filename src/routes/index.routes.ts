import { Application, Router } from 'express';
//Rutas
import routerLogin from './login.routes';

//Obtenemos
const _routes:[Router][] = [
    [routerLogin],
];
//Iteramos por las rutas obtenidas
export const routes = (app:Application) => {
    _routes.forEach(route => {
        //Deconstruimos las rutas
        const [url] = route;
        //Usamos la url-ruta
        app.use(url);
    });
};