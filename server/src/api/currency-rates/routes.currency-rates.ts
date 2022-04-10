import { Router } from "express";
import { GetCurrencyRates } from "./functions.currency-rates";
export const currencyRatesRoutes: Router = Router();

currencyRatesRoutes.route('/currencyRates/:base').get(GetCurrencyRates);