"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, couleur, prix, moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }
    Object.defineProperty(Vehicule.prototype, "marque", {
        get: function () {
            return this._marque;
        },
        set: function (marque) {
            this._marque = marque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "couleur", {
        get: function () {
            return this._couleur;
        },
        set: function (couleur) {
            this._couleur = couleur;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "moteur", {
        get: function () {
            return this._moteur;
        },
        set: function (moteur) {
            this._moteur = moteur;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;
//# sourceMappingURL=Vehicule.js.map