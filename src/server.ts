import app from './app';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});
//DB
import { MySQLDataSource } from './config/mysql/dataSource';

const main = async ():Promise<void> => {
    //creamos server 
    const server:http.Server = http.createServer(app);
    //Definimos puerto
    const PORT:number|string = process.env.PORT || 3000;
    try { 
        //Se coloca a escuchar al server
        server.listen(PORT, () => {
            console.log(`Server listenig on port ${PORT} `);
        });
    } catch (error) {
        console.error(`Error catch: ${error}`);
        process.exit();
    }
};

//Inicializamos
Promise.all(
    //Se ejecuta antes d e todo
    [
        console.log('Initializing...'),
        MySQLDataSource.initialize(),
    ],
).then(()=>{
    //Start
    main();
}).catch(err=>{
    console.error(`ERROR:: Initalizing server : ${err}`);
});