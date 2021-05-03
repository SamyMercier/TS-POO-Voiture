import {Moteur} from "../Moteur"

export class MoteurElectrique extends Moteur {

    private _vitesseRechargement : number;

    constructor(vitesse : number, kilometrage : number, vitesseRechargement : number) {
        super(vitesse, kilometrage);
        this._vitesseRechargement = vitesseRechargement;
    }

    get vitesseRechargement() {
        return this._vitesseRechargement;
    }

    set vitesseRechargement(vitesseRechargement : number) {
        this._vitesseRechargement = vitesseRechargement;
    }

    public faireAttendre = () : void => {
        console.log("..........")
    }

}