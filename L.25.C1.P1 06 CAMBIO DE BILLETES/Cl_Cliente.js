export default class Cl_Cliente {
    constructor(nombre,billeteActual,cambio50,cambio20,cambio10){
        this.nombre=nombre;
        this.billeteActual=billeteActual;
        this.cambio50=cambio50;
        this.cambio20=cambio20;
        this.cambio10=cambio10;
    }
    set nombre(n) { this._nombre = n; }
    set billeteActual(b) { this._billeteActual = b; }
    set cambio50(c) { this._cambio50 = c; }
    set cambio20(c) { this._cambio20 = c; }
    set cambio10(c) { this._cambio10 = c; }
    get nombre() { return this._nombre; }
    get billeteActual() { return this._billeteActual; }
    get cambio50() { return this._cambio50; }
    get cambio20() { return this._cambio20; }
    get cambio10() { return this._cambio10; }
    totalBilletes(){
        return this.cambio50+this.cambio20+this.cambio10;
    }
}