import os from 'os';
import { Application } from 'express';

interface IArgsGetNetwork {
    environment: string;
    port: number;
    server: Application;
}

export const deployNetworks = ( args: IArgsGetNetwork ): void => {

    //? Desestructuración de argumentos
    const { environment, port, server } = args;

    /**
     * Asignación de interfaces de red.
     */
    const networkIntefaces = os.networkInterfaces();

    /**
     * Obtención de claves del objeto **networkIntefaces**.
     */
    const interfaceKeys = Object.keys(networkIntefaces);

    /**
     * Listado de direcciones de red.
     */
    const networks: string[] = [];

    //* Despliegue de servidor con interfaces de red
    server.listen(port, () => {
        
        /**
         * Interfaces de red filtradas por IPV4 y que sean diferences a **127.0.0.1**.
         */
        interfaceKeys.forEach(key => {
            return networkIntefaces[key]
                ?.filter(network => network.address !== '127.0.0.1' && network.family === 'IPv4')
                ?.forEach(network => {
                    console.log(`🟢 [${environment}] running at http://${network.address}:${port}`);
                    console.log('');
                })
        });

    });
    
}