import { RequestHandler, Request, Response } from 'express';
import { param } from 'express-validator';
import fetch from 'node-fetch';

export const GetCurrencyRates: RequestHandler[] = [
    param('base').exists().bail().isString(),
    async (req: Request, res: Response) => {
        try {
            const rates = await fetch(`https://api.exchangerate.host/latest?base=${ req.params.base }&symbols=USD,EUR,AED,GBP,TRY,AUD,CAD,KWD`).then(resp => resp.json()).then(resp => resp.rates);
            res.status(200).json(rates);
        } catch (err) {
            console.error(err);
            res.status(err.status || 500).send('An error occurred while getting the currency rates.');
        }
    }
];