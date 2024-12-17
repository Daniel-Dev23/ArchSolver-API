/**
 * Clase personalizada de excepciones a partir de la clase base **Error**.
 * @class Exception
 */
export class Exception extends Error {
    constructor(name: IGlobalTypeErrors, public description?: any) {
        super();
        
        this.name = name;
        this.description = description;
    }
}