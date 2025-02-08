export default class Cl_Agencia {
    constructor(){
        this.cntSusA=0;
        this.cntSusB=0;
        this.cntSusC=0;
    }
    procesarSuscriptor(s){  
if(s.plan==="A"){
    this.cntSusA++;
}else if(s.plan==="B"){
    this.cntSusB++;}
else{
    this.cntSusC++;
}}
planFavorito(){
    if(this.cntSusA>this.cntSusB && this.cntSusA>this.cntSusC){
        return "Plan A";
    }else if(this.cntSusB>this.cntSusA && this.cntSusB>this.cntSusC){
        return "Plan B";
    }else if(this.cntSusC>this.cntSusA && this.cntSusC>this.cntSusB){
        return "Plan C";
    }
    else{
        return "Iguales de favorito: Plan A, Plan B y Plan C.";
    }
}
porcentajeSusC(){
    return (this.cntSusC/(this.cntSusA+this.cntSusB+this.cntSusC))*100;
}
}