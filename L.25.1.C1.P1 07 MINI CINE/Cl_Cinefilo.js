export default class Cl_Cinefilo {
    constructor(sala,nombrePeli,cantidadAdultos,cantidadNinos){
        
        this.sala=sala;
        this.nombrePeli=nombrePeli;
        this.cantidadAdultos=cantidadAdultos;
        this.cantidadNinos=cantidadNinos;
    }
   
    set sala(s){this._sala=s;}
    set nombrePeli(p){this._nombrePeli=p;}
    set cantidadAdultos(a){this._cantidadAdultos=+a;}
    set cantidadNinos(n){this._cantidadNinos=+n;}
    
    get sala(){return this._sala;}
    get nombrePeli(){return this._nombrePeli;}
    get cantidadAdultos(){return this._cantidadAdultos;}

    get cantidadNinos(){return this._cantidadNinos;}
        montoTotal(){
        return (this.cantidadAdultos*2)+(this.cantidadNinos*1);
    }
}