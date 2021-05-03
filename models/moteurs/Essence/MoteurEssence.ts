import {Moteur} from "../Moteur"

export class MoteurEssence extends Moteur {

    private _rouleToujours : boolean

    constructor(vitesse : number, kilometrage : number, rouleToujours : boolean) {
        super(vitesse, kilometrage);
        this._rouleToujours = rouleToujours;
    }

    get rouleToujours(){
        return this._rouleToujours;
    }

    set rouleToujours(rouleToujours : boolean){
        this._rouleToujours = rouleToujours;
    }

}