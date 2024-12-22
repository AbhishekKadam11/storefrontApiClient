"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvVariables = void 0;
class AppEnvVariables {
    constructor(processEnv = process.env) {
        this.processEnv = processEnv;
    }
    get applicationPort() {
        return parseInt(this.processEnv.APPLICATION_PORT || "8000");
    }
}
exports.AppEnvVariables = AppEnvVariables;
//# sourceMappingURL=app-env-variables.js.map