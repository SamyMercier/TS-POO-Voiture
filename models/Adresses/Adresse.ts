export class Adresse {

    private _numeroDeVoie : number;
    private _nomRue : string;
    private _complementAdresse : string;
    private _codePostal : number;
    private _nomVille : string;


    constructor(numeroDeVoie : number, nomRue : string, complementAdresse : string, codePostal : number, nomVille : string) {
        this._numeroDeVoie=numeroDeVoie;
        this._nomRue=nomRue;
        this._complementAdresse=complementAdresse;
        this._codePostal=codePostal;
        this._nomVille=nomVille;
    }

    get numeroDeVoie() {
        return this._numeroDeVoie;
    }

    set numeroDeVoie(numeroDeVoie : number) {
        this._numeroDeVoie = numeroDeVoie;
    }

    get nomRue() {
        return this._nomRue;
    }

    set nomRue(nomRue : string) {
        this._nomRue = nomRue;
    }
}