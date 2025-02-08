export default class Cl_Jugador {
    constructor(nombre,carta1,carta2,carta3) {
        this._carta1 = carta1;
        this._carta2 = carta2;
        this._carta3 = carta3;
        this._nombre = nombre;
        
    }
    get carta1() { return this._carta1; }
    get carta2() { return this._carta2; }
    get carta3() { return this._carta3; }
    get nombre() { return this._nombre; }
    set carta1(c) { this._carta1 = c; }
    set carta2(c) { this._carta2 = c; }
    set carta3(c) { this._carta3 = c; }
    set nombre(n) { this._nombre = n; }
    puntajeFinal() {
        return (this._carta1 + this._carta2 + this._carta3);
    }
}
    