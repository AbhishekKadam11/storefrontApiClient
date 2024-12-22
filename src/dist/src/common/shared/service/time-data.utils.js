"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPAddress = exports.isSlocInvalid = void 0;
const node_os_1 = __importDefault(require("node:os"));
const isSlocInvalid = (sloc) => {
    return sloc != undefined && /[^a-zA-Z0-9\-\/]/.test(sloc);
};
exports.isSlocInvalid = isSlocInvalid;
const getIPAddress = () => {
    var interfaces = node_os_1.default.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
                return alias.address;
        }
    }
    return '0.0.0.0';
};
exports.getIPAddress = getIPAddress;
//# sourceMappingURL=time-data.utils.js.map