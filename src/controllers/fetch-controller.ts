import express from "express";
import { StorefrontService } from "../common/config/storefront-service";

export class FetchController {
    constructor(private storefrontService: StorefrontService, public readonly router = express.Router()) {
        this.readerContainer = this.readerContainer.bind(this)
        this.router.get("/data", this.readerContainer);
    }

    private async readerContainer(req: express.Request, res: express.Response) {

    }
}