import {Adresse} from "../Adresses/Adresse"

export class StationEssence {

    private _adresse: Adresse;
    private _ville: string;
    private _nombreDePlaces: number;

    constructor(adresse: Adresse, ville: string, nombreDePlaces: number) {
        this._adresse = adresse;
        this._ville = ville;
        this._nombreDePlaces = nombreDePlaces;
    }

    get adresse() {
        return this._adresse;
    }

    set adresse(adresse : Adresse){
        this._adresse = adresse;
    }

}