import {Vehicule} from "../Vehicule"
import {Moteur} from "../../moteurs/Moteur"

export class Voiture extends Vehicule{

    private _volumeCoffre : number;

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur, volumeCoffre : number) {
        super(marque, couleur, prix, moteur);
        this._volumeCoffre = volumeCoffre;
    }

    get volumeCoffre(){
        return this._volumeCoffre;
    }

    set volumeCoffre (volumeCoffre : number){
        this._volumeCoffre = volumeCoffre;
    }

}