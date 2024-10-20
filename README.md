# **Arch Solver API**

<div align="center">
    <img src="./shared/assets/pictures/banner-archsolver-api.png" alt="Arch Solver API">
</div>

**[Arch Solver API](https://github.com/Daniel-Dev23/ArchSolver-API.git)** es un framework orientado a JavaScript, que emplea una forma atersanal y personalizada de construír múltiples soluciones REST API con Node JS y TypeScript, tanto a pequeña como a gran escala. 

El diseño de este marco de trabajo, integra las principales bases de diferentes arquitecturas, patrones de diseño y buenas practicas. Esto con el fin de generar un código organizado, modular y que respete la responsabilidad única de los recursos configurados en la aplicación.

La misión, es generar proyectos escalables, mantenibles y ajustable a las distintas necesidades.

<div align="center">
    <i>✌🏻✨ Se el arquitecto de tus soluciones ✨✌🏻</i>
</div>

## **Guía de Instalación**

Para instalar esta aplicación en su desarrollo, siga los siguientes pasos:

1. ✨ **Abrir una ventana terminal**.

2. ✨ **Verifique si cuenta con Node JS instalado:**

    ```sh
    node -v
    ```

    > **NOTA**: En caso de no contar con el entorno de ejecución de Javascript, Node JS, acceda al siguiente enlace para su instalación o actualización:
    > https://nodejs.org/es
    > 
    > Una vez instalado, ejecute el comando anterior para determinar si se realizo la instalación.


3. ✨ **Clone el repositorio de `ArchSolver-API`**:

    ```sh
    git clone https://github.com/Daniel-Dev23/ArchSolver-API.git
    ```

4. ✨ **Nos situamos en la raíz del proyecto**:

    ```sh
    cd "ArchSolver-API"
    ```

5. ✨ **Instalamos los módulos de Node JS**:

    ```sh
    npm install
    ```

6. ✨ **Abrir el proyecto en un editor de código**:

    > NOTA: Se recomienda que se utilice **[Visual Studio Code](https://code.visualstudio.com/download)**. 
    >
    > De tenerlo, use el comando **`code .`** para abrir el proyecto con VS Code.

<div align="center">
    <i>👇🏻 Continue con la siguiente sección 👇🏻</i>
</div>

## **Configuración de Variables de Entorno**

Si usted a instalado la aplicación, ahora debe configurar las variables de entorno iniciales:

1. ✨ **Ubique el archivo llamado `.env-example`.**

2. ✨ **Haga una copia del `.env-example` y peguela en la raíz del proyecto.**

3. ✨ **Renombre el archivo copiado a `.env`.**

4. ✨ **Ingrese las siguientes variables:** 

    ```js
    #* <<< Variables de Entorno >>>
    #* 1. Haga una copia del `.env-example` y peguela en la raíz del proyecto (es vital que este en la raíz).
    #* 2. Renombre el archivo copiado a ".env" y la aplicación hará el resto.
    
    #* !!ProTip: Se recomienda llevar un orden controlado en las variables de entorno que vayan creando.

    NODE_ENV="development"
    VERSION="0.1.0-alpha"

    APP_PORT=""
    ```

5. **✨ Especifique los valores correspondientes en las variables de entorno**

6. ✨ **Guarde los cambios y será todo.**

<div align="center">
    <i>👇🏻 Continue con la siguiente sección 👇🏻</i>
</div>

## **Inicio de Servidor**

Una vez configuradas las variables de entorno, ejecute el servidor en modo **desarrollo**:

```sh
npm run dev
```

La consola, debería regresar una respuesta como esta:

```sh
💙 ArchSolver-API v0.1.0-alpha has been started...
```

> Si usted ha conseguido el resultado anterior, puede tomar la dirección URL proporcionada en la consola y hacer pruebas con un cliente API de confianza (**[Postman](https://www.postman.com/downloads/)**, **[Thunder Client](https://www.thunderclient.com/)**, **[Insomnia](https://insomnia.rest/)**, etc).

## **Tópicos**

Conoce otros aspectos internos del proyecto en este repositorio:

- ✨ **[Convención de Commits](./CONVENTIONAL_COMMITS.md)**
- ✨ **[Esquema de Versionamiento](./VERSIONING_SCHEME.md)**
- ✨ **[Variables de Entorno](./shared/docs/Envs.md)**
<!-- - ✨ **[Seguridad]()** -->

---
© 2024 Daniel-Dev23