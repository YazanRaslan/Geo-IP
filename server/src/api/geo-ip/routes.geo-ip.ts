import { Router } from "express";
import { GetIpGeoInfo } from "./functions.geo-ip";
export const geoIpRoutes: Router = Router();

geoIpRoutes.route('/geoIp/:ip').get(GetIpGeoInfo);