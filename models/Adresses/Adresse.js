"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(numeroDeVoie, nomRue, complementAdresse, codePostal, nomVille) {
        this._numeroDeVoie = numeroDeVoie;
        this._nomRue = nomRue;
        this._complementAdresse = complementAdresse;
        this._codePostal = codePostal;
        this._nomVille = nomVille;
    }
    Object.defineProperty(Adresse.prototype, "numeroDeVoie", {
        get: function () {
            return this._numeroDeVoie;
        },
        set: function (numeroDeVoie) {
            this._numeroDeVoie = numeroDeVoie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "nomRue", {
        get: function () {
            return this._nomRue;
        },
        set: function (nomRue) {
            this._nomRue = nomRue;
        },
        enumerable: false,
        configurable: true
    });
    return Adresse;
}());
exports.Adresse = Adresse;
//# sourceMappingURL=Adresse.js.map