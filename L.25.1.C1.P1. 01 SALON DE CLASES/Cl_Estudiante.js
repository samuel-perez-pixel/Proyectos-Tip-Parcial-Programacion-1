export default class Cl_Estudiante {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre(n) { this._nombre = n; }
    set edad(e) { this._edad = e; }
    set sexo(s) { this._sexo = s.toUpperCase(); }
    get nombre() { return this._nombre; }
    get edad() { return this._edad; }
    get sexo() { return this._sexo; }
}