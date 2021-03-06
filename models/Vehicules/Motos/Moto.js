"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Vehicule_1 = require("../Vehicule");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marque, couleur, prix, moteur, largeur) {
        var _this = _super.call(this, marque, couleur, prix, moteur) || this;
        _this._largeur = largeur;
        return _this;
    }
    Object.defineProperty(Moto.prototype, "largeur", {
        get: function () {
            return this._largeur;
        },
        set: function (largeur) {
            this._largeur = largeur;
        },
        enumerable: false,
        configurable: true
    });
    return Moto;
}(Vehicule_1.Vehicule));
exports.Moto = Moto;
//# sourceMappingURL=Moto.js.map