import os from 'os';
import { IConfigNetwork } from './types/networks.types';

/**
 * Función que obtiene las interfaces de red para entrelazarla con un servidor.
 * 
 * @function
 * @name deployNetworks
 * @param config Argumentos de despliegue de interfaces de red.
 */
export const deployNetworks = ( config: IConfigNetwork ): void => {

    //? Desestructuración de argumentos
    const { environment, port, server } = config;

    /**
     * Asignación de interfaces de red.
     */
    const networkIntefaces = os.networkInterfaces();

    /**
     * Obtención de claves del objeto **networkIntefaces**.
     */
    const interfaceKeys = Object.keys(networkIntefaces);

    //* Despliegue de servidor con interfaces de red
    server.listen(port, () => {
        
        /**
         * Interfaces de red filtradas por IPV4 y que sean diferences a **127.0.0.1**.
         */
        interfaceKeys.forEach(key => {
            return networkIntefaces[key]
                ?.filter(network => network.address !== '127.0.0.1' && network.family === 'IPv4')
                ?.forEach(network => {
                    console.log(`⚡[${environment}] running at http://${network.address}:${port}`);
                    console.log('');
                })
        });

    });
    
}