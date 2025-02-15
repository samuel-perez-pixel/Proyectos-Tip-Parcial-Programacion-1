export default class Cl_Empresa{
    constructor(){
        this.acumAumento=0;
    }
    procesarPersonal(p){
        this.acumAumento += p.aumento();
    }
    montoAdicional(){
        return this.acumAumento;
    }
}