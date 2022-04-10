import express from 'express';
import { apiPort } from './settings';
import { cors } from '../lib/cors';
import { geoIpRoutes } from './api/geo-ip/routes.geo-ip';
import { currencyRatesRoutes } from './api/currency-rates/routes.currency-rates';

export const app = express();

app.use(cors);
app.use(geoIpRoutes);
app.use(currencyRatesRoutes);

app.listen(apiPort, () => {
    console.log(`server started at http://localhost:${apiPort}`);
});