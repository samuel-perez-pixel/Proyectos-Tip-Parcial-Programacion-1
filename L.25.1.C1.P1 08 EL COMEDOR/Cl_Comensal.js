export default class Cl_Comensal{
    constructor(nombre,tipo,cantidad,conJugo) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._cantidad = cantidad;
        this._conJugo = conJugo;
    }
    get nombre() { return this._nombre; }
    get tipo() { return this._tipo; }
    get cantidad() { return this._cantidad; }
    get conJugo() { return this._conJugo; }
    set nombre(n) { this._nombre = n; }
    set tipo(t) { this._tipo = t; }
    set cantidad(c) { this._cantidad = c; }
    set conJugo(cj) { this._conJugo = +cj; }
    montoComida(){
        if(this.tipo=='empanada'){
            return this.cantidad*20;
        }
        else if(this.tipo=='pastelito'){
            return this.cantidad*10;
        }
    }
    montoTotal(){
        if(this.conJugo==1){
           return  this.montoComida()+5;
        }
        else{
            return this.montoComida();
        }
        
    }
}