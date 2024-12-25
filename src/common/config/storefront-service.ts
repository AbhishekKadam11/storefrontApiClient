import * as dotenv from 'dotenv';
import '@shopify/shopify-api/adapters/node';
// require("@shopify/shopify-api/adapters/node");
import { ApiVersion, ConfigInterface, ConfigParams, shopifyApi, ShopifyRestResources } from '@shopify/shopify-api'

import path from 'path';
// import { FutureFlagOptions } from '@shopify/shopify-api/dist/ts/future/flags';
dotenv.config({ path: path.join(__dirname, `../../../../.env`) });
// console.log("env var", process.env.CLIENT_KEY , path.join(__dirname, `../../../../.env`))

// const shopify = shopifyApi({
//     apiKey: process.env.CLIENT_ID,
//     apiSecretKey: process.env.CLIENT_KEY || '',
//     scopes: ["read_products"],
//     hostName: process.env.HOST_NAME || 'localhost:3000',
// });
const params = {

    apiKey: process.env.CLIENT_ID || '',
    apiSecretKey: process.env.CLIENT_KEY || '',
    accessToken: process.env.CLIENT_KEY || '',
    // @ts-ignore
    scopes: ["read_products"] || [],
    hostName: process.env.HOST_NAME || 'localhost:3000',
    apiVersion: ApiVersion.October22,
    isEmbeddedApp: false

};
const shopify = shopifyApi(params);
// console.log("shopify", shopify)
const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN;
const shop = process.env.STORE_URL;

// const storefrontClient = new shopify.clients.Storefront({
//     domain: shop,
//     storefrontAccessToken,
// });

export class StorefrontService {

    constructor(private storefrontClient = new shopify.clients.Storefront({
        // @ts-ignore
        domain: shop,
        storefrontAccessToken,
    })) {
        console.log("status", this.storefrontClient)
    }
}