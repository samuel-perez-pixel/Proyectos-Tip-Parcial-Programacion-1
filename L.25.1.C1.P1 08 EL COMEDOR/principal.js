/*. EL COMEDOR 
Se tienen cierta cantidad suficiente de empanadas (Bs.20 c/u), pastelitos (Bs.10 c/u) y jugo 
(Bs.5 c/u). Los comensales piden sólo un tipo de comida, su cantidad y si quieren o no jugo. Se 
desea conocer cuánto pagará el comensal. También se quiere saber cuánto queda de cada 
comida al final y cuánto dinero recibió el cafetín. 
Si el cafetín tiene 20 empanadas, 15 pastelitos y 10 jugos, y Elvis compra 3 pastelitos, Joao 2 
empanadas con jugo, Melisa 5 empanadas, María 2 pastelitos con jugo y Rosa 10 empanadas, la 
salida sería como sigue: 
Elvis paga Bs.30 
Joao paga Bs.45 
Melisa paga Bs.100 
María paga Bs.25 
Rosa paga Bs.200 
Quedan 3 empanadas 
Quedan 8 pastelitos 
Quedan 8 jugos */

import Cl_Comedor from "./Cl_Comedor.js";
import Cl_Comensal from "./Cl_Comensal.js";
// creemos los comensales
let c1=new Cl_Comensal("Elvis","pastelito",3,2);
let c2=new Cl_Comensal("Joao","empanada",2,1);
let c3=new Cl_Comensal("Melisa","empanada",5,2);
let c4=new Cl_Comensal("María","pastelito",2,1);
let c5=new Cl_Comensal("Rosa","empanada",10,2);

let comedor=new Cl_Comedor();
comedor.procesarComensal(c1);
comedor.procesarComensal(c2);
comedor.procesarComensal(c3);
comedor.procesarComensal(c4);
comedor.procesarComensal(c5);

alert(`Elvis paga ${c1.montoTotal()}`);
alert(`Joao paga ${c2.montoTotal()}`);
alert(`Melisa paga ${c3.montoTotal()}`);
alert(`María paga ${c4.montoTotal()}`);
alert(`Rosa paga ${c5.montoTotal()}`);
alert(`Quedan ${comedor.restoEmpanada()} empanadas`);
alert(`Quedan ${comedor.restoPastelitos()} pastelitos`);
alert(`Quedan ${comedor.restoJugos()} jugos`);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br> Elvis paga ${c1.montoTotal()} 
<br> Joao paga ${c2.montoTotal()} 
<br> Melisa paga ${c3.montoTotal()} 
<br> María paga ${c4.montoTotal()} 
<br> Rosa paga ${c5.montoTotal()} 
<br> Quedan ${comedor.restoEmpanada()} empanadas 
<br> Quedan ${comedor.restoPastelitos()} pastelitos 
<br> Quedan ${comedor.restoJugos()} jugos 
`;