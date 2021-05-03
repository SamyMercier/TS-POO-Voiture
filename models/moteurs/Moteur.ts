export class Moteur {

    private _vitesse : number;
    private _kilometrage : number;

    constructor(vitesse : number, kilometrage : number) {
        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }

    get vitesse() {
        return this._vitesse;
    }

    set vitesse(vitesse : number) {
        this._vitesse = vitesse;
    }

    get kilometrage() {
        return this._kilometrage;
    }

    set kilometrage(kilometrage : number) {
        this._kilometrage = kilometrage;
    }
}