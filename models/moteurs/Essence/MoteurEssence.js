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
exports.MoteurEssence = void 0;
var Moteur_1 = require("../Moteur");
var MoteurEssence = /** @class */ (function (_super) {
    __extends(MoteurEssence, _super);
    function MoteurEssence(vitesse, kilometrage, rouleToujours) {
        var _this = _super.call(this, vitesse, kilometrage) || this;
        _this._rouleToujours = rouleToujours;
        return _this;
    }
    Object.defineProperty(MoteurEssence.prototype, "rouleToujours", {
        get: function () {
            return this._rouleToujours;
        },
        set: function (rouleToujours) {
            this._rouleToujours = rouleToujours;
        },
        enumerable: false,
        configurable: true
    });
    return MoteurEssence;
}(Moteur_1.Moteur));
exports.MoteurEssence = MoteurEssence;
//# sourceMappingURL=MoteurEssence.js.map