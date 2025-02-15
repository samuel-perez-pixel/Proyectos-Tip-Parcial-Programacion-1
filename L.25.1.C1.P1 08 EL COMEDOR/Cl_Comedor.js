export default class Cl_Comedor{
    constructor() {
        this.acumEmpanadas=0;
        this.acumPastelitos=0;
        this.cntJugos=0;
    }
    procesarComensal(c) {
        // CANTIDAD DE COMIDA
        if(c.tipo=='empanada'){
            this.acumEmpanadas+=c.cantidad;
        }
        else if(c.tipo=='pastelito'){ 
            this.acumPastelitos+=c.cantidad;
        }
        // CANTIDAD DE JUGOS
        if(c.conJugo==1){this.cntJugos++;}
    }
    restoEmpanada(){return 20-this.acumEmpanadas;}
    restoPastelitos(){return 15-this.acumPastelitos;}
    restoJugos(){return 10-this.cntJugos;}
}