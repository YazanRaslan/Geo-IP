import { RequestHandler, Request, Response } from 'express';
import { param } from 'express-validator';
import fetch from 'node-fetch';

export const GetIpGeoInfo: RequestHandler[] = [
    param('ip').exists().bail().isString(),
    async (req: Request, res: Response) => {
        try {
            const ip = req.params.ip;
            const geo = await fetch(`https://ipinfo.io/${ip}/geo`).then(resp => resp.json());
            res.status(200).json(geo);
        } catch (err) {
            console.error(err);
            res.status(err.status || 500).send('An error occurred while getting the IP geo info.');
        }
    }
];