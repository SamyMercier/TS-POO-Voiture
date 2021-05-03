import {Vehicule} from "../Vehicule"
import {Moteur} from "../../moteurs/Moteur"

export class Camion extends Vehicule{

    private _longeur : number;

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur, longeur : number) {
        super(marque, couleur, prix, moteur);
        this._longeur = longeur;
    }

    get longeur(){
        return this._longeur;
    }

    set longeur (longeur : number){
        this._longeur = longeur;
    }

}