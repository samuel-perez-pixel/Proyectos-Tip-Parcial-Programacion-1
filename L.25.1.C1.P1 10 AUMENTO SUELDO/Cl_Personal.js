export default class Cl_Personal{
    constructor(nombre,tipo,sueldo){
        this._nombre = nombre;
        this._tipo = tipo;
        this._sueldo = sueldo;
    }
    get nombre() { return this._nombre; }
    get tipo() { return this._tipo; }
    get sueldo() { return this._sueldo; }
    set nombre(n) { this._nombre = n; }
    set tipo(t) { this._tipo = t; }
    set sueldo(s) { this._sueldo = s; }
    aumento(){
        if(this._tipo=='obrero'){
            return this._sueldo*0.2;
        }
        else if(this._tipo=='administrativo'){
            return this._sueldo*0.1;
        }
    }
}