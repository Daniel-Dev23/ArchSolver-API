import path from 'path';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

export default (env: any, argv: any): Configuration|undefined => {

    console.log(`🟢 Empaquetando módulos del proyecto...\n`);

    /**
     * Bandera que índica el modo de configuración en Webpack. 
     * Esta variable se establece en **true** si `argv.mode` es igual a `production`, **false** todo lo contrario.
     * 
     * @type {boolean}
     * @default undefined
     */
    const isProduction: boolean = argv.mode === 'production';

    if ( !isProduction ) {
        console.log(`🟡 [ADVERTENCIA]: La empaquetación de módulos no esta disponible en modo 'DESARROLLO'.`);
        return;
    }

    return {
        entry: './src/index.ts',
        externals: [nodeExternals()],
        externalsPresets: { node: true },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: true,
                        mangle: true
                    }
                })
            ]
        },
        output: {
            clean: true,
            filename: 'bundle.prod.min.js',
            path: path.resolve(__dirname, './shared/dist')
        },
        resolve: {
            alias: {
                '@env': path.resolve(__dirname, 'src/dependencies/env/'),
                '@middlewares': path.resolve(__dirname, 'src/dependencies/middlewares/'),
                '@ts': path.resolve(__dirname, 'src/dependencies/ts/'),
                '@utils': path.resolve(__dirname, 'src/dependencies/utils/'),
            },
            extensions: ['.tsx', '.ts', '.js']
        },
        target: 'node',
        watch: false
    }

}