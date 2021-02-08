/**
 * Required External Modules and Interfaces
 */

import express, { Router, Request, Response, NextFunction } from 'express';
import { findTwoBeersController } from '../Controllers/findTwoBeers.Controller';




/**
 * Router Definition
 */
export const findTwoBeersRouter = express.Router();
export const findTwoBeersRouterTest = Router();

/**
 * Controller Definitions
 */

findTwoBeersRouter.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        await findTwoBeersController.findTwoBeers(req, res, next);
    },
);

findTwoBeersRouterTest.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
})

/**
 * Exports
 */
export default { findTwoBeersRouter, findTwoBeersRouterTest };
