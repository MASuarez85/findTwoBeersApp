import { Request, Response, NextFunction } from 'express';
import { findTwoBeersService } from '../../Services/findTwoBeers.Service';
import { Error } from '../../Model/Error';

export class findTwoBeersController {
    public static async findTwoBeers(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {

            const item: any = await findTwoBeersService.findTwoBeers(req.body.beers, req.body.target);
            res.status(200).send(item);
        } catch (e) {
            console.log(e);
            next({
                status: 500,
                message: e.message,
                request: {
                    body: req.body,
                },
            } as Error);
        }
    }
}
