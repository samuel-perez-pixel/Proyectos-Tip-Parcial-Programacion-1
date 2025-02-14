export default class Cl_CasadeCambio{
    constructor(){
        this.acumBilleteActual=0;
        this.acumBillete50=0;
        this.acumBillete20=0;
        this.acumBillete10=0;
        this.cntBillete100=0;
    }
    procesarCliente(c){
        this.acumBilleteActual+=c.billeteActual;
        this.acumBillete50+=c.cambio50;
        this.acumBillete20+=c.cambio20;
        this.acumBillete10+=c.cambio10;
        if(c.billeteActual==100){
        this.cntBillete100++;}
    }
    totalCambio(){
        return this.acumBilleteActual;
    }
    resto50(){
        return 6-this.acumBillete50;
    }
    resto20(){
        return 10-this.acumBillete20;
    }
    resto10(){
        return 20-this.acumBillete10;
    }
    ingreso100(){
        return this.cntBillete100;
    }
}