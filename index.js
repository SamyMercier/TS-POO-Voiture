"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoteurElectrique_1 = require("./models/moteurs/Electrique/MoteurElectrique");
var Voiture_1 = require("./models/Vehicules/Voitures/Voiture");
var moteurElectrique = new MoteurElectrique_1.MoteurElectrique(350, 0, 60);
var voiture = new Voiture_1.Voiture("Tesla", "blanche", 0, moteurElectrique, 120);
moteurElectrique.faireAttendre();
//# sourceMappingURL=index.js.map