import { MoteurElectrique } from "./models/moteurs/Electrique/MoteurElectrique";
import { Voiture } from "./models/Vehicules/Voitures/Voiture";


let moteurElectrique : MoteurElectrique = new MoteurElectrique(350, 0, 60);

let voiture : Voiture = new Voiture("Tesla", "blanche", 0, moteurElectrique,120);


moteurElectrique.faireAttendre();