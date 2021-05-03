import {Moteur} from "../moteurs/Moteur";

export class Vehicule {

    private _marque : string;
    private _couleur : string;
    private _prix : number;
    private _moteur : Moteur;

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }

    get marque() {
        return this._marque;
    }

    set marque(marque : string) {
        this._marque = marque;
    }

    get couleur() {
        return this._couleur;
    }

    set couleur(couleur : string) {
        this._couleur = couleur;
    }

    get prix() {
        return this._prix;
    }

    set prix(prix : number) {
        this._prix = prix;
    }

    get moteur() {
        return this._moteur;
    }

    set moteur(moteur : Moteur) {
        this._moteur = moteur;
    }
}