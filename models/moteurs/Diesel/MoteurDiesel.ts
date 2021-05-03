import {Moteur} from "../Moteur"

export class MoteurDiesel extends Moteur {

    private _bruitMoteur : string;

    constructor(vitesse : number, kilometrage : number, bruitMoteur : string) {
        super(vitesse, kilometrage);
        this._bruitMoteur = bruitMoteur;
    }

    faireDuBruit = () : void =>{
        console.log();
    }

    get bruitMoteur(){
        return this._bruitMoteur;
    }

    set bruitMoteur(bruitMoteur : string){
        this._bruitMoteur = bruitMoteur;
    }
}