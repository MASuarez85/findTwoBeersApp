import express, { Application, Request, Response, NextFunction } from 'express';
import {
    findTwoBeersAltRouter,
    findTwoBeersAltRouterTest,
    findTwoBeersRouter,
    findTwoBeersRouterTest
} from './Routers/Index';
import Configuration from "../Configuration/Configuration"

/**
 * Variables
 */
const PORT: number = parseInt(Configuration.API.REST.PORT as string, 10);

/**
 *  App
 */
const app: Application = express();

/**
 *  Middlewares
 */
app.use(express.json());

/**
 *  App routers
 */
app.use('/findTwoBeersAlt', findTwoBeersAltRouter);
app.use('/findTwoBeersAlt', findTwoBeersAltRouterTest);
app.use('/findTwoBeers', findTwoBeersRouter);
app.use('/findTwoBeers', findTwoBeersRouterTest);
/**
 * Server
 */
export const Server = () => {
    app.listen(PORT, () => {
        console.log(
            `🚀 REST Server ready and listening at ==> http://localhost:${PORT}`,
        );
    });

};

export default function createServer() {

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send('Hello world');
    })
    return app;
}