export default class Cl_Articulo {
    constructor(nombre,precio,cantidad){
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
    }
    set nombre(n) { this._nombre = n; }
    set precio(p) { this._precio = p; }
    set cantidad(c) { this._cantidad = c; }
    get nombre() { return this._nombre; }
    get precio() { return this._precio; }
    get cantidad() { return this._cantidad; }
    subtotal() { return this._precio * this._cantidad; }
}