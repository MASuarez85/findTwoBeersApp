/**
 * Required External Modules and Interfaces
 */

import express, { Router, Request, Response, NextFunction } from 'express';
import { findTwoBeersAltController } from '../Controllers/findTwoBeersAlt.Controller';

/**
 * Router Definition
 */
export const findTwoBeersAltRouter = Router();
export const findTwoBeersAltRouterTest = Router();
/**
 * Controller Definitions
 */

findTwoBeersAltRouter.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        await findTwoBeersAltController.findTwoBeersAlt(req, res, next);
    },
);

findTwoBeersAltRouterTest.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
})

/**
 * Exports
 */
export default { findTwoBeersAltRouter, findTwoBeersAltRouterTest };
