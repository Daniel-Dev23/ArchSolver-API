// global.d.ts

declare global {

    //* --- Interfaces ---

    /**
     * Interfaz global que define el retorno de un **setup-server**.
     */
    interface IGlobalSetupServer {
        deploy: () => void;
    }

    //* --- Tipos ---

    /**
     * Definición de tipos globales de entornos de desarrollo
     */
    type TypeGlobalNodeEnv = 'development' | 'production';

}

export{}