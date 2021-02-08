import { Request, Response, NextFunction } from 'express';
import { findTwoBeersAltService } from '../../Services/findTwoBeersAlt.Service';
import { Error } from '../../Model/Error';

export class findTwoBeersAltController {
    public static async findTwoBeersAlt(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {

            const item: any = await findTwoBeersAltService.findTwoBeersAlt(req.body.beers, req.body.target);
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
