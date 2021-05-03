"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationEssence = void 0;
var StationEssence = /** @class */ (function () {
    function StationEssence(adresse, ville, nombreDePlaces) {
        this._adresse = adresse;
        this._ville = ville;
        this._nombreDePlaces = nombreDePlaces;
    }
    Object.defineProperty(StationEssence.prototype, "adresse", {
        get: function () {
            return this._adresse;
        },
        set: function (adresse) {
            this._adresse = adresse;
        },
        enumerable: false,
        configurable: true
    });
    return StationEssence;
}());
exports.StationEssence = StationEssence;
//# sourceMappingURL=StationEssence.js.map