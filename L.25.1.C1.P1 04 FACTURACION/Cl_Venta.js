export default class Cl_Venta {
    constructor(){
        this.acumSubtotal=0;
    }
    procesarVenta(v){
        // acumular subtotal
        this.acumSubtotal+=v.subtotal();
    }
    subTotalFactura(){
        return this.acumSubtotal;
    }
    IVA(){
        return this.acumSubtotal*(16/100);
    }
    totalFactura(){
        return this.acumSubtotal+this.IVA();
    }
}