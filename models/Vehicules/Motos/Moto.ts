import {Vehicule} from "../Vehicule"
import {Moteur} from "../../moteurs/Moteur"

export class Moto extends Vehicule{

    private _largeur : number;

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur, largeur : number) {
        super(marque, couleur, prix, moteur);
        this._largeur = largeur;
    }

    get largeur(){
        return this._largeur;
    }

    set largeur (largeur : number){
        this._largeur = largeur;
    }

}