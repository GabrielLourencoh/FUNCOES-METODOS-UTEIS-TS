"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Sucesso"] = 200] = "Sucesso";
    StatusCode[StatusCode["Erro"] = 400] = "Erro";
    StatusCode[StatusCode["ErroInterno"] = 500] = "ErroInterno";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
