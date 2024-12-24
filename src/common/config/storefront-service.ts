import * as dotenv from 'dotenv';
// require("@shopify/shopify-api/adapters/node");
import { shopifyApi } from '@shopify/shopify-api'
// const { shopifyApi, LATEST_API_VERSION } = require("@shopify/shopify-api");
import path from 'path';
dotenv.config({ path: path.join(__dirname, `../.env`)});

const shopify = shopifyApi({
    apiKey: process.env.CLIENT_ID,
    apiSecretKey: process.env.CLIENT_KEY || '',
    scopes: ["read_products"],
    hostName: process.env.HOST_NAME || 'localhost:3000',
});

const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
const shop = process.env.STORE_URL;

// const storefrontClient = new shopify.clients.Storefront({
//     domain: shop,
//     storefrontAccessToken,
// });

export class StorefrontService {

    constructor(private storefrontClient = new shopify.clients.Storefront({
        domain: shop,
        storefrontAccessToken,
    })) {
        
    }
}