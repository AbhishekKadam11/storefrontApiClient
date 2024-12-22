"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const error_middleware_1 = require("../middleware/error.middleware");
class AppContainer {
    constructor(appName, appConfig) {
        this.appName = appName;
        this.appConfig = appConfig;
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(error_middleware_1.errorHandler);
        process.on('SIGTERM', signal => {
            console.log(`Process ${process.pid} received a SIGTERM signal`);
            process.exit(0);
        });
        process.on('SIGINT', signal => {
            console.log(`Process ${process.pid} has been interrupted`);
            process.exit(0);
        });
        // this.app.use(notFoundHandler);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.httpServer = this.app.listen(this.appConfig.applicationPort, () => {
                console.log(`[${this.appName}]: Server is running at http://localhost:${this.appConfig.applicationPort}`);
            });
        });
    }
}
exports.AppContainer = AppContainer;
//# sourceMappingURL=app-container.js.map