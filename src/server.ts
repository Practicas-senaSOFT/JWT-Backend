import app from './app';
import http from 'http';

const main = async ():Promise<void> => {
    //creamos server 
    const server:http.Server = http.createServer(app);
    //Definimoc puerto
    const PORT:number|string = process.env.PORT || 3000;
    //Se coloca a escuchar al server
    server.listen(PORT, () => {
        console.log(`Server listenig on port ${PORT} `);
    })
};

//Inicializamos
Promise.all(
    //Se ejecuta antes d e todo
    [console.log('Initializing...')]
).then(()=>{
    //Start
    main();
}).catch(err=>{
    console.error(`ERROR:: Initalizing server : ${err}`);
});